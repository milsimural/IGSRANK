import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Paper,
} from '@mui/material';

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

const rows: Data[] = [
  createData('Site A', 10, 240, 13, 47),
  createData('Site B', 20, 192, 30, 98),
  createData('Site C', 30, 150, 7, 85),
  createData('Site D', 40, 332, 25, 120),
];

const SortableTable: React.FC = () => {
  const [order, setOrder] = useState<Order>('desc');
  const [orderBy, setOrderBy] = useState<keyof Data>('traf');

  const handleSortRequest = (property: keyof Data) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortedRows = (): Array<{ row: Data; rating: number }> => {
    const comparator = (a: Data, b: Data) => {
      if (order === 'asc') {
        return (a[orderBy] ?? 0) - (b[orderBy] ?? 0);
      }
      return (b[orderBy] ?? 0) - (a[orderBy] ?? 0);
    };

    const sorted = rows.slice().sort(comparator);

    return sorted.map((row, index) => ({
      row,
      // Calculate rating from sorted position: highest value gets 1
      rating: index + 1,
    }));
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Rating</TableCell>
            <TableCell>Name</TableCell>
            <TableCell sortDirection={orderBy === 'vid' ? order : false}>
              <TableSortLabel
                active={orderBy === 'vid'}
                direction={orderBy === 'vid' ? order : 'asc'}
                onClick={() => handleSortRequest('vid')}
              >
                VID
              </TableSortLabel>
            </TableCell>
            <TableCell sortDirection={orderBy === 'traf' ? order : false}>
              <TableSortLabel
                active={orderBy === 'traf'}
                direction={orderBy === 'traf' ? order : 'asc'}
                onClick={() => handleSortRequest('traf')}
              >
                TRAF
              </TableSortLabel>
            </TableCell>
            <TableCell sortDirection={orderBy === 'top3' ? order : false}>
              <TableSortLabel
                active={orderBy === 'top3'}
                direction={orderBy === 'top3' ? order : 'asc'}
                onClick={() => handleSortRequest('top3')}
              >
                Top3
              </TableSortLabel>
            </TableCell>
            <TableCell sortDirection={orderBy === 'top10' ? order : false}>
              <TableSortLabel
                active={orderBy === 'top10'}
                direction={orderBy === 'top10' ? order : 'asc'}
                onClick={() => handleSortRequest('top10')}
              >
                Top10
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedRows().map(({ row, rating }) => (
            <TableRow key={row.name}>
              <TableCell>{rating}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.vid}</TableCell>
              <TableCell>{row.traf}</TableCell>
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
