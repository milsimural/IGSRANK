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
export default function CardAlert() {
    const [openModal, setOpenModal] = useState(false);
    const [site, setSite] = useState('');
    const [phone, setPhone] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
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
            await axiosInstance.post('/auth/audit', { site, phone, email: value?.user?.email });
            setSnackbarMessage('Данные отправлены успешно!');
            setSnackbarSeverity('success');
            setSnackbarOpen(true);
            handleDelayCloseModal(); // Задерживаем закрытие модального окна
        }
        catch (error) {
            setSnackbarMessage('Ошибка при отправке данных');
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Card, { variant: "outlined", sx: { m: 1.5, p: 1.5 } },
            React.createElement(CardContent, null,
                React.createElement(AutoAwesomeRoundedIcon, { fontSize: "small" }),
                React.createElement(Typography, { gutterBottom: true, sx: { fontWeight: 600 } }, "\u0425\u043E\u0442\u0438\u0442\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0430\u0443\u0434\u0438\u0442?"),
                React.createElement(Typography, { variant: "body2", sx: { mb: 2, color: 'text.secondary' } }, "\u041C\u044B \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u043C \u0434\u043B\u044F \u0412\u0430\u0441 \u043F\u043E\u043B\u043D\u044B\u0439 \u0430\u0443\u0434\u0438\u0442 \u0432\u0430\u0448\u0435\u0433\u043E \u0441\u0430\u0439\u0442\u0430 \u0437\u0430 2 \u0434\u043D\u044F."),
                React.createElement(Button, { variant: "contained", size: "small", fullWidth: true, onClick: handleOpenModal }, "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0430\u0443\u0434\u0438\u0442"))),
        React.createElement(Modal, { open: openModal, onClose: handleCloseModal },
            React.createElement(Box, { sx: modalStyle },
                React.createElement(Typography, { variant: "h6", component: "h2", gutterBottom: true }, "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0434\u043B\u044F \u0430\u0443\u0434\u0438\u0442\u0430"),
                React.createElement(Typography, { variant: "body1", sx: { mt: 2, mb: 1 } }, "\u0421\u0430\u0439\u0442"),
                React.createElement(TextField, { variant: "outlined", fullWidth: true, value: site, onChange: (e) => setSite(e.target.value), sx: { mb: 2 } }),
                React.createElement(Typography, { variant: "body1", sx: { mt: 2, mb: 1 } }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"),
                React.createElement(TextField, { variant: "outlined", fullWidth: true, value: phone, onChange: (e) => setPhone(e.target.value), sx: { mb: 5 } }),
                React.createElement(Button, { variant: "contained", color: "primary", fullWidth: true, onClick: handleSubmit }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"))),
        React.createElement(Snackbar, { open: snackbarOpen, autoHideDuration: 6000, onClose: handleSnackbarClose, anchorOrigin: { vertical: 'bottom', horizontal: 'center' } },
            React.createElement(Alert, { onClose: handleSnackbarClose, severity: snackbarSeverity, sx: {
                    width: '100%',
                    bgcolor: snackbarSeverity === 'success' ? 'success.main' : 'error.main',
                    color: 'background.paper',
                } }, snackbarMessage))));
}
