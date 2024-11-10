import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function FAQ() {
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (React.createElement(Container, { id: "faq", sx: {
            pt: { xs: 4, sm: 12 },
            pb: { xs: 8, sm: 16 },
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: { xs: 3, sm: 6 },
        } },
        React.createElement(Typography, { component: "h2", variant: "h4", sx: {
                color: 'text.primary',
                width: { sm: '100%', md: '60%' },
                textAlign: { sm: 'left', md: 'center' },
            } }, "\u0422\u0438\u043F\u043E\u0432\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B"),
        React.createElement(Box, { sx: { width: '100%' } },
            React.createElement(Accordion, { expanded: expanded === 'panel1', onChange: handleChange('panel1') },
                React.createElement(AccordionSummary, { expandIcon: React.createElement(ExpandMoreIcon, null), "aria-controls": "panel1d-content", id: "panel1d-header" },
                    React.createElement(Typography, { component: "h3", variant: "subtitle2" }, "How do I contact customer support if I have a question or issue?")),
                React.createElement(AccordionDetails, null,
                    React.createElement(Typography, { variant: "body2", gutterBottom: true, sx: { maxWidth: { sm: '100%', md: '70%' } } },
                        "You can reach our customer support team by emailing",
                        React.createElement(Link, null, " support@email.com "),
                        "or calling our toll-free number. We're here to assist you promptly."))),
            React.createElement(Accordion, { expanded: expanded === 'panel2', onChange: handleChange('panel2') },
                React.createElement(AccordionSummary, { expandIcon: React.createElement(ExpandMoreIcon, null), "aria-controls": "panel2d-content", id: "panel2d-header" },
                    React.createElement(Typography, { component: "h3", variant: "subtitle2" }, "Can I return the product if it doesn't meet my expectations?")),
                React.createElement(AccordionDetails, null,
                    React.createElement(Typography, { variant: "body2", gutterBottom: true, sx: { maxWidth: { sm: '100%', md: '70%' } } }, "Absolutely! We offer a hassle-free return policy. If you're not completely satisfied, you can return the product within [number of days] days for a full refund or exchange."))),
            React.createElement(Accordion, { expanded: expanded === 'panel3', onChange: handleChange('panel3') },
                React.createElement(AccordionSummary, { expandIcon: React.createElement(ExpandMoreIcon, null), "aria-controls": "panel3d-content", id: "panel3d-header" },
                    React.createElement(Typography, { component: "h3", variant: "subtitle2" }, "What makes your product stand out from others in the market?")),
                React.createElement(AccordionDetails, null,
                    React.createElement(Typography, { variant: "body2", gutterBottom: true, sx: { maxWidth: { sm: '100%', md: '70%' } } }, "Our product distinguishes itself through its adaptability, durability, and innovative features. We prioritize user satisfaction and continually strive to exceed expectations in every aspect."))),
            React.createElement(Accordion, { expanded: expanded === 'panel4', onChange: handleChange('panel4') },
                React.createElement(AccordionSummary, { expandIcon: React.createElement(ExpandMoreIcon, null), "aria-controls": "panel4d-content", id: "panel4d-header" },
                    React.createElement(Typography, { component: "h3", variant: "subtitle2" }, "Is there a warranty on the product, and what does it cover?")),
                React.createElement(AccordionDetails, null,
                    React.createElement(Typography, { variant: "body2", gutterBottom: true, sx: { maxWidth: { sm: '100%', md: '70%' } } }, "Yes, our product comes with a [length of warranty] warranty. It covers defects in materials and workmanship. If you encounter any issues covered by the warranty, please contact our customer support for assistance."))))));
}
