import * as React from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import MuiCard from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import RadioGroup from '@mui/material/RadioGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import SimCardRoundedIcon from '@mui/icons-material/SimCardRounded';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
const Card = styled(MuiCard)(({ theme }) => ({
    border: '1px solid',
    borderColor: theme.palette.divider,
    width: '100%',
    '&:hover': {
        background: 'linear-gradient(to bottom right, hsla(210, 100%, 97%, 0.5) 25%, hsla(210, 100%, 90%, 0.3) 100%)',
        borderColor: 'primary.light',
        boxShadow: '0px 2px 8px hsla(0, 0%, 0%, 0.1)',
        ...theme.applyStyles('dark', {
            background: 'linear-gradient(to right bottom, hsla(210, 100%, 12%, 0.2) 25%, hsla(210, 100%, 16%, 0.2) 100%)',
            borderColor: 'primary.dark',
            boxShadow: '0px 1px 8px hsla(210, 100%, 25%, 0.5) ',
        }),
    },
    [theme.breakpoints.up('md')]: {
        flexGrow: 1,
        maxWidth: `calc(50% - ${theme.spacing(1)})`,
    },
    variants: [
        {
            props: ({ selected }) => selected,
            style: {
                borderColor: theme.palette.primary.light,
                ...theme.applyStyles('dark', {
                    borderColor: theme.palette.primary.dark,
                }),
            },
        },
    ],
}));
const PaymentContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: 375,
    padding: theme.spacing(3),
    borderRadius: `calc(${theme.shape.borderRadius}px + 4px)`,
    border: '1px solid ',
    borderColor: theme.palette.divider,
    background: 'linear-gradient(to bottom right, hsla(220, 35%, 97%, 0.3) 25%, hsla(220, 20%, 88%, 0.3) 100%)',
    boxShadow: '0px 4px 8px hsla(210, 0%, 0%, 0.05)',
    [theme.breakpoints.up('xs')]: {
        height: 300,
    },
    [theme.breakpoints.up('sm')]: {
        height: 350,
    },
    ...theme.applyStyles('dark', {
        background: 'linear-gradient(to right bottom, hsla(220, 30%, 6%, 0.2) 25%, hsla(220, 20%, 25%, 0.2) 100%)',
        boxShadow: '0px 4px 8px hsl(220, 35%, 0%)',
    }),
}));
const FormGrid = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
}));
export default function PaymentForm() {
    const [paymentType, setPaymentType] = React.useState('creditCard');
    const [cardNumber, setCardNumber] = React.useState('');
    const [cvv, setCvv] = React.useState('');
    const [expirationDate, setExpirationDate] = React.useState('');
    const handlePaymentTypeChange = (event) => {
        setPaymentType(event.target.value);
    };
    const handleCardNumberChange = (event) => {
        const value = event.target.value.replace(/\D/g, '');
        const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 ');
        if (value.length <= 16) {
            setCardNumber(formattedValue);
        }
    };
    const handleCvvChange = (event) => {
        const value = event.target.value.replace(/\D/g, '');
        if (value.length <= 3) {
            setCvv(value);
        }
    };
    const handleExpirationDateChange = (event) => {
        const value = event.target.value.replace(/\D/g, '');
        const formattedValue = value.replace(/(\d{2})(?=\d{2})/, '$1/');
        if (value.length <= 4) {
            setExpirationDate(formattedValue);
        }
    };
    return (React.createElement(Stack, { spacing: { xs: 3, sm: 6 }, useFlexGap: true },
        React.createElement(FormControl, { component: "fieldset", fullWidth: true },
            React.createElement(RadioGroup, { "aria-label": "Payment options", name: "paymentType", value: paymentType, onChange: handlePaymentTypeChange, sx: {
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 2,
                } },
                React.createElement(Card, { selected: paymentType === 'creditCard' },
                    React.createElement(CardActionArea, { onClick: () => setPaymentType('creditCard'), sx: {
                            '.MuiCardActionArea-focusHighlight': {
                                backgroundColor: 'transparent',
                            },
                            '&:focus-visible': {
                                backgroundColor: 'action.hover',
                            },
                        } },
                        React.createElement(CardContent, { sx: { display: 'flex', alignItems: 'center', gap: 1 } },
                            React.createElement(CreditCardRoundedIcon, { fontSize: "small", sx: [
                                    (theme) => ({
                                        color: 'grey.400',
                                        ...theme.applyStyles('dark', {
                                            color: 'grey.600',
                                        }),
                                    }),
                                    paymentType === 'creditCard' && {
                                        color: 'primary.main',
                                    },
                                ] }),
                            React.createElement(Typography, { sx: { fontWeight: 'medium' } }, "Card")))),
                React.createElement(Card, { selected: paymentType === 'bankTransfer' },
                    React.createElement(CardActionArea, { onClick: () => setPaymentType('bankTransfer'), sx: {
                            '.MuiCardActionArea-focusHighlight': {
                                backgroundColor: 'transparent',
                            },
                            '&:focus-visible': {
                                backgroundColor: 'action.hover',
                            },
                        } },
                        React.createElement(CardContent, { sx: { display: 'flex', alignItems: 'center', gap: 1 } },
                            React.createElement(AccountBalanceRoundedIcon, { fontSize: "small", sx: [
                                    (theme) => ({
                                        color: 'grey.400',
                                        ...theme.applyStyles('dark', {
                                            color: 'grey.600',
                                        }),
                                    }),
                                    paymentType === 'bankTransfer' && {
                                        color: 'primary.main',
                                    },
                                ] }),
                            React.createElement(Typography, { sx: { fontWeight: 'medium' } }, "Bank account")))))),
        paymentType === 'creditCard' && (React.createElement(Box, { sx: { display: 'flex', flexDirection: 'column', gap: 2 } },
            React.createElement(PaymentContainer, null,
                React.createElement(Box, { sx: { display: 'flex', justifyContent: 'space-between' } },
                    React.createElement(Typography, { variant: "subtitle2" }, "Credit card"),
                    React.createElement(CreditCardRoundedIcon, { sx: { color: 'text.secondary' } })),
                React.createElement(SimCardRoundedIcon, { sx: {
                        fontSize: { xs: 48, sm: 56 },
                        transform: 'rotate(90deg)',
                        color: 'text.secondary',
                    } }),
                React.createElement(Box, { sx: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        gap: 2,
                    } },
                    React.createElement(FormGrid, { sx: { flexGrow: 1 } },
                        React.createElement(FormLabel, { htmlFor: "card-number", required: true }, "Card number"),
                        React.createElement(OutlinedInput, { id: "card-number", autoComplete: "card-number", placeholder: "0000 0000 0000 0000", required: true, size: "small", value: cardNumber, onChange: handleCardNumberChange })),
                    React.createElement(FormGrid, { sx: { maxWidth: '20%' } },
                        React.createElement(FormLabel, { htmlFor: "cvv", required: true }, "CVV"),
                        React.createElement(OutlinedInput, { id: "cvv", autoComplete: "CVV", placeholder: "123", required: true, size: "small", value: cvv, onChange: handleCvvChange }))),
                React.createElement(Box, { sx: { display: 'flex', gap: 2 } },
                    React.createElement(FormGrid, { sx: { flexGrow: 1 } },
                        React.createElement(FormLabel, { htmlFor: "card-name", required: true }, "Name"),
                        React.createElement(OutlinedInput, { id: "card-name", autoComplete: "card-name", placeholder: "John Smith", required: true, size: "small" })),
                    React.createElement(FormGrid, { sx: { flexGrow: 1 } },
                        React.createElement(FormLabel, { htmlFor: "card-expiration", required: true }, "Expiration date"),
                        React.createElement(OutlinedInput, { id: "card-expiration", autoComplete: "card-expiration", placeholder: "MM/YY", required: true, size: "small", value: expirationDate, onChange: handleExpirationDateChange })))),
            React.createElement(FormControlLabel, { control: React.createElement(Checkbox, { name: "saveCard" }), label: "Remember credit card details for next time" }))),
        paymentType === 'bankTransfer' && (React.createElement(Box, { sx: { display: 'flex', flexDirection: 'column', gap: 2 } },
            React.createElement(Alert, { severity: "warning", icon: React.createElement(WarningRoundedIcon, null) }, "Your order will be processed once we receive the funds."),
            React.createElement(Typography, { variant: "subtitle1", sx: { fontWeight: 'medium' } }, "Bank account"),
            React.createElement(Typography, { variant: "body1", gutterBottom: true }, "Please transfer the payment to the bank account details shown below."),
            React.createElement(Box, { sx: { display: 'flex', gap: 1 } },
                React.createElement(Typography, { variant: "body1", sx: { color: 'text.secondary' } }, "Bank:"),
                React.createElement(Typography, { variant: "body1", sx: { fontWeight: 'medium' } }, "Mastercredit")),
            React.createElement(Box, { sx: { display: 'flex', gap: 1 } },
                React.createElement(Typography, { variant: "body1", sx: { color: 'text.secondary' } }, "Account number:"),
                React.createElement(Typography, { variant: "body1", sx: { fontWeight: 'medium' } }, "123456789")),
            React.createElement(Box, { sx: { display: 'flex', gap: 1 } },
                React.createElement(Typography, { variant: "body1", sx: { color: 'text.secondary' } }, "Routing number:"),
                React.createElement(Typography, { variant: "body1", sx: { fontWeight: 'medium' } }, "987654321"))))));
}
