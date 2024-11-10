import * as React from 'react';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import screen from 'src/Scrren.png';
import Context from '../../../../Context';
const StyledBox = styled('div')(({ theme }) => ({
    alignSelf: 'center',
    width: '100%',
    height: 400,
    marginTop: theme.spacing(8),
    borderRadius: (theme.vars || theme).shape.borderRadius,
    outline: '6px solid',
    outlineColor: 'hsla(220, 25%, 80%, 0.2)',
    border: '1px solid',
    borderColor: (theme.vars || theme).palette.grey[200],
    boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
    backgroundImage: `url(${screen})`,
    backgroundSize: 'cover',
    [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing(10),
        height: 700,
    },
    ...theme.applyStyles('dark', {
        boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
        backgroundImage: `url(${'https://mui.com'}/static/screenshots/material-ui/getting-started/templates/dashboard-dark.jpg)`,
        outlineColor: 'hsla(220, 20%, 42%, 0.1)',
        borderColor: (theme.vars || theme).palette.grey[700],
    }),
}));
export default function Hero() {
    const navigate = useNavigate();
    const value = useContext(Context);
    return (React.createElement(Box, { id: "hero", sx: (theme) => ({
            width: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
            ...theme.applyStyles('dark', {
                backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
            }),
        }) },
        React.createElement(Container, { sx: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                pt: { xs: 14, sm: 20 },
                pb: { xs: 8, sm: 12 },
            } },
            React.createElement(Stack, { spacing: 2, useFlexGap: true, sx: { alignItems: 'center', width: { xs: '100%', sm: '70%' } } },
                React.createElement(Typography, { variant: "h1", sx: {
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: 'center',
                        fontSize: 'clamp(3rem, 10vw, 3.5rem)',
                    } },
                    React.createElement("center", null, "\u0410\u043D\u0430\u043B\u0438\u0437 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0432 \u0434\u043B\u044F \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439")),
                React.createElement(Typography, { sx: {
                        textAlign: 'center',
                        color: 'text.secondary',
                        width: { sm: '100%', md: '80%' },
                    } }, "\u041F\u0440\u043E\u0430\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u0443\u0439\u0442\u0435 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0432 \u0432 \u0441\u0435\u0442\u0438 \u0438\u043D\u0442\u0435\u0440\u043D\u0435\u0442"),
                React.createElement(Stack, { direction: { xs: 'column', sm: 'row' }, spacing: 1, justifyContent: 'center', useFlexGap: true, sx: { pt: 2, width: { xs: '100%', sm: '350px' } } },
                    React.createElement(Button, { variant: "contained", color: "primary", size: "medium", sx: { minWidth: 'fit-content' }, onClick: value.user ? () => navigate('/dashboard') : () => navigate('/signup') }, "\u041D\u0430\u0447\u0430\u0442\u044C"))),
            React.createElement(StyledBox, { id: "image" }))));
}
