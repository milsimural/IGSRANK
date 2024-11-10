import * as React from 'react';
import DarkModeIcon from '@mui/icons-material/DarkModeRounded';
import LightModeIcon from '@mui/icons-material/LightModeRounded';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useColorScheme } from '@mui/material/styles';
export default function ColorModeIconDropdown(props) {
    const { mode, systemMode, setMode } = useColorScheme();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleMode = (targetMode) => () => {
        setMode(targetMode);
        handleClose();
    };
    if (!mode) {
        return (React.createElement(Box, { "data-screenshot": "toggle-mode", sx: (theme) => ({
                verticalAlign: 'bottom',
                display: 'inline-flex',
                width: '2.25rem',
                height: '2.25rem',
                borderRadius: (theme.vars || theme).shape.borderRadius,
                border: '1px solid',
                borderColor: (theme.vars || theme).palette.divider,
            }) }));
    }
    const resolvedMode = (systemMode || mode);
    const icon = {
        light: React.createElement(LightModeIcon, null),
        dark: React.createElement(DarkModeIcon, null),
    }[resolvedMode];
    return (React.createElement(React.Fragment, null,
        React.createElement(IconButton, { "data-screenshot": "toggle-mode", onClick: handleClick, disableRipple: true, size: "small", "aria-controls": open ? 'color-scheme-menu' : undefined, "aria-haspopup": "true", "aria-expanded": open ? 'true' : undefined, ...props }, icon),
        React.createElement(Menu, { anchorEl: anchorEl, id: "account-menu", open: open, onClose: handleClose, onClick: handleClose, slotProps: {
                paper: {
                    variant: 'outlined',
                    sx: {
                        my: '4px',
                    },
                },
            }, transformOrigin: { horizontal: 'right', vertical: 'top' }, anchorOrigin: { horizontal: 'right', vertical: 'bottom' } },
            React.createElement(MenuItem, { selected: mode === 'system', onClick: handleMode('system') }, "System"),
            React.createElement(MenuItem, { selected: mode === 'light', onClick: handleMode('light') }, "Light"),
            React.createElement(MenuItem, { selected: mode === 'dark', onClick: handleMode('dark') }, "Dark"))));
}
