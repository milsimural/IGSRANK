import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
const products = [
    {
        name: 'Professional plan',
        desc: 'Monthly subscription',
        price: '$15.00',
    },
    {
        name: 'Dedicated support',
        desc: 'Included in the Professional plan',
        price: 'Free',
    },
    {
        name: 'Hardware',
        desc: 'Devices needed for development',
        price: '$69.99',
    },
    {
        name: 'Landing page template',
        desc: 'License',
        price: '$49.99',
    },
];
export default function Info({ totalPrice }) {
    return (React.createElement(React.Fragment, null,
        React.createElement(Typography, { variant: "subtitle2", sx: { color: 'text.secondary' } }, "Total"),
        React.createElement(Typography, { variant: "h4", gutterBottom: true }, totalPrice),
        React.createElement(List, { disablePadding: true }, products.map((product) => (React.createElement(ListItem, { key: product.name, sx: { py: 1, px: 0 } },
            React.createElement(ListItemText, { sx: { mr: 2 }, primary: product.name, secondary: product.desc }),
            React.createElement(Typography, { variant: "body1", sx: { fontWeight: 'medium' } }, product.price)))))));
}
