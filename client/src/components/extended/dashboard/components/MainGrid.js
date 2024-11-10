import * as React from 'react';
import { useEffect } from 'react';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SortableTable from 'src/components/ui/SortableTable';
import { useSelector } from 'react-redux';
import chel from 'src/DATA/chel';
import moscow from 'src/DATA/moscow';
import ekaterinburg from 'src/DATA/ekaterinburg';
import perm from 'src/DATA/perm';
import Copyright from '../internals/components/Copyright';
// const data: StatCardProps[] = [
//   {
//     title: 'Users',
//     value: '14k',
//     interval: 'Last 30 days',
//     trend: 'up',
//     data: [
//       200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340, 380, 360, 400, 380,
//       420, 400, 640, 340, 460, 440, 480, 460, 600, 880, 920,
//     ],
//   },
//   {
//     title: 'Conversions',
//     value: '325',
//     interval: 'Last 30 days',
//     trend: 'down',
//     data: [
//       1640, 1250, 970, 1130, 1050, 900, 720, 1080, 900, 450, 920, 820, 840, 600, 820, 780, 800, 760,
//       380, 740, 660, 620, 840, 500, 520, 480, 400, 360, 300, 220,
//     ],
//   },
//   {
//     title: 'Event count',
//     value: '200k',
//     interval: 'Last 30 days',
//     trend: 'neutral',
//     data: [
//       500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510, 530, 520, 410, 530,
//       520, 610, 530, 520, 610, 530, 420, 510, 430, 520, 510,
//     ],
//   },
// ];
export default function MainGrid() {
    const [rating, setRating] = React.useState([]);
    const menuActivePoint = useSelector((state) => state.menu.menuActivePoint);
    // useEffect(() => {
    //   axiosInstance
    //     .get<ApiRatingResponseType>('/cities/all')
    //     .then(({ data }) => setRating(data))
    //     .catch((error) => {
    //       console.log('Ошибка', error);
    //     });
    // }, []);
    useEffect(() => {
        switch (menuActivePoint) {
            case 'moscow':
                setRating(moscow);
                break;
            case 'chel':
                setRating(chel);
                break;
            case 'ekaterinburg':
                setRating(ekaterinburg);
                break;
            case 'perm':
                setRating(perm);
                break;
            default:
                setRating(moscow);
                break;
        }
    }, [menuActivePoint]);
    return (React.createElement(Box, { sx: { width: '100%', maxWidth: { sm: '100%', md: '1700px' } } },
        React.createElement(Typography, { component: "h2", variant: "h6", sx: { mb: 2 } }, "\u0421\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"),
        React.createElement(Grid, { container: true, spacing: 2, columns: 12 },
            React.createElement(Grid, { size: { xs: 12, lg: 12 } },
                React.createElement(SortableTable, { data: rating }))),
        React.createElement(Copyright, { sx: { my: 4 } })));
}
