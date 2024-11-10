import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import OutlinedInput from '@mui/material/OutlinedInput';
export default function ForgotPassword({ open, handleClose }) {
    return (React.createElement(Dialog, { open: open, onClose: handleClose, PaperProps: {
            component: 'form',
            onSubmit: (event) => {
                event.preventDefault();
                handleClose();
            },
            sx: { backgroundImage: 'none' },
        } },
        React.createElement(DialogTitle, null, "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C"),
        React.createElement(DialogContent, { sx: { display: 'flex', flexDirection: 'column', gap: 2, width: '100%' } },
            React.createElement(DialogContentText, null, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435  email \u0430\u0434\u0440\u0435\u0441\u0441, \u043F\u0440\u0438\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0439 \u043A \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0443 \u0438 \u043C\u044B \u0432\u044B\u0448\u043B\u0435\u043C \u0432\u0430\u043C \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u0441\u043C\u0435\u043D\u0443 \u043F\u0430\u0440\u043E\u043B\u044F."),
            React.createElement(OutlinedInput, { autoFocus: true, required: true, margin: "dense", id: "email", name: "email", label: "Email", placeholder: "Email", type: "email", fullWidth: true })),
        React.createElement(DialogActions, { sx: { pb: 3, px: 3 } },
            React.createElement(Button, { onClick: handleClose }, "\u041E\u0442\u043C\u0435\u043D\u0430"),
            React.createElement(Button, { variant: "contained", type: "submit" }, "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C"))));
}
