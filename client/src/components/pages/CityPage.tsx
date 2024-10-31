import React, { useEffect } from 'react';
import axios from 'axios';
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
    <div>
      <h1>City</h1>
      <SortableTable data={rating} />
    </div>
  );
}
