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

const defaultSortOrders: Record<keyof RatingType, Order> = {
  name: 'asc',
  vid: 'desc',
  traf: 'desc',
  top3: 'desc',
  top10: 'desc',
};

type SortableTableProps = {
  data: RatingType[];
};

const SortableTable: React.FC<SortableTableProps> = ({ data }) => {
  const [order, setOrder] = useState<Order>('desc');
  const [orderBy, setOrderBy] = useState<keyof RatingType>('traf');
  const [rowsPerPage, setRowsPerPage] = useState<number>(30);
  const [visibleRows, setVisibleRows] = useState<any[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const sorted = [...data].sort((a, b) =>
      order === 'asc' ? a[orderBy] - b[orderBy] : b[orderBy] - a[orderBy],
    );

    setVisibleRows(sorted.slice(0, rowsPerPage));
  }, [data, order, orderBy, rowsPerPage]);

  const handleSortRequest = (property: keyof RatingType) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const loadMoreRows = useCallback(() => {
    if (!containerRef.current) return;

    const { scrollTop } = containerRef.current;
    const { scrollHeight } = containerRef.current;
    const { clientHeight } = containerRef.current;

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
            <TableCell style={{ width: '50px' }}>Rating</TableCell>
            <TableCell>Name</TableCell>
            {['traf', 'vid', 'top3', 'top10'].map((field) => (
              <TableCell key={field} sortDirection={orderBy === field ? order : false}>
                <TableSortLabel
                  active={orderBy === field}
                  direction={orderBy === field ? order : 'asc'}
                  onClick={() => handleSortRequest(field as keyof RatingType)}
                >
                  {field.toUpperCase()}
                </TableSortLabel>
                <Tooltip title={field}>
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
              <TableCell>{index + 1}</TableCell>
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
