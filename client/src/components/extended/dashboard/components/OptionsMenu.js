import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider, { dividerClasses } from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MuiMenuItem from '@mui/material/MenuItem';
import { paperClasses } from '@mui/material/Paper';
import { listClasses } from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon, { listItemIconClasses } from '@mui/material/ListItemIcon';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import MenuButton from './MenuButton';
const MenuItem = styled(MuiMenuItem)({
    margin: '2px 0',
});
export default function OptionsMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(MenuButton, { "aria-label": "Open menu", onClick: handleClick, sx: { borderColor: 'transparent' } },
            React.createElement(MoreVertRoundedIcon, null)),
        React.createElement(Menu, { anchorEl: anchorEl, id: "menu", open: open, onClose: handleClose, onClick: handleClose, transformOrigin: { horizontal: 'right', vertical: 'top' }, anchorOrigin: { horizontal: 'right', vertical: 'bottom' }, sx: {
                [`& .${listClasses.root}`]: {
                    padding: '4px',
                },
                [`& .${paperClasses.root}`]: {
                    padding: 0,
                },
                [`& .${dividerClasses.root}`]: {
                    margin: '4px -4px',
                },
            } },
            React.createElement(MenuItem, { onClick: handleClose }, "Profile"),
            React.createElement(MenuItem, { onClick: handleClose }, "My account"),
            React.createElement(Divider, null),
            React.createElement(MenuItem, { onClick: handleClose }, "Add another account"),
            React.createElement(MenuItem, { onClick: handleClose }, "Settings"),
            React.createElement(Divider, null),
            React.createElement(MenuItem, { onClick: handleClose, sx: {
                    [`& .${listItemIconClasses.root}`]: {
                        ml: 'auto',
                        minWidth: 0,
                    },
                } },
                React.createElement(ListItemText, null, "Logout"),
                React.createElement(ListItemIcon, null,
                    React.createElement(LogoutRoundedIcon, { fontSize: "small" }))))));
}
