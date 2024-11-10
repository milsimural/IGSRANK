import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMenuActivePoint } from 'src/menuSlice';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import { useNavigate } from 'react-router-dom';
import LocationCityIcon from '@mui/icons-material/LocationCity';
export default function MenuContent() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const activePoint = useSelector((state) => state.menu.menuActivePoint);
    const handleClick = (city) => {
        dispatch(setMenuActivePoint(city)); // Устанавливаем новое значение
    };
    const mainListItems = [
        { text: 'Москва', icon: React.createElement(LocationCityIcon, null), link: () => handleClick('moscow'), value: 'moscow' },
        { text: 'Екатеринбург', icon: React.createElement(LocationCityIcon, null), link: () => handleClick('ekaterinburg'), value: 'ekaterinburg' },
        { text: 'Челябинск', icon: React.createElement(LocationCityIcon, null), link: () => handleClick('chel'), value: 'chel' },
        { text: 'Пермь', icon: React.createElement(LocationCityIcon, null), link: () => handleClick('perm'), value: 'perm' },
    ];
    const secondaryListItems = [
        { text: 'Settings', icon: React.createElement(SettingsRoundedIcon, null) },
        { text: 'About', icon: React.createElement(InfoRoundedIcon, null) },
        { text: 'Feedback', icon: React.createElement(HelpRoundedIcon, null) },
    ];
    return (React.createElement(Stack, { sx: { flexGrow: 1, p: 1, justifyContent: 'space-between' } },
        React.createElement(List, { dense: true }, mainListItems.map((item, index) => (React.createElement(ListItem, { key: index, disablePadding: true, sx: { display: 'block' } },
            React.createElement(ListItemButton, { onClick: item.link, selected: activePoint === item.value },
                React.createElement(ListItemIcon, null, item.icon),
                React.createElement(ListItemText, { primary: item.text }))))))));
}
