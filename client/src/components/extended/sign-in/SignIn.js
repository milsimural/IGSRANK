import * as React from 'react';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import ForgotPassword from './ForgotPassword';
import { SitemarkIcon } from './CustomIcons';
import AppTheme from '../shared-theme/AppTheme';
import ColorModeSelect from '../shared-theme/ColorModeSelect';
import axiosInstance, { setAccessToken } from '../../../axiosInstance';
import Context from '../../../Context';
const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
        maxWidth: '450px',
    },
    boxShadow: 'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    ...theme.applyStyles('dark', {
        boxShadow: 'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
}));
const SignInContainer = styled(Stack)(({ theme }) => ({
    height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
    minHeight: '100%',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(4),
    },
    '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        zIndex: -1,
        inset: 0,
        backgroundImage: 'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
        backgroundRepeat: 'no-repeat',
        ...theme.applyStyles('dark', {
            backgroundImage: 'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
        }),
    },
}));
export default function SignIn() {
    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    const value = useContext(Context);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = async (event) => {
        if (emailError || passwordError) {
            event.preventDefault();
            return;
        }
        const data = new FormData(event.currentTarget);
        event.preventDefault();
        await axiosInstance
            .post('/auth/login', {
            email: data.get('email'),
            password: data.get('password'),
        })
            .then((res) => {
            value?.setUser(res.data.user);
            setAccessToken(res.data.accessToken);
            navigate('/dashboard');
        });
    };
    const validateInputs = () => {
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        let isValid = true;
        if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
            setEmailError(true);
            setEmailErrorMessage('Введите правильный email.');
            isValid = false;
        }
        else {
            setEmailError(false);
            setEmailErrorMessage('');
        }
        if (!password.value || password.value.length < 6) {
            setPasswordError(true);
            setPasswordErrorMessage('Пароль должен быть минимум 6 символов.');
            isValid = false;
        }
        else {
            setPasswordError(false);
            setPasswordErrorMessage('');
        }
        return isValid;
    };
    return (React.createElement(AppTheme, null,
        React.createElement(CssBaseline, { enableColorScheme: true }),
        React.createElement(SignInContainer, { direction: "column", justifyContent: "space-between" },
            React.createElement(ColorModeSelect, { sx: { position: 'fixed', top: '1rem', right: '1rem' } }),
            React.createElement(Card, { variant: "outlined" },
                React.createElement(SitemarkIcon, null),
                React.createElement(Typography, { component: "h1", variant: "h4", sx: { width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' } }, "\u0412\u043E\u0439\u0442\u0438"),
                React.createElement(Box, { component: "form", onSubmit: handleSubmit, noValidate: true, sx: {
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        gap: 2,
                    } },
                    React.createElement(FormControl, null,
                        React.createElement(FormLabel, { htmlFor: "email" }, "Email"),
                        React.createElement(TextField, { error: emailError, helperText: emailErrorMessage, id: "email", type: "email", name: "email", placeholder: "your@email.ru", autoComplete: "email", autoFocus: true, required: true, fullWidth: true, variant: "outlined", color: emailError ? 'error' : 'primary' })),
                    React.createElement(FormControl, null,
                        React.createElement(Box, { sx: { display: 'flex', justifyContent: 'space-between' } },
                            React.createElement(FormLabel, { htmlFor: "password" }, "\u041F\u0430\u0440\u043E\u043B\u044C")),
                        React.createElement(TextField, { error: passwordError, helperText: passwordErrorMessage, name: "password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022", type: "password", id: "password", autoComplete: "current-password", autoFocus: true, required: true, fullWidth: true, variant: "outlined", color: passwordError ? 'error' : 'primary' })),
                    React.createElement(ForgotPassword, { open: open, handleClose: handleClose }),
                    React.createElement(Button, { type: "submit", sx: { mt: 2 }, fullWidth: true, variant: "contained", onClick: validateInputs }, "\u0412\u043E\u0439\u0442\u0438"),
                    React.createElement(Typography, { sx: { textAlign: 'center' } },
                        "\u0412\u044B \u043D\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B?",
                        ' ',
                        React.createElement("span", null,
                            React.createElement(Link, { component: RouterLink, to: "/signup", variant: "body2", sx: { alignSelf: 'center' } }, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"))))))));
}
