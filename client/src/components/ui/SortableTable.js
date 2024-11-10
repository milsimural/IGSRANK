import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Paper, Tooltip, IconButton, } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
function SortableTable({ data }) {
    const [order, setOrder] = useState('desc');
    const [orderBy, setOrderBy] = useState('traf');
    const [rowsPerPage, setRowsPerPage] = useState(30);
    const [visibleRows, setVisibleRows] = useState([]);
    const [ratings, setRatings] = useState([]);
    const containerRef = useRef(null);
    useEffect(() => {
        const sortedData = [...data].sort((a, b) => order === 'asc' ? a[orderBy] - b[orderBy] : b[orderBy] - a[orderBy]);
        setVisibleRows(sortedData.slice(0, rowsPerPage));
        const ranking = sortedData.map((_, index) => index + 1);
        if (order === 'asc') {
            ranking.reverse();
        }
        setRatings(ranking);
    }, [data, order, orderBy, rowsPerPage]);
    const handleSortRequest = (property) => {
        const isAsc = orderBy === property && order === 'asc';
        const isSameColumn = orderBy === property;
        // eslint-disable-next-line no-nested-ternary
        setOrder(isSameColumn ? (isAsc ? 'desc' : 'asc') : 'desc');
        setOrderBy(property);
    };
    const loadMoreRows = useCallback(() => {
        if (!containerRef.current)
            return;
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        if (scrollTop + clientHeight >= scrollHeight - 50) {
            setRowsPerPage((prev) => prev + 20);
        }
    }, []);
    useEffect(() => {
        const container = containerRef.current;
        if (!container)
            return;
        container.addEventListener('scroll', loadMoreRows);
        return () => {
            container.removeEventListener('scroll', loadMoreRows);
        };
    }, [loadMoreRows]);
    const tooltips = {
        traf: 'Траффик сайта — это количество посетителей, которые приходят на веб-сайт в день',
        vid: 'Видимость сайта — это показатель, который отражает, насколько хорошо ваш веб-сайт представлен в поисковых системах по ключевым запросам. Это значит, как часто ваш сайт появляется среди результатов поиска на таких платформах, как Google, Яндекс и другие.',
        top3: 'Позиции в топ-3 поисковых систем',
        top10: 'Позиции в топ-10 поисковых систем',
    };
    return (React.createElement(TableContainer, { component: Paper, ref: containerRef, style: { maxHeight: 600, overflowY: 'visible' } },
        React.createElement(Table, { stickyHeader: true, style: { tableLayout: 'fixed' } },
            React.createElement(TableHead, null,
                React.createElement(TableRow, null,
                    React.createElement(TableCell, { style: { width: '50px', fontWeight: 'bold' } }, "\u2116"),
                    React.createElement(TableCell, { style: { fontWeight: 'bold' } }, "\u0421\u0430\u0439\u0442"),
                    ['traf', 'vid', 'top3', 'top10'].map((field) => (React.createElement(TableCell, { key: field, sortDirection: orderBy === field ? order : false, style: { fontWeight: 'bold' } },
                        React.createElement(TableSortLabel, { active: orderBy === field, direction: orderBy === field ? order : 'desc', onClick: () => handleSortRequest(field), sx: { '&.Mui-active, & *': { color: 'blue' } } }, field === 'traf'
                            ? 'Траффик'
                            : field === 'vid'
                                ? 'Видимость'
                                : field.toUpperCase()),
                        React.createElement(Tooltip, { title: tooltips[field] },
                            React.createElement(IconButton, { size: "small" },
                                React.createElement(InfoIcon, { fontSize: "inherit" })))))))),
            React.createElement(TableBody, null, visibleRows.map((row, index) => (
            // eslint-disable-next-line react/no-array-index-key
            React.createElement(TableRow, { key: index },
                React.createElement(TableCell, null, ratings[index]),
                React.createElement(TableCell, null, row.name),
                React.createElement(TableCell, null, row.traf),
                React.createElement(TableCell, null, row.vid),
                React.createElement(TableCell, null, row.top3),
                React.createElement(TableCell, null, row.top10))))))));
}
export default SortableTable;
