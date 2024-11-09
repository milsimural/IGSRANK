import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMenuActivePoint } from 'src/menuSlice';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AnalyticsRoundedIcon from '@mui/icons-material/AnalyticsRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import { useNavigate } from 'react-router-dom';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { RootState } from 'src/store';

export default function MenuContent(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const activePoint = useSelector((state: RootState) => state.menu.menuActivePoint);

  const handleClick = (city) => {
    dispatch(setMenuActivePoint(city)); // Устанавливаем новое значение
  };

  const mainListItems = [
    { text: 'Москва', icon: <LocationCityIcon />, link: () => handleClick('moscow'), value: 'moscow' },
    { text: 'Екатеринбург', icon: <LocationCityIcon />, link: () => handleClick('ekaterinburg'), value: 'ekaterinburg' },
    { text: 'Челябинск', icon: <LocationCityIcon />, link: () => handleClick('chel'), value: 'chel' },
    { text: 'Пермь', icon: <LocationCityIcon />, link: () => handleClick('perm'), value: 'perm' },
  ];

  const secondaryListItems = [
    { text: 'Settings', icon: <SettingsRoundedIcon /> },
    { text: 'About', icon: <InfoRoundedIcon /> },
    { text: 'Feedback', icon: <HelpRoundedIcon /> },
  ];

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton onClick={item.link} selected={activePoint === item.value}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Stack>
  );
}
