import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid2';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/system';
const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));
export default function AddressForm() {
    return (React.createElement(Grid, { container: true, spacing: 3 },
        React.createElement(FormGrid, { size: { xs: 12, md: 6 } },
            React.createElement(FormLabel, { htmlFor: "first-name", required: true }, "First name"),
            React.createElement(OutlinedInput, { id: "first-name", name: "first-name", type: "name", placeholder: "John", autoComplete: "first name", required: true, size: "small" })),
        React.createElement(FormGrid, { size: { xs: 12, md: 6 } },
            React.createElement(FormLabel, { htmlFor: "last-name", required: true }, "Last name"),
            React.createElement(OutlinedInput, { id: "last-name", name: "last-name", type: "last-name", placeholder: "Snow", autoComplete: "last name", required: true, size: "small" })),
        React.createElement(FormGrid, { size: { xs: 12 } },
            React.createElement(FormLabel, { htmlFor: "address1", required: true }, "Address line 1"),
            React.createElement(OutlinedInput, { id: "address1", name: "address1", type: "address1", placeholder: "Street name and number", autoComplete: "shipping address-line1", required: true, size: "small" })),
        React.createElement(FormGrid, { size: { xs: 12 } },
            React.createElement(FormLabel, { htmlFor: "address2" }, "Address line 2"),
            React.createElement(OutlinedInput, { id: "address2", name: "address2", type: "address2", placeholder: "Apartment, suite, unit, etc. (optional)", autoComplete: "shipping address-line2", required: true, size: "small" })),
        React.createElement(FormGrid, { size: { xs: 6 } },
            React.createElement(FormLabel, { htmlFor: "city", required: true }, "City"),
            React.createElement(OutlinedInput, { id: "city", name: "city", type: "city", placeholder: "New York", autoComplete: "City", required: true, size: "small" })),
        React.createElement(FormGrid, { size: { xs: 6 } },
            React.createElement(FormLabel, { htmlFor: "state", required: true }, "State"),
            React.createElement(OutlinedInput, { id: "state", name: "state", type: "state", placeholder: "NY", autoComplete: "State", required: true, size: "small" })),
        React.createElement(FormGrid, { size: { xs: 6 } },
            React.createElement(FormLabel, { htmlFor: "zip", required: true }, "Zip / Postal code"),
            React.createElement(OutlinedInput, { id: "zip", name: "zip", type: "zip", placeholder: "12345", autoComplete: "shipping postal-code", required: true, size: "small" })),
        React.createElement(FormGrid, { size: { xs: 6 } },
            React.createElement(FormLabel, { htmlFor: "country", required: true }, "Country"),
            React.createElement(OutlinedInput, { id: "country", name: "country", type: "country", placeholder: "United States", autoComplete: "shipping country", required: true, size: "small" })),
        React.createElement(FormGrid, { size: { xs: 12 } },
            React.createElement(FormControlLabel, { control: React.createElement(Checkbox, { name: "saveAddress", value: "yes" }), label: "Use this address for payment details" }))));
}
