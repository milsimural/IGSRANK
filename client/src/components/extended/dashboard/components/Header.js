import * as React from 'react';
import { useContext } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
// import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
// import CustomDatePicker from './CustomDatePicker';
import NavbarBreadcrumbs from './NavbarBreadcrumbs';
// import MenuButton from './MenuButton';
import ColorModeIconDropdown from '../../shared-theme/ColorModeIconDropdown';
import Context from '../../../../Context';
// import Search from './Search';
export default function Header() {
    const value = useContext(Context);
    return (React.createElement(Stack, { direction: "row", sx: {
            display: { xs: 'none', md: 'flex' },
            width: '100%',
            alignItems: { xs: 'flex-start', md: 'center' },
            justifyContent: 'space-between',
            maxWidth: { sm: '100%', md: '1700px' },
            pt: 1.5,
        }, spacing: 2 },
        React.createElement(NavbarBreadcrumbs, null),
        React.createElement(Stack, { direction: "row", sx: { gap: 1 } },
            React.createElement(Box, { sx: {
                    display: { xs: 'none', md: 'flex' },
                    gap: 1,
                    alignItems: 'center',
                } },
                value.user ? (React.createElement("p", null,
                    "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C, ",
                    value.user?.email,
                    ' ',
                    React.createElement(Button, { variant: "contained", size: "small", onClick: value.logoutHandler, sx: { marginLeft: 2 } }, "\u0412\u044B\u0439\u0442\u0438"))) : (React.createElement(React.Fragment, null,
                    React.createElement(Button, { color: "primary", variant: "text", size: "small", component: Link, to: "/signin" }, "\u0412\u043E\u0439\u0442\u0438"),
                    React.createElement(Button, { color: "primary", variant: "contained", size: "small", component: Link, to: "/signup" }, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"))),
                React.createElement(ColorModeIconDropdown, null)))));
}
