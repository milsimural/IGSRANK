export type DownloadedData = {
  current_page: number;
  per_page: number;
  last_page: number;
  total: number;
  messageCollapse: MessageCollapse;
  data: Datum[];
};

export type Datum = {
  id: number;
  adcost: number;
  adkeyscnt: number;
  adscnt: number;
  adskeys: number;
  adtraf: number;
  it1: number;
  it3: number;
  it5: number;
  it10: number;
  it50: number;
  keyspage: number;
  name: string;
  pagesinindex: number;
  result: number;
  topkeys: number;
  topvis: number;
  traf: number;
  vis: number;
};

export type MessageCollapse = {
  text: string;
  title: string;
};

export type PreparedData = {
  id: number;
  adcost: number;
  adkeyscnt: number;
  adscnt: number;
  adskeys: number;
  adtraf: number;
  it1: number;
  it3: number;
  it5: number;
  it10: number;
  it50: number;
  keyspage: number;
  name: string;
  pagesinindex: number;
  result: number;
  topkeys: number;
  topvis: number;
  traf: number;
  vis: number;
  date: Date;
};
