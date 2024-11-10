import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { IndiaFlag, UsaFlag, BrazilFlag, GlobeFlag } from '../internals/components/CustomIcons';
const data = [
    { label: 'India', value: 50000 },
    { label: 'USA', value: 35000 },
    { label: 'Brazil', value: 10000 },
    { label: 'Other', value: 5000 },
];
const countries = [
    {
        name: 'India',
        value: 50,
        flag: React.createElement(IndiaFlag, null),
        color: 'hsl(220, 25%, 65%)',
    },
    {
        name: 'USA',
        value: 35,
        flag: React.createElement(UsaFlag, null),
        color: 'hsl(220, 25%, 45%)',
    },
    {
        name: 'Brazil',
        value: 10,
        flag: React.createElement(BrazilFlag, null),
        color: 'hsl(220, 25%, 30%)',
    },
    {
        name: 'Other',
        value: 5,
        flag: React.createElement(GlobeFlag, null),
        color: 'hsl(220, 25%, 20%)',
    },
];
const StyledText = styled('text', {
    shouldForwardProp: (prop) => prop !== 'variant',
})(({ theme }) => ({
    textAnchor: 'middle',
    dominantBaseline: 'central',
    // fill: themepalette.text.secondary,
    variants: [
        {
            props: {
                variant: 'primary',
            },
            style: {
                fontSize: theme.typography.h5.fontSize,
            },
        },
        {
            props: ({ variant }) => variant !== 'primary',
            style: {
                fontSize: theme.typography.body2.fontSize,
            },
        },
        {
            props: {
                variant: 'primary',
            },
            style: {
                fontWeight: theme.typography.h5.fontWeight,
            },
        },
        {
            props: ({ variant }) => variant !== 'primary',
            style: {
                fontWeight: theme.typography.body2.fontWeight,
            },
        },
    ],
}));
function PieCenterLabel({ primaryText, secondaryText }) {
    const { width, height, left, top } = useDrawingArea();
    const primaryY = top + height / 2 - 10;
    const secondaryY = primaryY + 24;
    return (React.createElement(React.Fragment, null,
        React.createElement(StyledText, { variant: "primary", x: left + width / 2, y: primaryY }, primaryText),
        React.createElement(StyledText, { variant: "secondary", x: left + width / 2, y: secondaryY }, secondaryText)));
}
const colors = [
    'hsl(220, 20%, 65%)',
    'hsl(220, 20%, 42%)',
    'hsl(220, 20%, 35%)',
    'hsl(220, 20%, 25%)',
];
export default function ChartUserByCountry() {
    return (React.createElement(Card, { variant: "outlined", sx: { display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 } },
        React.createElement(CardContent, null,
            React.createElement(Typography, { component: "h2", variant: "subtitle2" }, "Users by country"),
            React.createElement(Box, { sx: { display: 'flex', alignItems: 'center' } },
                React.createElement(PieChart, { colors: colors, margin: {
                        left: 80,
                        right: 80,
                        top: 80,
                        bottom: 80,
                    }, series: [
                        {
                            data,
                            innerRadius: 75,
                            outerRadius: 100,
                            paddingAngle: 0,
                            highlightScope: { faded: 'global', highlighted: 'item' },
                        },
                    ], height: 260, width: 260, slotProps: {
                        legend: { hidden: true },
                    } },
                    React.createElement(PieCenterLabel, { primaryText: "98.5K", secondaryText: "Total" }))),
            countries.map((country, index) => (React.createElement(Stack
            // eslint-disable-next-line react/no-array-index-key
            , { 
                // eslint-disable-next-line react/no-array-index-key
                key: index, direction: "row", sx: { alignItems: 'center', gap: 2, pb: 2 } },
                country.flag,
                React.createElement(Stack, { sx: { gap: 1, flexGrow: 1 } },
                    React.createElement(Stack, { direction: "row", sx: {
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: 2,
                        } },
                        React.createElement(Typography, { variant: "body2", sx: { fontWeight: '500' } }, country.name),
                        React.createElement(Typography, { variant: "body2", sx: { color: 'text.secondary' } },
                            country.value,
                            "%")),
                    React.createElement(LinearProgress, { variant: "determinate", "aria-label": "Number of users by country", value: country.value, sx: {
                            [`& .${linearProgressClasses.bar}`]: {
                                backgroundColor: country.color,
                            },
                        } }))))))));
}