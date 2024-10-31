import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Paper,
  Tooltip,
  IconButton,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

type Data = {
  name: string;
  vid: number;
  traf: number;
  top3: number;
  top10: number;
};

type Order = 'asc' | 'desc';

const createData = (
  name: string,
  vid: number,
  traf: number,
  top3: number,
  top10: number,
): Data => ({ name, vid, traf, top3, top10 });

const initialRows: Data[] = [
  createData('Site A', 10, 240, 13, 47),
  createData('Site B', 20, 192, 30, 98),
  createData('Site C', 30, 150, 7, 85),
  createData('Site D', 40, 332, 25, 120),
];

// Устанавливаем порядок сортировки по умолчанию для каждого столбца
const defaultSortOrders: Record<keyof Data, Order> = {
  name: 'asc',
  vid: 'desc', // Изменяем на 'desc' для правильной сортировки рейтинга VID
  traf: 'desc',
  top3: 'desc',
  top10: 'desc',
};

const SortableTable: React.FC = () => {
  const [order, setOrder] = useState<Order>('desc'); // Начальный порядок сортировки
  const [orderBy, setOrderBy] = useState<keyof Data>('traf'); // Сортировка по умолчанию по 'traf'
  const [sortedRows, setSortedRows] = useState<Data[]>([]);

  useEffect(() => {
    const comparator = (a: Data, b: Data) => {
      if (order === 'asc') {
        return a[orderBy] - b[orderBy];
      }
      return b[orderBy] - a[orderBy];
    };

    const sorted = initialRows.slice().sort(comparator);
    setSortedRows(sorted);
  }, [order, orderBy]);

  const handleSortRequest = (property: keyof Data) => {
    const isAsc = orderBy === property && order === 'asc';
    const newOrder = isAsc ? 'desc' : 'asc';

    // Установка порядка сортировки в соответствии с настройками по умолчанию для выбранного столбца
    setOrder(orderBy === property ? newOrder : defaultSortOrders[property]);
    setOrderBy(property);
  };

  const calculateRatings = () => {
    const vidComparator = (a: Data, b: Data) => b.vid - a.vid; // Изменено на b - a
    const otherComparator = (a: Data, b: Data) => b[orderBy] - a[orderBy];
    const comparator = orderBy === 'vid' ? vidComparator : otherComparator;

    const ratingsSorted = initialRows.slice().sort(comparator);

    const ratingsMap = new Map(ratingsSorted.map((row, index) => [row.name, index + 1]));

    return sortedRows.map((row) => ({
      row,
      rating: ratingsMap.get(row.name) || sortedRows.length,
    }));
  };

  const ratedRows = calculateRatings();

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Rating
              <Tooltip title="Рейтинг по выбранному показателю">
                <IconButton size="small">
                  <InfoIcon fontSize="inherit" />
                </IconButton>
              </Tooltip>
            </TableCell>
            <TableCell>
              Name
              <Tooltip title="Название сайта">
                <IconButton size="small">
                  <InfoIcon fontSize="inherit" />
                </IconButton>
              </Tooltip>
            </TableCell>
            <TableCell sortDirection={orderBy === 'traf' ? order : false}>
              <TableSortLabel
                active={orderBy === 'traf'}
                direction={orderBy === 'traf' ? order : 'asc'}
                onClick={() => handleSortRequest('traf')}
              >
                TRAF
              </TableSortLabel>
              <Tooltip title="Трафик - количество посещений сайта в сутки">
                <IconButton size="small">
                  <InfoIcon fontSize="inherit" />
                </IconButton>
              </Tooltip>
            </TableCell>
            <TableCell sortDirection={orderBy === 'vid' ? order : false}>
              <TableSortLabel
                active={orderBy === 'vid'}
                direction={orderBy === 'vid' ? order : 'asc'}
                onClick={() => handleSortRequest('vid')}
              >
                VID
              </TableSortLabel>
              <Tooltip title="Видимость - индекс охвата рынка в поисковых системах, чем выше тем лучше">
                <IconButton size="small">
                  <InfoIcon fontSize="inherit" />
                </IconButton>
              </Tooltip>
            </TableCell>
            <TableCell sortDirection={orderBy === 'top3' ? order : false}>
              <TableSortLabel
                active={orderBy === 'top3'}
                direction={orderBy === 'top3' ? order : 'asc'}
                onClick={() => handleSortRequest('top3')}
              >
                Top3
              </TableSortLabel>
              <Tooltip title="Сколько поисковых запросов находится на первых 3 позициях в поисковых системах">
                <IconButton size="small">
                  <InfoIcon fontSize="inherit" />
                </IconButton>
              </Tooltip>
            </TableCell>
            <TableCell sortDirection={orderBy === 'top10' ? order : false}>
              <TableSortLabel
                active={orderBy === 'top10'}
                direction={orderBy === 'top10' ? order : 'asc'}
                onClick={() => handleSortRequest('top10')}
              >
                Top10
              </TableSortLabel>
              <Tooltip title="Сколько поисковых запросов находится на первых 10 позициях в поисковых системах">
                <IconButton size="small">
                  <InfoIcon fontSize="inherit" />
                </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ratedRows.map(({ row, rating }) => (
            <TableRow key={row.name}>
              <TableCell>{rating}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.traf}</TableCell>
              <TableCell>{row.vid}</TableCell>
              <TableCell>{row.top3}</TableCell>
              <TableCell>{row.top10}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SortableTable;
