import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './menuSlice'; // кусочек стора помещенный в отдельный файлик
const store = configureStore({
    reducer: {
        menu: menuReducer,
    }
});
export default store;
