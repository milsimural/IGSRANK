import * as React from 'react';
import { useColorScheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
export default function ColorModeSelect(props) {
    const { mode, setMode } = useColorScheme();
    if (!mode) {
        return null;
    }
    return (React.createElement(Select, { value: mode, onChange: (event) => setMode(event.target.value), SelectDisplayProps: {
            // @ts-ignore
            'data-screenshot': 'toggle-mode',
        }, ...props },
        React.createElement(MenuItem, { value: "system" }, "System"),
        React.createElement(MenuItem, { value: "light" }, "Light"),
        React.createElement(MenuItem, { value: "dark" }, "Dark")));
}
