import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
export default function Copyright(props) {
    return (React.createElement(Typography, { variant: "body2", align: "center", ...props, sx: [
            {
                color: 'text.secondary',
            },
            ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
        ] },
        'Разработчик © ',
        React.createElement(Link, { color: "inherit", href: "https://revanta.ru/" }, "\u0420\u0435\u0432\u0430\u043D\u0442\u0430"),
        ' ',
        new Date().getFullYear(),
        '.'));
}
