import * as React from 'react';
import { useContext } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import Sitemark from './SitemarkIcon';
import ColorModeIconDropdown from '../../shared-theme/ColorModeIconDropdown';
import Context from '../../../../Context';
const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    backdropFilter: 'blur(24px)',
    border: '1px solid',
    borderColor: (theme.vars || theme).palette.divider,
    backgroundColor: theme.vars
        ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
        : alpha(theme.palette.background.default, 0.4),
    boxShadow: (theme.vars || theme).shadows[1],
    padding: '8px 12px',
}));
export default function AppAppBar() {
    const [open, setOpen] = React.useState(false);
    const value = useContext(Context);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    return (React.createElement(AppBar, { position: "fixed", enableColorOnDark: true, sx: {
            boxShadow: 0,
            bgcolor: 'transparent',
            backgroundImage: 'none',
            mt: 'calc(var(--template-frame-height, 0px) + 28px)',
        } },
        React.createElement(Container, { maxWidth: "lg" },
            React.createElement(StyledToolbar, { variant: "dense", disableGutters: true },
                React.createElement(Box, { sx: { flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 } },
                    React.createElement(Sitemark, null),
                    React.createElement(Box, { sx: { display: { xs: 'none', md: 'flex' } } })),
                React.createElement(Box, { sx: {
                        display: { xs: 'none', md: 'flex' },
                        gap: 1,
                        alignItems: 'center',
                    } },
                    value.user ? (React.createElement(React.Fragment, null,
                        React.createElement(Typography, { color: "textPrimary" },
                            "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C, ",
                            value.user?.email,
                            ' '),
                        React.createElement(Button, { variant: "contained", size: "small", onClick: value.logoutHandler, sx: { marginLeft: 2 } }, "\u0412\u044B\u0439\u0442\u0438"))) : (React.createElement(React.Fragment, null,
                        React.createElement(Button, { color: "primary", variant: "text", size: "small", component: Link, to: "/signin" }, "\u0412\u043E\u0439\u0442\u0438"),
                        React.createElement(Button, { color: "primary", variant: "contained", size: "small", component: Link, to: "/signup" }, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F"))),
                    React.createElement(ColorModeIconDropdown, null)),
                React.createElement(Box, { sx: { display: { xs: 'flex', md: 'none' }, gap: 1 } },
                    React.createElement(ColorModeIconDropdown, { size: "medium" }),
                    React.createElement(IconButton, { "aria-label": "Menu button", onClick: toggleDrawer(true) },
                        React.createElement(MenuIcon, null)),
                    React.createElement(Drawer, { anchor: "top", open: open, onClose: toggleDrawer(false), PaperProps: {
                            sx: {
                                top: 'var(--template-frame-height, 0px)',
                            },
                        } },
                        React.createElement(Box, { sx: { p: 2, backgroundColor: 'background.default' } },
                            React.createElement(Box, { sx: {
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                } },
                                React.createElement(IconButton, { onClick: toggleDrawer(false) },
                                    React.createElement(CloseRoundedIcon, null))),
                            React.createElement(MenuItem, null, "Features"),
                            React.createElement(MenuItem, null, "Testimonials"),
                            React.createElement(MenuItem, null, "Highlights"),
                            React.createElement(MenuItem, null, "Pricing"),
                            React.createElement(MenuItem, null, "FAQ"),
                            React.createElement(MenuItem, null, "Blog"),
                            React.createElement(Divider, { sx: { my: 3 } }),
                            React.createElement(MenuItem, null,
                                React.createElement(Button, { color: "primary", variant: "contained", fullWidth: true }, "Sign up")),
                            React.createElement(MenuItem, null,
                                React.createElement(Button, { color: "primary", variant: "outlined", fullWidth: true }, "Sign in")))))))));
}
