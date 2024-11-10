import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
export default function Search() {
    return (React.createElement(FormControl, { sx: { width: { xs: '100%', md: '25ch' } }, variant: "outlined" },
        React.createElement(OutlinedInput, { size: "small", id: "search", placeholder: "Search\u2026", sx: { flexGrow: 1 }, startAdornment: React.createElement(InputAdornment, { position: "start", sx: { color: 'text.primary' } },
                React.createElement(SearchRoundedIcon, { fontSize: "small" })), inputProps: {
                'aria-label': 'search',
            } })));
}
