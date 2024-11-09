import React, { useState, useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import axiosInstance from '../../../../axiosInstance';
import Context from '../../../../Context';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CardAlert(): JSX.Element {
  const [openModal, setOpenModal] = useState(false);
  const [site, setSite] = useState('');
  const [phone, setPhone] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
  const value = useContext(Context);

  const handleOpenModal = () => setOpenModal(true);
  
  const handleCloseModal = () => setOpenModal(false);
  
  const handleDelayCloseModal = () => {
    setTimeout(handleCloseModal, 1000); // Закрываем модальное окно через секунду
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleSubmit = async () => {
    try {
      await axiosInstance.post('/auth/audit', { site, phone, email: value.user?.email });
      setSnackbarMessage('Данные отправлены успешно!');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
      handleDelayCloseModal(); // Задерживаем закрытие модального окна
    } catch (error) {
      setSnackbarMessage('Ошибка при отправке данных');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  return (
    <>
      <Card variant="outlined" sx={{ m: 1.5, p: 1.5 }}>
        <CardContent>
          <AutoAwesomeRoundedIcon fontSize="small" />
          <Typography gutterBottom sx={{ fontWeight: 600 }}>
            Хотите получить аудит?
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Мы подготовим для Вас полный аудит вашего сайта за 2 дня.
          </Typography>
          <Button variant="contained" size="small" fullWidth onClick={handleOpenModal}>
            Получить аудит
          </Button>
        </CardContent>
      </Card>

      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={modalStyle}>
          <Typography variant="h6" component="h2" gutterBottom>
            Заполните данные для аудита
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, mb: 1 }}>Сайт</Typography>
          <TextField
            variant="outlined"
            fullWidth
            value={site}
            onChange={(e) => setSite(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Typography variant="body1" sx={{ mt: 2, mb: 1 }}>Телефон</Typography>
          <TextField
            variant="outlined"
            fullWidth
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            sx={{ mb: 5 }}
          />
          <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
            Отправить
          </Button>
        </Box>
      </Modal>

      <Snackbar 
        open={snackbarOpen} 
        autoHideDuration={6000} 
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        {/* <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert> */}
        <Alert
  onClose={handleSnackbarClose}
  severity={snackbarSeverity}
  sx={{
    width: '100%',
    bgcolor: snackbarSeverity === 'success' ? 'success.main' : 'error.main',
    color: 'background.paper'
  }}
>
  {snackbarMessage}
</Alert>
      </Snackbar>
    </>
  );
}
