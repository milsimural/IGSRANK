import axios from 'axios';
import type { User } from './components/types/user';

const axiosInstance = axios.create({
  baseURL: '/api',
  withCredentials: true,
});

let accessToken: string = '';

export function setAccessToken(newToken: string): void {
  accessToken = newToken;
}

axiosInstance.interceptors.request.use((config) => {
  if (!config.headers) {
    config.headers = {};
  }
  if (!config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    // Сохраняется конфигурация запроса, который вызвал ошибку. Это необходимо для повторения запроса в случае успеха обновления токена.
    const prevRequest = error.config;
    console.log(prevRequest);
    //  Проверяется, был ли ответ от сервера и имеет ли он статус-код 403 (Forbidden) - часто это признак истечения срока действия токена. Также проверяется дополнительное свойство sent в prevRequest, чтобы избежать бесконечной повторной попытки отправки одного и того же запроса.
    if (error.response && error.response.status === 403 && !prevRequest.sent) {
      try {
        // Делаем запрос для получения нового токена доступа. Предположительно, сервер возвращает объект с новым токеном.
        const response = await axios.get('/api/tokens/refresh');
        // Обновляем токен доступа, используя данные, полученные из ответа.
        accessToken = response.data.accessToken;
        // Устанавливается флаг sent, чтобы пометить, что мы уже пытались повторно отправить этот запрос.
        prevRequest.sent = true;
        // Обновляется заголовок авторизации в предыдущем запросе с новым токеном.
        prevRequest.headers.Authorization = `Bearer ${accessToken}`;
        // Повторно отправляется исходный запрос с обновленным заголовком авторизации.
        return await axiosInstance(prevRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
