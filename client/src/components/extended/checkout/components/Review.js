import * as React from 'react';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
    { name: 'Card type:', detail: 'Visa' },
    { name: 'Card holder:', detail: 'Mr. John Smith' },
    { name: 'Card number:', detail: 'xxxx-xxxx-xxxx-1234' },
    { name: 'Expiry date:', detail: '04/2024' },
];
export default function Review() {
    return (React.createElement(Stack, { spacing: 2 },
        React.createElement(List, { disablePadding: true },
            React.createElement(ListItem, { sx: { py: 1, px: 0 } },
                React.createElement(ListItemText, { primary: "Products", secondary: "4 selected" }),
                React.createElement(Typography, { variant: "body2" }, "$134.98")),
            React.createElement(ListItem, { sx: { py: 1, px: 0 } },
                React.createElement(ListItemText, { primary: "Shipping", secondary: "Plus taxes" }),
                React.createElement(Typography, { variant: "body2" }, "$9.99")),
            React.createElement(ListItem, { sx: { py: 1, px: 0 } },
                React.createElement(ListItemText, { primary: "Total" }),
                React.createElement(Typography, { variant: "subtitle1", sx: { fontWeight: 700 } }, "$144.97"))),
        React.createElement(Divider, null),
        React.createElement(Stack, { direction: "column", divider: React.createElement(Divider, { flexItem: true }), spacing: 2, sx: { my: 2 } },
            React.createElement("div", null,
                React.createElement(Typography, { variant: "subtitle2", gutterBottom: true }, "Shipment details"),
                React.createElement(Typography, { gutterBottom: true }, "John Smith"),
                React.createElement(Typography, { gutterBottom: true, sx: { color: 'text.secondary' } }, addresses.join(', '))),
            React.createElement("div", null,
                React.createElement(Typography, { variant: "subtitle2", gutterBottom: true }, "Payment details"),
                React.createElement(Grid, { container: true }, payments.map((payment) => (React.createElement(React.Fragment, { key: payment.name },
                    React.createElement(Stack, { direction: "row", spacing: 1, useFlexGap: true, sx: { width: '100%', mb: 1 } },
                        React.createElement(Typography, { variant: "body1", sx: { color: 'text.secondary' } }, payment.name),
                        React.createElement(Typography, { variant: "body2" }, payment.detail))))))))));
}
