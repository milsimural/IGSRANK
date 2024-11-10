import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppAppBar from './components/AppAppBar';
import MainContent from './components/MainContent';
import Latest from './components/Latest';
import Footer from './components/Footer';
import AppTheme from '../shared-theme/AppTheme';
export default function Blog(props) {
    const { disableCustomTheme } = props;
    return (React.createElement(AppTheme, { disableCustomTheme: disableCustomTheme },
        React.createElement(CssBaseline, { enableColorScheme: true }),
        React.createElement(AppAppBar, null),
        React.createElement(Container, { maxWidth: "lg", component: "main", sx: { display: 'flex', flexDirection: 'column', my: 16, gap: 4 } },
            React.createElement(MainContent, null),
            React.createElement(Latest, null)),
        React.createElement(Footer, null)));
}
