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
        React.createElement(DialogTitle, null, "Reset password"),
        React.createElement(DialogContent, { sx: { display: 'flex', flexDirection: 'column', gap: 2, width: '100%' } },
            React.createElement(DialogContentText, null, "Enter your account's email address, and we'll send you a link to reset your password."),
            React.createElement(OutlinedInput, { autoFocus: true, required: true, margin: "dense", id: "email", name: "email", label: "Email address", placeholder: "Email address", type: "email", fullWidth: true })),
        React.createElement(DialogActions, { sx: { pb: 3, px: 3 } },
            React.createElement(Button, { onClick: handleClose }, "Cancel"),
            React.createElement(Button, { variant: "contained", type: "submit" }, "Continue"))));
}
