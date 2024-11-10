import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import AppTheme from '../shared-theme/AppTheme';
export default function MarketingPage() {
    return (React.createElement(AppTheme, null,
        React.createElement(CssBaseline, { enableColorScheme: true }),
        React.createElement(AppAppBar, null),
        React.createElement(Hero, null),
        React.createElement("div", null,
            React.createElement(Footer, null))));
}
