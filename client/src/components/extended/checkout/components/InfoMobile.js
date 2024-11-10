import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import Info from './Info';
export default function InfoMobile({ totalPrice }) {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    const DrawerList = (React.createElement(Box, { sx: { width: 'auto', px: 3, pb: 3, pt: 8 }, role: "presentation" },
        React.createElement(IconButton, { onClick: toggleDrawer(false), sx: { position: 'absolute', right: 8, top: 8 } },
            React.createElement(CloseIcon, null)),
        React.createElement(Info, { totalPrice: totalPrice })));
    return (React.createElement("div", null,
        React.createElement(Button, { variant: "text", endIcon: React.createElement(ExpandMoreRoundedIcon, null), onClick: toggleDrawer(true) }, "View details"),
        React.createElement(Drawer, { open: open, anchor: "top", onClose: toggleDrawer(false), PaperProps: {
                sx: {
                    top: 'var(--template-frame-height, 0px)',
                    backgroundImage: 'none',
                    backgroundColor: 'background.paper',
                },
            } }, DrawerList)));
}
