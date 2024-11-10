import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import AddressForm from './components/AddressForm';
import Info from './components/Info';
import InfoMobile from './components/InfoMobile';
import PaymentForm from './components/PaymentForm';
import Review from './components/Review';
import SitemarkIcon from './components/SitemarkIcon';
import AppTheme from '../shared-theme/AppTheme';
import ColorModeIconDropdown from '../shared-theme/ColorModeIconDropdown';
const steps = ['Shipping address', 'Payment details', 'Review your order'];
function getStepContent(step) {
    switch (step) {
        case 0:
            return React.createElement(AddressForm, null);
        case 1:
            return React.createElement(PaymentForm, null);
        case 2:
            return React.createElement(Review, null);
        default:
            throw new Error('Unknown step');
    }
}
export default function Checkout(props) {
    const [activeStep, setActiveStep] = React.useState(0);
    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };
    return (React.createElement(AppTheme, { ...props },
        React.createElement(CssBaseline, { enableColorScheme: true }),
        React.createElement(Box, { sx: { position: 'fixed', top: '1rem', right: '1rem' } },
            React.createElement(ColorModeIconDropdown, null)),
        React.createElement(Grid, { container: true, sx: {
                height: {
                    xs: '100%',
                    sm: 'calc(100dvh - var(--template-frame-height, 0px))',
                },
                mt: {
                    xs: 4,
                    sm: 0,
                },
            } },
            React.createElement(Grid, { size: { xs: 12, sm: 5, lg: 4 }, sx: {
                    display: { xs: 'none', md: 'flex' },
                    flexDirection: 'column',
                    backgroundColor: 'background.paper',
                    borderRight: { sm: 'none', md: '1px solid' },
                    borderColor: { sm: 'none', md: 'divider' },
                    alignItems: 'start',
                    pt: 16,
                    px: 10,
                    gap: 4,
                } },
                React.createElement(SitemarkIcon, null),
                React.createElement(Box, { sx: {
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 1,
                        width: '100%',
                        maxWidth: 500,
                    } },
                    React.createElement(Info, { totalPrice: activeStep >= 2 ? '$144.97' : '$134.98' }))),
            React.createElement(Grid, { size: { sm: 12, md: 7, lg: 8 }, sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: '100%',
                    width: '100%',
                    backgroundColor: { xs: 'transparent', sm: 'background.default' },
                    alignItems: 'start',
                    pt: { xs: 0, sm: 16 },
                    px: { xs: 2, sm: 10 },
                    gap: { xs: 4, md: 8 },
                } },
                React.createElement(Box, { sx: {
                        display: 'flex',
                        justifyContent: { sm: 'space-between', md: 'flex-end' },
                        alignItems: 'center',
                        width: '100%',
                        maxWidth: { sm: '100%', md: 600 },
                    } },
                    React.createElement(Box, { sx: {
                            display: { xs: 'none', md: 'flex' },
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'flex-end',
                            flexGrow: 1,
                        } },
                        React.createElement(Stepper, { id: "desktop-stepper", activeStep: activeStep, sx: { width: '100%', height: 40 } }, steps.map((label) => (React.createElement(Step, { sx: { ':first-child': { pl: 0 }, ':last-child': { pr: 0 } }, key: label },
                            React.createElement(StepLabel, null, label))))))),
                React.createElement(Card, { sx: { display: { xs: 'flex', md: 'none' }, width: '100%' } },
                    React.createElement(CardContent, { sx: {
                            display: 'flex',
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        } },
                        React.createElement("div", null,
                            React.createElement(Typography, { variant: "subtitle2", gutterBottom: true }, "Selected products"),
                            React.createElement(Typography, { variant: "body1" }, activeStep >= 2 ? '$144.97' : '$134.98')),
                        React.createElement(InfoMobile, { totalPrice: activeStep >= 2 ? '$144.97' : '$134.98' }))),
                React.createElement(Box, { sx: {
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 1,
                        width: '100%',
                        maxWidth: { sm: '100%', md: 600 },
                        maxHeight: '720px',
                        gap: { xs: 5, md: 'none' },
                    } },
                    React.createElement(Stepper, { id: "mobile-stepper", activeStep: activeStep, alternativeLabel: true, sx: { display: { sm: 'flex', md: 'none' } } }, steps.map((label) => (React.createElement(Step, { sx: {
                            ':first-child': { pl: 0 },
                            ':last-child': { pr: 0 },
                            '& .MuiStepConnector-root': { top: { xs: 6, sm: 12 } },
                        }, key: label },
                        React.createElement(StepLabel, { sx: { '.MuiStepLabel-labelContainer': { maxWidth: '70px' } } }, label))))),
                    activeStep === steps.length ? (React.createElement(Stack, { spacing: 2, useFlexGap: true },
                        React.createElement(Typography, { variant: "h1" }, "\uD83D\uDCE6"),
                        React.createElement(Typography, { variant: "h5" }, "Thank you for your order!"),
                        React.createElement(Typography, { variant: "body1", sx: { color: 'text.secondary' } },
                            "Your order number is",
                            React.createElement("strong", null, "\u00A0#140396"),
                            ". We have emailed your order confirmation and will update you once its shipped."),
                        React.createElement(Button, { variant: "contained", sx: { alignSelf: 'start', width: { xs: '100%', sm: 'auto' } } }, "Go to my orders"))) : (React.createElement(React.Fragment, null,
                        getStepContent(activeStep),
                        React.createElement(Box, { sx: [
                                {
                                    display: 'flex',
                                    flexDirection: { xs: 'column-reverse', sm: 'row' },
                                    alignItems: 'end',
                                    flexGrow: 1,
                                    gap: 1,
                                    pb: { xs: 12, sm: 0 },
                                    mt: { xs: 2, sm: 0 },
                                    mb: '60px',
                                },
                                activeStep !== 0
                                    ? { justifyContent: 'space-between' }
                                    : { justifyContent: 'flex-end' },
                            ] },
                            activeStep !== 0 && (React.createElement(Button, { startIcon: React.createElement(ChevronLeftRoundedIcon, null), onClick: handleBack, variant: "text", sx: { display: { xs: 'none', sm: 'flex' } } }, "Previous")),
                            activeStep !== 0 && (React.createElement(Button, { startIcon: React.createElement(ChevronLeftRoundedIcon, null), onClick: handleBack, variant: "outlined", fullWidth: true, sx: { display: { xs: 'flex', sm: 'none' } } }, "Previous")),
                            React.createElement(Button, { variant: "contained", endIcon: React.createElement(ChevronRightRoundedIcon, null), onClick: handleNext, sx: { width: { xs: '100%', sm: 'fit-content' } } }, activeStep === steps.length - 1 ? 'Place order' : 'Next')))))))));
}
