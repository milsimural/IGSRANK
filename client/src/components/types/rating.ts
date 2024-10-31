export type RatingType = {
  name: string;
  vid: number;
  traf: number;
  top3: number;
  top10: number;
};

export type ApiRatingResponseType = {
  status: string;
  message: string;
  data: RatingType[];
};
