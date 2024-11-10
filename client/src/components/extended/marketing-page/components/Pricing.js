import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
const tiers = [
    {
        title: 'Бесплатный',
        price: '0',
        description: [
            '10 конкурентов',
            'Динамика за 1 месяц',
            'Ежедневное обновление',
            'Поддержка по email',
        ],
        buttonText: 'Бесплатная регистрация',
        buttonVariant: 'outlined',
        buttonColor: 'primary',
    },
    {
        title: 'Професиональный',
        subheader: 'Recommended',
        price: '9950',
        description: [
            '40 конкурентов',
            'Динамика за 1 год',
            'Настраиваемые дашборды',
            'Настраиваемое обновление',
            'Live поддержка черех чат',
            'Best deals',
        ],
        buttonText: 'Начать сейчас',
        buttonVariant: 'contained',
        buttonColor: 'secondary',
    },
    {
        title: 'Энтерпрайз',
        price: '32950',
        description: [
            'Все конкуренты региона',
            'Динамика за все время',
            'Персональная доработка дашбордов',
            'Выделенный менеджер',
        ],
        buttonText: 'Свяжитесь с нами',
        buttonVariant: 'outlined',
        buttonColor: 'primary',
    },
];
export default function Pricing() {
    return (React.createElement(Container, { id: "pricing", sx: {
            pt: { xs: 4, sm: 12 },
            pb: { xs: 8, sm: 16 },
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
            React.createElement(Typography, { component: "h2", variant: "h4", gutterBottom: true, sx: { color: 'text.primary' } }, "\u0422\u0430\u0440\u0438\u0444\u044B"),
            React.createElement(Typography, { variant: "body1", sx: { color: 'text.secondary' } }, "\u0413\u0438\u0431\u043A\u0438\u0435 \u0442\u0430\u0440\u0438\u0444\u044B \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u0435\u0441\u043B\u0438 \u043D\u0438 \u043E\u0434\u043D\u0438 \u0438\u0437 \u0442\u0430\u0440\u0438\u0444\u043E\u0432 \u043D\u0435 \u0443\u0434\u043E\u0432\u043B\u0435\u0442\u0432\u043E\u0440\u044F\u0435\u0442 \u0432\u0430\u0448\u0438\u043C \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u044F\u043C, \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438.")),
        React.createElement(Grid, { container: true, spacing: 3, sx: { alignItems: 'center', justifyContent: 'center', width: '100%' } }, tiers.map((tier) => (React.createElement(Grid, { size: { xs: 12, sm: tier.title === 'Enterprise' ? 12 : 6, md: 4 }, key: tier.title },
            React.createElement(Card, { sx: [
                    {
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 4,
                    },
                    tier.title === 'Professional' &&
                        ((theme) => ({
                            border: 'none',
                            background: 'radial-gradient(circle at 50% 0%, hsl(220, 20%, 35%), hsl(220, 30%, 6%))',
                            boxShadow: `0 8px 12px hsla(220, 20%, 42%, 0.2)`,
                            ...theme.applyStyles('dark', {
                                background: 'radial-gradient(circle at 50% 0%, hsl(220, 20%, 20%), hsl(220, 30%, 16%))',
                                boxShadow: `0 8px 12px hsla(0, 0%, 0%, 0.8)`,
                            }),
                        })),
                ] },
                React.createElement(CardContent, null,
                    React.createElement(Box, { sx: [
                            {
                                mb: 1,
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: 2,
                            },
                            tier.title === 'Professional'
                                ? { color: 'grey.100' }
                                : { color: '' },
                        ] },
                        React.createElement(Typography, { component: "h3", variant: "h6" }, tier.title),
                        tier.title === 'Professional' && (React.createElement(Chip, { icon: React.createElement(AutoAwesomeIcon, null), label: tier.subheader }))),
                    React.createElement(Box, { sx: [
                            {
                                display: 'flex',
                                alignItems: 'baseline',
                            },
                            tier.title === 'Professional'
                                ? { color: 'grey.50' }
                                : { color: null },
                        ] },
                        React.createElement(Typography, { component: "h3", variant: "h2" }, tier.price),
                        React.createElement(Typography, { component: "h3", variant: "h6" }, "\u00A0 \u0432 \u043C\u0435\u0441\u044F\u0446")),
                    React.createElement(Divider, { sx: { my: 2, opacity: 0.8, borderColor: 'divider' } }),
                    tier.description.map((line) => (React.createElement(Box, { key: line, sx: { py: 1, display: 'flex', gap: 1.5, alignItems: 'center' } },
                        React.createElement(CheckCircleRoundedIcon, { sx: [
                                {
                                    width: 20,
                                },
                                tier.title === 'Professional'
                                    ? { color: 'primary.light' }
                                    : { color: 'primary.main' },
                            ] }),
                        React.createElement(Typography, { variant: "subtitle2", component: 'span', sx: [
                                tier.title === 'Professional'
                                    ? { color: 'grey.50' }
                                    : { color: null },
                            ] }, line))))),
                React.createElement(CardActions, null,
                    React.createElement(Button, { fullWidth: true, variant: tier.buttonVariant, color: tier.buttonColor }, tier.buttonText)))))))));
}
