import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';
import SitemarkIcon from './SitemarkIcon';
function Copyright() {
    return (React.createElement(Typography, { variant: "body2", sx: { color: 'text.secondary', mt: 1 } },
        'Copyright © ',
        React.createElement(Link, { color: "text.secondary", href: "https://mui.com/" }, "Sitemark"),
        "\u00A0",
        new Date().getFullYear()));
}
export default function Footer() {
    return (React.createElement(React.Fragment, null,
        React.createElement(Divider, null),
        React.createElement(Container, { sx: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 4, sm: 8 },
                py: { xs: 8, sm: 10 },
                textAlign: { sm: 'center', md: 'left' },
            } },
            React.createElement(Box, { sx: {
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    width: '100%',
                    justifyContent: 'space-between',
                } },
                React.createElement(Box, { sx: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 4,
                        minWidth: { xs: '100%', sm: '60%' },
                    } },
                    React.createElement(Box, { sx: { width: { xs: '100%', sm: '60%' } } },
                        React.createElement(SitemarkIcon, null),
                        React.createElement(Typography, { variant: "body2", gutterBottom: true, sx: { fontWeight: 600, mt: 2 } }, "Join the newsletter"),
                        React.createElement(Typography, { variant: "body2", sx: { color: 'text.secondary', mb: 2 } }, "Subscribe for weekly updates. No spams ever!"),
                        React.createElement(InputLabel, { htmlFor: "email-newsletter" }, "Email"),
                        React.createElement(Stack, { direction: "row", spacing: 1, useFlexGap: true },
                            React.createElement(TextField, { id: "email-newsletter", hiddenLabel: true, size: "small", variant: "outlined", fullWidth: true, "aria-label": "Enter your email address", placeholder: "Your email address", slotProps: {
                                    htmlInput: {
                                        autoComplete: 'off',
                                        'aria-label': 'Enter your email address',
                                    },
                                }, sx: { width: '250px' } }),
                            React.createElement(Button, { variant: "contained", color: "primary", size: "small", sx: { flexShrink: 0 } }, "Subscribe")))),
                React.createElement(Box, { sx: {
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        gap: 1,
                    } },
                    React.createElement(Typography, { variant: "body2", sx: { fontWeight: 'medium' } }, "Product"),
                    React.createElement(Link, { color: "text.secondary", variant: "body2", href: "#" }, "Features"),
                    React.createElement(Link, { color: "text.secondary", variant: "body2", href: "#" }, "Testimonials"),
                    React.createElement(Link, { color: "text.secondary", variant: "body2", href: "#" }, "Highlights"),
                    React.createElement(Link, { color: "text.secondary", variant: "body2", href: "#" }, "Pricing"),
                    React.createElement(Link, { color: "text.secondary", variant: "body2", href: "#" }, "FAQs")),
                React.createElement(Box, { sx: {
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        gap: 1,
                    } },
                    React.createElement(Typography, { variant: "body2", sx: { fontWeight: 'medium' } }, "Company"),
                    React.createElement(Link, { color: "text.secondary", variant: "body2", href: "#" }, "About us"),
                    React.createElement(Link, { color: "text.secondary", variant: "body2", href: "#" }, "Careers"),
                    React.createElement(Link, { color: "text.secondary", variant: "body2", href: "#" }, "Press")),
                React.createElement(Box, { sx: {
                        display: { xs: 'none', sm: 'flex' },
                        flexDirection: 'column',
                        gap: 1,
                    } },
                    React.createElement(Typography, { variant: "body2", sx: { fontWeight: 'medium' } }, "Legal"),
                    React.createElement(Link, { color: "text.secondary", variant: "body2", href: "#" }, "Terms"),
                    React.createElement(Link, { color: "text.secondary", variant: "body2", href: "#" }, "Privacy"),
                    React.createElement(Link, { color: "text.secondary", variant: "body2", href: "#" }, "Contact"))),
            React.createElement(Box, { sx: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    pt: { xs: 4, sm: 8 },
                    width: '100%',
                    borderTop: '1px solid',
                    borderColor: 'divider',
                } },
                React.createElement("div", null,
                    React.createElement(Link, { color: "text.secondary", variant: "body2", href: "#" }, "Privacy Policy"),
                    React.createElement(Typography, { sx: { display: 'inline', mx: 0.5, opacity: 0.5 } }, "\u00A0\u2022\u00A0"),
                    React.createElement(Link, { color: "text.secondary", variant: "body2", href: "#" }, "Terms of Service"),
                    React.createElement(Copyright, null)),
                React.createElement(Stack, { direction: "row", spacing: 1, useFlexGap: true, sx: { justifyContent: 'left', color: 'text.secondary' } },
                    React.createElement(IconButton, { color: "inherit", size: "small", href: "https://github.com/mui", "aria-label": "GitHub", sx: { alignSelf: 'center' } },
                        React.createElement(FacebookIcon, null)),
                    React.createElement(IconButton, { color: "inherit", size: "small", href: "https://x.com/MaterialUI", "aria-label": "X", sx: { alignSelf: 'center' } },
                        React.createElement(TwitterIcon, null)),
                    React.createElement(IconButton, { color: "inherit", size: "small", href: "https://www.linkedin.com/company/mui/", "aria-label": "LinkedIn", sx: { alignSelf: 'center' } },
                        React.createElement(LinkedInIcon, null)))))));
}
