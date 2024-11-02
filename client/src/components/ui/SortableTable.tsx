import React, { useState, useEffect, useCallback, useRef } from 'react';
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
import type { RatingType } from '../types/rating';

type Order = 'asc' | 'desc';

function SortableTable({ data }: { data: RatingType[] }): JSX.Element {
  const [order, setOrder] = useState<Order>('desc');
  const [orderBy, setOrderBy] = useState<keyof RatingType>('traf');
  const [rowsPerPage, setRowsPerPage] = useState<number>(30);
  const [visibleRows, setVisibleRows] = useState<RatingType[]>([]);
  const [ratings, setRatings] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sortedData = [...data].sort((a, b) =>
      order === 'asc' ? a[orderBy] - b[orderBy] : b[orderBy] - a[orderBy],
    );

    setVisibleRows(sortedData.slice(0, rowsPerPage));

    const ranking = sortedData.map((_, index) => index + 1);
    if (order === 'asc') {
      ranking.reverse();
    }

    setRatings(ranking);
  }, [data, order, orderBy, rowsPerPage]);

  const handleSortRequest = (property: keyof RatingType) => {
    const isAsc = orderBy === property && order === 'asc';
    const isSameColumn = orderBy === property;
    setOrder(isSameColumn ? (isAsc ? 'desc' : 'asc') : 'desc');
    setOrderBy(property);
  };

  const loadMoreRows = useCallback(() => {
    if (!containerRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;

    if (scrollTop + clientHeight >= scrollHeight - 50) {
      setRowsPerPage((prev) => prev + 20);
    }
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    container.addEventListener('scroll', loadMoreRows);

    return () => {
      container.removeEventListener('scroll', loadMoreRows);
    };
  }, [loadMoreRows]);

  return (
    <TableContainer
      component={Paper}
      ref={containerRef}
      style={{ maxHeight: 600, overflowY: 'visible' }}
    >
      <Table stickyHeader style={{ tableLayout: 'fixed' }}>
        <TableHead>
          <TableRow>
            <TableCell style={{ width: '50px', fontWeight: 'bold' }}>Rating</TableCell>
            <TableCell style={{ fontWeight: 'bold' }}>Name</TableCell>
            {['traf', 'vid', 'top3', 'top10'].map((field) => (
              <TableCell
                key={field}
                sortDirection={orderBy === field ? order : false}
                style={{ fontWeight: 'bold' }}
              >
                <TableSortLabel
                  active={orderBy === field}
                  direction={orderBy === field ? order : 'desc'}
                  onClick={() => handleSortRequest(field as keyof RatingType)}
                  sx={{ '&.Mui-active, & *': { color: 'blue' } }} 
                >
                  {field.toUpperCase()}
                </TableSortLabel>
                <Tooltip title={`Click to sort by ${field}`}>
                  <IconButton size="small">
                    <InfoIcon fontSize="inherit" />
                  </IconButton>
                </Tooltip>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {visibleRows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{ratings[index]}</TableCell>
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
}

export default SortableTable;
