import * as React from 'react';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import AppTheme from '../shared-theme/AppTheme';
import { SitemarkIcon } from './CustomIcons';
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
    boxShadow: 'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    [theme.breakpoints.up('sm')]: {
        width: '450px',
    },
    ...theme.applyStyles('dark', {
        boxShadow: 'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
}));
const SignUpContainer = styled(Stack)(({ theme }) => ({
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
export default function SignUp() {
    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
    const [nameError, setNameError] = React.useState(false);
    const [nameErrorMessage, setNameErrorMessage] = React.useState('');
    const navigate = useNavigate();
    const value = useContext(Context);
    const validateInputs = () => {
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const name = document.getElementById('name');
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
            setPasswordErrorMessage('Минимальная длинна пароля 6 символов.');
            isValid = false;
        }
        else {
            setPasswordError(false);
            setPasswordErrorMessage('');
        }
        if (!name.value || name.value.length < 1) {
            setNameError(true);
            setNameErrorMessage('Требуется имя.');
            isValid = false;
        }
        else {
            setNameError(false);
            setNameErrorMessage('');
        }
        return isValid;
    };
    const handleSubmit = async (event) => {
        if (nameError || emailError || passwordError) {
            event.preventDefault();
            return;
        }
        const data = new FormData(event.currentTarget);
        try {
            event.preventDefault();
            const res = await axiosInstance.post('/auth/signup', {
                name: data.get('name'),
                email: data.get('email'),
                password: data.get('password'),
            });
            value.setUser(res.data.user);
            console.log(res.data.user);
            setAccessToken(res.data.accessToken);
            console.log(res.data.accessToken);
            alert('Регистрация прошла успешно');
            navigate('/');
        }
        catch (error) {
            alert(`Произошла ошибка при регистрации ${error.response.data.message}`);
        }
    };
    return (React.createElement(AppTheme, null,
        React.createElement(CssBaseline, { enableColorScheme: true }),
        React.createElement(ColorModeSelect, { sx: { position: 'fixed', top: '1rem', right: '1rem' } }),
        React.createElement(SignUpContainer, { direction: "column", justifyContent: "space-between" },
            React.createElement(Card, { variant: "outlined" },
                React.createElement(SitemarkIcon, null),
                React.createElement(Typography, { component: "h1", variant: "h4", sx: { width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' } }, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"),
                React.createElement(Box, { component: "form", onSubmit: handleSubmit, sx: { display: 'flex', flexDirection: 'column', gap: 2 } },
                    React.createElement(FormControl, null,
                        React.createElement(FormLabel, { htmlFor: "name" }, "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F"),
                        React.createElement(TextField, { autoComplete: "name", name: "name", required: true, fullWidth: true, id: "name", placeholder: "\u0418\u0432\u0430\u043D \u0418\u0432\u0430\u043D\u043E\u0432", error: nameError, helperText: nameErrorMessage, color: nameError ? 'error' : 'primary' })),
                    React.createElement(FormControl, null,
                        React.createElement(FormLabel, { htmlFor: "email" }, "Email"),
                        React.createElement(TextField, { required: true, fullWidth: true, id: "email", placeholder: "your@email.ru", name: "email", autoComplete: "email", variant: "outlined", error: emailError, helperText: emailErrorMessage, color: passwordError ? 'error' : 'primary' })),
                    React.createElement(FormControl, null,
                        React.createElement(FormLabel, { htmlFor: "password" }, "\u041F\u0430\u0440\u043E\u043B\u044C"),
                        React.createElement(TextField, { required: true, fullWidth: true, name: "password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022", type: "password", id: "password", autoComplete: "new-password", variant: "outlined", error: passwordError, helperText: passwordErrorMessage, color: passwordError ? 'error' : 'primary' })),
                    React.createElement(FormControlLabel, { control: React.createElement(Checkbox, { value: "allowExtraEmails", color: "primary" }), label: "\u042F \u0445\u043E\u0447\u0443 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u043D\u043E\u0432\u043E\u0441\u0442\u0438 \u043D\u0430 email." }),
                    React.createElement(Button, { type: "submit", fullWidth: true, variant: "contained", onClick: validateInputs }, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"),
                    React.createElement(Typography, { sx: { textAlign: 'center' } },
                        "\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B?",
                        ' ',
                        React.createElement("span", null,
                            React.createElement(Link, { href: "/material-ui/getting-started/templates/sign-in/", variant: "body2", sx: { alignSelf: 'center' } }, "\u0412\u043E\u0439\u0442\u0438"))))))));
}
