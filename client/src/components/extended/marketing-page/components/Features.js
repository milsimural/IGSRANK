import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import MuiChip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';
const items = [
    {
        icon: React.createElement(ViewQuiltRoundedIcon, null),
        title: 'Настраиваемый дашборд',
        description: 'Изменения цен конкурентов, новые продукты и акции, положение сайта в поиске и их затраты на рекламу — все на одном экране.',
        imageLight: `url("${'https://mui.com'}/static/images/templates/templates-images/dash-light.png")`,
        imageDark: `url("${'https://mui.com'}/static/images/templates/templates-images/dash-dark.png")`,
    },
    {
        icon: React.createElement(EdgesensorHighRoundedIcon, null),
        title: '100% мобильное приложение',
        description: 'Пользуйтесь где угодно, приложение доступно на обычных компьютерах, телевизорах и мобильных устройствах.',
        imageLight: `url("${'https://mui.com'}/static/images/templates/templates-images/mobile-light.png")`,
        imageDark: `url("${'https://mui.com'}/static/images/templates/templates-images/mobile-dark.png")`,
    },
    {
        icon: React.createElement(DevicesRoundedIcon, null),
        title: 'Следите за динамикой',
        description: 'Данные о рынке обновляются каждую ночь, поэтому вы всегда в курсе актуальной информации и можете сравнить ее с предыдущим периодом.',
        imageLight: `url("${'https://mui.com'}/static/images/templates/templates-images/devices-light.png")`,
        imageDark: `url("${'https://mui.com'}/static/images/templates/templates-images/devices-dark.png")`,
    },
];
const Chip = styled(MuiChip)(({ theme }) => ({
    variants: [
        {
            props: ({ selected }) => selected,
            style: {
                background: 'linear-gradient(to bottom right, hsl(210, 98%, 48%), hsl(210, 98%, 35%))',
                color: 'hsl(0, 0%, 100%)',
                borderColor: (theme.vars || theme).palette.primary.light,
                '& .MuiChip-label': {
                    color: 'hsl(0, 0%, 100%)',
                },
                ...theme.applyStyles('dark', {
                    borderColor: (theme.vars || theme).palette.primary.dark,
                }),
            },
        },
    ],
}));
export function MobileLayout({ selectedItemIndex, handleItemClick, selectedFeature, }) {
    if (!items[selectedItemIndex]) {
        return null;
    }
    return (React.createElement(Box, { sx: {
            display: { xs: 'flex', sm: 'none' },
            flexDirection: 'column',
            gap: 2,
        } },
        React.createElement(Box, { sx: { display: 'flex', gap: 2, overflow: 'auto' } }, items.map(({ title }, index) => (React.createElement(Chip, { size: "medium", key: index, label: title, onClick: () => handleItemClick(index), selected: selectedItemIndex === index })))),
        React.createElement(Card, { variant: "outlined" },
            React.createElement(Box, { sx: (theme) => ({
                    mb: 2,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: 280,
                    backgroundImage: 'var(--items-imageLight)',
                    ...theme.applyStyles('dark', {
                        backgroundImage: 'var(--items-imageDark)',
                    }),
                }), style: items[selectedItemIndex]
                    ? {
                        '--items-imageLight': items[selectedItemIndex].imageLight,
                        '--items-imageDark': items[selectedItemIndex].imageDark,
                    }
                    : {} }),
            React.createElement(Box, { sx: { px: 2, pb: 2 } },
                React.createElement(Typography, { gutterBottom: true, sx: { color: 'text.primary', fontWeight: 'medium' } }, selectedFeature.title),
                React.createElement(Typography, { variant: "body2", sx: { color: 'text.secondary', mb: 1.5 } }, selectedFeature.description)))));
}
export default function Features() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    const handleItemClick = (index) => {
        setSelectedItemIndex(index);
    };
    const selectedFeature = items[selectedItemIndex];
    return (React.createElement(Container, { id: "features", sx: { py: { xs: 8, sm: 16 } } },
        React.createElement(Box, { sx: { width: { sm: '100%', md: '60%' } } },
            React.createElement(Typography, { component: "h2", variant: "h4", gutterBottom: true, sx: { color: 'text.primary' } }, "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438"),
            React.createElement(Typography, { variant: "body1", sx: { color: 'text.secondary', mb: { xs: 2, sm: 4 } } }, "\u0411\u0443\u0434\u0442\u0435 \u0432 \u043A\u0443\u0440\u0441\u0435 \u0442\u043E\u0433\u043E \u0447\u0442\u043E \u0434\u0435\u043B\u0430\u044E\u0442 \u043C\u0430\u0440\u043A\u0435\u0442\u043E\u043B\u043E\u0433\u0438 \u0432\u0430\u0448\u0438\u0445 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0432.")),
        React.createElement(Box, { sx: {
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row-reverse' },
                gap: 2,
            } },
            React.createElement("div", null,
                React.createElement(Box, { sx: {
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        gap: 2,
                        height: '100%',
                    } }, items.map(({ icon, title, description }, index) => (React.createElement(Box, { key: index, component: Button, onClick: () => handleItemClick(index), sx: [
                        (theme) => ({
                            p: 2,
                            height: '100%',
                            width: '100%',
                            '&:hover': {
                                backgroundColor: (theme.vars || theme).palette.action.hover,
                            },
                        }),
                        selectedItemIndex === index && {
                            backgroundColor: 'action.selected',
                        },
                    ] },
                    React.createElement(Box, { sx: [
                            {
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'left',
                                gap: 1,
                                textAlign: 'left',
                                textTransform: 'none',
                                color: 'text.secondary',
                            },
                            selectedItemIndex === index && {
                                color: 'text.primary',
                            },
                        ] },
                        icon,
                        React.createElement(Typography, { variant: "h6" }, title),
                        React.createElement(Typography, { variant: "body2" }, description)))))),
                React.createElement(MobileLayout, { selectedItemIndex: selectedItemIndex, handleItemClick: handleItemClick, selectedFeature: selectedFeature })),
            React.createElement(Box, { sx: {
                    display: { xs: 'none', sm: 'flex' },
                    width: { xs: '100%', md: '70%' },
                    height: 'var(--items-image-height)',
                } },
                React.createElement(Card, { variant: "outlined", sx: {
                        height: '100%',
                        width: '100%',
                        display: { xs: 'none', sm: 'flex' },
                        pointerEvents: 'none',
                    } },
                    React.createElement(Box, { sx: (theme) => ({
                            m: 'auto',
                            width: 420,
                            height: 500,
                            backgroundSize: 'contain',
                            backgroundImage: 'var(--items-imageLight)',
                            ...theme.applyStyles('dark', {
                                backgroundImage: 'var(--items-imageDark)',
                            }),
                        }), style: items[selectedItemIndex]
                            ? {
                                '--items-imageLight': items[selectedItemIndex].imageLight,
                                '--items-imageDark': items[selectedItemIndex].imageDark,
                            }
                            : {} }))))));
}
