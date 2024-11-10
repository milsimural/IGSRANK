import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer, { drawerClasses } from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import MenuButton from './MenuButton';
import MenuContent from './MenuContent';
import CardAlert from './CardAlert';
export default function SideMenuMobile({ open, toggleDrawer }) {
    return (React.createElement(Drawer, { anchor: "right", open: open, onClose: toggleDrawer(false), sx: {
            zIndex: (theme) => theme.zIndex.drawer + 1,
            [`& .${drawerClasses.paper}`]: {
                backgroundImage: 'none',
                backgroundColor: 'background.paper',
            },
        } },
        React.createElement(Stack, { sx: {
                maxWidth: '70dvw',
                height: '100%',
            } },
            React.createElement(Stack, { direction: "row", sx: { p: 2, pb: 0, gap: 1 } },
                React.createElement(Stack, { direction: "row", sx: { gap: 1, alignItems: 'center', flexGrow: 1, p: 1 } },
                    React.createElement(Avatar, { sizes: "small", alt: "Riley Carter", src: "/static/images/avatar/7.jpg", sx: { width: 24, height: 24 } }),
                    React.createElement(Typography, { component: "p", variant: "h6" }, "Riley Carter")),
                React.createElement(MenuButton, { showBadge: true },
                    React.createElement(NotificationsRoundedIcon, null))),
            React.createElement(Divider, null),
            React.createElement(Stack, { sx: { flexGrow: 1 } },
                React.createElement(MenuContent, null),
                React.createElement(Divider, null)),
            React.createElement(CardAlert, null),
            React.createElement(Stack, { sx: { p: 2 } },
                React.createElement(Button, { variant: "outlined", fullWidth: true, startIcon: React.createElement(LogoutRoundedIcon, null) }, "Logout")))));
}
