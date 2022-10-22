import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { WashItem, SearchWashItemParams } from './types';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';

export const fetchWashItems = createAsyncThunk<
  WashItem[],
  SearchWashItemParams
>('washItem/fetchWashItemsStatus', async (params) => {
  const { sortBy, order, category, search, currentPage } = params;
  console.log(params, 4444);
  const { data } = await axios.get<WashItem[]>(
    `https://63194b7e6b4c78d91b38a8f1.mockapi.io/items`,
    {
      params: pickBy(
        {
          page: currentPage,
          limit: 8,
          category,
          sortBy,
          order,
          search,
        },
        identity
      ),
    }
  );

  return data;
});
