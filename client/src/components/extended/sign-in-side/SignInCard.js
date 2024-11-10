import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MuiCard from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ForgotPassword from './ForgotPassword';
import { GoogleIcon, FacebookIcon, SitemarkIcon } from './CustomIcons';
const Card = styled(MuiCard)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',
    width: '100%',
    padding: theme.spacing(4),
    gap: theme.spacing(2),
    boxShadow: 'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
    [theme.breakpoints.up('sm')]: {
        width: '450px',
    },
    ...theme.applyStyles('dark', {
        boxShadow: 'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
    }),
}));
export default function SignInCard() {
    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = (event) => {
        if (emailError || passwordError) {
            event.preventDefault();
            return;
        }
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    const validateInputs = () => {
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        let isValid = true;
        if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
            setEmailError(true);
            setEmailErrorMessage('Please enter a valid email address.');
            isValid = false;
        }
        else {
            setEmailError(false);
            setEmailErrorMessage('');
        }
        if (!password.value || password.value.length < 6) {
            setPasswordError(true);
            setPasswordErrorMessage('Password must be at least 6 characters long.');
            isValid = false;
        }
        else {
            setPasswordError(false);
            setPasswordErrorMessage('');
        }
        return isValid;
    };
    return (React.createElement(Card, { variant: "outlined" },
        React.createElement(Box, { sx: { display: { xs: 'flex', md: 'none' } } },
            React.createElement(SitemarkIcon, null)),
        React.createElement(Typography, { component: "h1", variant: "h4", sx: { width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' } }, "Sign in"),
        React.createElement(Box, { component: "form", onSubmit: handleSubmit, noValidate: true, sx: { display: 'flex', flexDirection: 'column', width: '100%', gap: 2 } },
            React.createElement(FormControl, null,
                React.createElement(FormLabel, { htmlFor: "email" }, "Email"),
                React.createElement(TextField, { error: emailError, helperText: emailErrorMessage, id: "email", type: "email", name: "email", placeholder: "your@email.com", autoComplete: "email", autoFocus: true, required: true, fullWidth: true, variant: "outlined", color: emailError ? 'error' : 'primary' })),
            React.createElement(FormControl, null,
                React.createElement(Box, { sx: { display: 'flex', justifyContent: 'space-between' } },
                    React.createElement(FormLabel, { htmlFor: "password" }, "Password"),
                    React.createElement(Link, { component: "button", type: "button", onClick: handleClickOpen, variant: "body2", sx: { alignSelf: 'baseline' } }, "Forgot your password?")),
                React.createElement(TextField, { error: passwordError, helperText: passwordErrorMessage, name: "password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022", type: "password", id: "password", autoComplete: "current-password", autoFocus: true, required: true, fullWidth: true, variant: "outlined", color: passwordError ? 'error' : 'primary' })),
            React.createElement(FormControlLabel, { control: React.createElement(Checkbox, { value: "remember", color: "primary" }), label: "Remember me" }),
            React.createElement(ForgotPassword, { open: open, handleClose: handleClose }),
            React.createElement(Button, { type: "submit", fullWidth: true, variant: "contained", onClick: validateInputs }, "Sign in"),
            React.createElement(Typography, { sx: { textAlign: 'center' } },
                "Don't have an account?",
                ' ',
                React.createElement("span", null,
                    React.createElement(Link, { href: "/material-ui/getting-started/templates/sign-in/", variant: "body2", sx: { alignSelf: 'center' } }, "Sign up")))),
        React.createElement(Divider, null, "or"),
        React.createElement(Box, { sx: { display: 'flex', flexDirection: 'column', gap: 2 } },
            React.createElement(Button, { fullWidth: true, variant: "outlined", onClick: () => alert('Sign in with Google'), startIcon: React.createElement(GoogleIcon, null) }, "Sign in with Google"),
            React.createElement(Button, { fullWidth: true, variant: "outlined", onClick: () => alert('Sign in with Facebook'), startIcon: React.createElement(FacebookIcon, null) }, "Sign in with Facebook"))));
}
