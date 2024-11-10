import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
export default function HighlightedCard() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return (React.createElement(Card, { sx: { height: '100%' } },
        React.createElement(CardContent, null,
            React.createElement(InsightsRoundedIcon, null),
            React.createElement(Typography, { component: "h2", variant: "subtitle2", gutterBottom: true, sx: { fontWeight: '600' } }, "Explore your data"),
            React.createElement(Typography, { sx: { color: 'text.secondary', mb: '8px' } }, "Uncover performance and visitor insights with our data wizardry."),
            React.createElement(Button, { variant: "contained", size: "small", color: "primary", endIcon: React.createElement(ChevronRightRoundedIcon, null), fullWidth: isSmallScreen }, "Get insights"))));
}
