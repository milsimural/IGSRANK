import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { BarChart } from '@mui/x-charts/BarChart';
import { useTheme } from '@mui/material/styles';
export default function PageViewsBarChart() {
    const theme = useTheme();
    const colorPalette = [
        (theme.vars || theme).palette.primary.dark,
        (theme.vars || theme).palette.primary.main,
        (theme.vars || theme).palette.primary.light,
    ];
    return (React.createElement(Card, { variant: "outlined", sx: { width: '100%' } },
        React.createElement(CardContent, null,
            React.createElement(Typography, { component: "h2", variant: "subtitle2", gutterBottom: true }, "Page views and downloads"),
            React.createElement(Stack, { sx: { justifyContent: 'space-between' } },
                React.createElement(Stack, { direction: "row", sx: {
                        alignContent: { xs: 'center', sm: 'flex-start' },
                        alignItems: 'center',
                        gap: 1,
                    } },
                    React.createElement(Typography, { variant: "h4", component: "p" }, "1.3M"),
                    React.createElement(Chip, { size: "small", color: "error", label: "-8%" })),
                React.createElement(Typography, { variant: "caption", sx: { color: 'text.secondary' } }, "Page views and downloads for the last 6 months")),
            React.createElement(BarChart, { borderRadius: 8, colors: colorPalette, xAxis: [
                    {
                        scaleType: 'band',
                        categoryGapRatio: 0.5,
                        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                    },
                ], series: [
                    {
                        id: 'page-views',
                        label: 'Page views',
                        data: [2234, 3872, 2998, 4125, 3357, 2789, 2998],
                        stack: 'A',
                    },
                    {
                        id: 'downloads',
                        label: 'Downloads',
                        data: [3098, 4215, 2384, 2101, 4752, 3593, 2384],
                        stack: 'A',
                    },
                    {
                        id: 'conversions',
                        label: 'Conversions',
                        data: [4051, 2275, 3129, 4693, 3904, 2038, 2275],
                        stack: 'A',
                    },
                ], height: 250, margin: { left: 50, right: 0, top: 20, bottom: 20 }, grid: { horizontal: true }, slotProps: {
                    legend: {
                        hidden: true,
                    },
                } }))));
}
