import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
function Copyright() {
    return (React.createElement(Typography, { variant: "body2", sx: { color: 'text.secondary', mt: 1 } },
        'Copyright © ',
        React.createElement(Link, { color: "text.secondary", href: "https://mui.com/" }, "Sitemark"),
        "\u00A0",
        new Date().getFullYear()));
}
export default function Footer() {
    return (React.createElement(Container, { sx: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: { xs: 4, sm: 8 },
            py: { xs: 8, sm: 10 },
            textAlign: { sm: 'center', md: 'left' },
        } },
        React.createElement(Box, { sx: {
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                width: '100%',
                justifyContent: 'space-between',
            } }),
        React.createElement(Box, { sx: {
                display: 'flex',
                justifyContent: 'space-between',
                pt: { xs: 4, sm: 8 },
                width: '100%',
                borderTop: '1px solid',
                borderColor: 'divider',
            } },
            React.createElement("div", null,
                React.createElement(Link, { color: "text.secondary", variant: "body2", href: "https://revanta.ru" }, "\u0410\u0433\u0435\u043D\u0442\u0441\u0442\u0432\u043E \"\u0420\u0435\u0432\u0430\u043D\u0442\u0430\"")))));
}
