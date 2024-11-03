import React, { useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Box, Paper } from '@mui/material';
import SortableTable from '../ui/SortableTable';
import type { RatingType, ApiRatingResponseType } from '../types/rating';

export default function CityPage(): JSX.Element {
  const [rating, setRating] = React.useState<RatingType[]>([]);

  useEffect(() => {
    axios
      .get<ApiRatingResponseType>('/api/cities/all')
      .then(({ data }) => setRating(data))
      .catch((error) => {
        console.log('Ошибка', error);
      });
  }, []);

  return (
    <Container maxWidth="lg">
      <Box sx={{ marginTop: 4, padding: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Екатеринбург
        </Typography>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <SortableTable data={rating} />
        </Paper>
      </Box>
      
    </Container>
  );
}
