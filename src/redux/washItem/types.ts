export type WashItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  carSizes: number[];
  carTypes: number[];
  rating: number;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export type SearchWashItemParams = {
  sortBy: string;
  order: string;
  category: string;
  search: string;
  currentPage: string;
};

export interface WashItemSliceState {
  items: WashItem[];
  status: Status;
}
