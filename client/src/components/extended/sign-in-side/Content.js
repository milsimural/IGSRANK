import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import { SitemarkIcon } from './CustomIcons';
const items = [
    {
        icon: React.createElement(SettingsSuggestRoundedIcon, { sx: { color: 'text.secondary' } }),
        title: 'Adaptable performance',
        description: 'Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.',
    },
    {
        icon: React.createElement(ConstructionRoundedIcon, { sx: { color: 'text.secondary' } }),
        title: 'Built to last',
        description: 'Experience unmatched durability that goes above and beyond with lasting investment.',
    },
    {
        icon: React.createElement(ThumbUpAltRoundedIcon, { sx: { color: 'text.secondary' } }),
        title: 'Great user experience',
        description: 'Integrate our product into your routine with an intuitive and easy-to-use interface.',
    },
    {
        icon: React.createElement(AutoFixHighRoundedIcon, { sx: { color: 'text.secondary' } }),
        title: 'Innovative functionality',
        description: 'Stay ahead with features that set new standards, addressing your evolving needs better than the rest.',
    },
];
export default function Content() {
    return (React.createElement(Stack, { sx: { flexDirection: 'column', alignSelf: 'center', gap: 4, maxWidth: 450 } },
        React.createElement(Box, { sx: { display: { xs: 'none', md: 'flex' } } },
            React.createElement(SitemarkIcon, null)),
        items.map((item, index) => (React.createElement(Stack, { key: index, direction: "row", sx: { gap: 2 } },
            item.icon,
            React.createElement("div", null,
                React.createElement(Typography, { gutterBottom: true, sx: { fontWeight: 'medium' } }, item.title),
                React.createElement(Typography, { variant: "body2", sx: { color: 'text.secondary' } }, item.description)))))));
}
