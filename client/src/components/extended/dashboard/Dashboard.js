import * as React from 'react';
import { alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Header from './components/Header';
import MainGrid from './components/MainGrid';
import SideMenu from './components/SideMenu';
import AppTheme from '../shared-theme/AppTheme';
import { chartsCustomizations, dataGridCustomizations, datePickersCustomizations, treeViewCustomizations, } from './theme/customizations';
const xThemeComponents = {
    ...chartsCustomizations,
    ...dataGridCustomizations,
    ...datePickersCustomizations,
    ...treeViewCustomizations,
};
export default function Dashboard() {
    return (React.createElement(AppTheme, { themeComponents: xThemeComponents },
        React.createElement(CssBaseline, { enableColorScheme: true }),
        React.createElement(Box, { sx: { display: 'flex' } },
            React.createElement(SideMenu, null),
            React.createElement(Box, { component: "main", sx: (theme) => ({
                    flexGrow: 1,
                    backgroundColor: theme.vars
                        ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
                        : alpha(theme.palette.background.default, 1),
                    overflow: 'auto',
                }) },
                React.createElement(Stack, { spacing: 2, sx: {
                        alignItems: 'center',
                        mx: 3,
                        pb: 5,
                        mt: { xs: 8, md: 0 },
                    } },
                    React.createElement(Header, null),
                    React.createElement(MainGrid, null))))));
}
