import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
const items = [
    {
        icon: React.createElement(SettingsSuggestRoundedIcon, null),
        title: 'Adaptable performance',
        description: 'Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.',
    },
    {
        icon: React.createElement(ConstructionRoundedIcon, null),
        title: 'Built to last',
        description: 'Experience unmatched durability that goes above and beyond with lasting investment.',
    },
    {
        icon: React.createElement(ThumbUpAltRoundedIcon, null),
        title: 'Great user experience',
        description: 'Integrate our product into your routine with an intuitive and easy-to-use interface.',
    },
    {
        icon: React.createElement(AutoFixHighRoundedIcon, null),
        title: 'Innovative functionality',
        description: 'Stay ahead with features that set new standards, addressing your evolving needs better than the rest.',
    },
    {
        icon: React.createElement(SupportAgentRoundedIcon, null),
        title: 'Reliable support',
        description: 'Count on our responsive customer support, offering assistance that goes beyond the purchase.',
    },
    {
        icon: React.createElement(QueryStatsRoundedIcon, null),
        title: 'Precision in every detail',
        description: 'Enjoy a meticulously crafted product where small touches make a significant impact on your overall experience.',
    },
];
export default function Highlights() {
    return (React.createElement(Box, { id: "highlights", sx: {
            pt: { xs: 4, sm: 12 },
            pb: { xs: 8, sm: 16 },
            color: 'white',
            bgcolor: 'grey.900',
        } },
        React.createElement(Container, { sx: {
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 3, sm: 6 },
            } },
            React.createElement(Box, { sx: {
                    width: { sm: '100%', md: '60%' },
                    textAlign: { sm: 'left', md: 'center' },
                } },
                React.createElement(Typography, { component: "h2", variant: "h4", gutterBottom: true }, "\u041F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430"),
                React.createElement(Typography, { variant: "body1", sx: { color: 'grey.400' } }, "\"\u0412\u0441\u0435 \u0432 \u043E\u0434\u043D\u043E\u043C\" \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u043C\u0430\u0440\u043A\u0435\u0442\u043E\u043B\u043E\u0433\u043E\u0432 \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u043A\u0430\u043C\u043F\u0430\u043D\u0438\u0439 \u0441 \u043D\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043C\u044B\u043C\u0438 \u0434\u0430\u0448\u0431\u043E\u0440\u0434\u0430\u043C\u0438 \u043F\u043E\u0434 \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u0438 \u0432\u0430\u0448\u0435\u0433\u043E \u043E\u0442\u0434\u0435\u043B\u0430 \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0430.")),
            React.createElement(Grid, { container: true, spacing: 2 }, items.map((item, index) => (React.createElement(Grid, { size: { xs: 12, sm: 6, md: 4 }, key: index },
                React.createElement(Stack, { direction: "column", component: Card, spacing: 1, useFlexGap: true, sx: {
                        color: 'inherit',
                        p: 3,
                        height: '100%',
                        borderColor: 'hsla(220, 25%, 25%, 0.3)',
                        backgroundColor: 'grey.800',
                    } },
                    React.createElement(Box, { sx: { opacity: '50%' } }, item.icon),
                    React.createElement("div", null,
                        React.createElement(Typography, { gutterBottom: true, sx: { fontWeight: 'medium' } }, item.title),
                        React.createElement(Typography, { variant: "body2", sx: { color: 'grey.400' } }, item.description))))))))));
}
