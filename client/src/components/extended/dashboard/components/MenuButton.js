import * as React from 'react';
import Badge, { badgeClasses } from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
export default function MenuButton({ showBadge = false, ...props }) {
    return (React.createElement(Badge, { color: "error", variant: "dot", invisible: !showBadge, sx: { [`& .${badgeClasses.badge}`]: { right: 2, top: 2 } } },
        React.createElement(IconButton, { size: "small", ...props })));
}
