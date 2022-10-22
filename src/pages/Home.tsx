import React from 'react';
import qs from 'qs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  Categories,
  Sort,
  WashItemBlock,
  Skeleton,
  Pagination,
} from '../components';

import { sortList } from '../components/Sort';

import { useAppDispatch } from '../redux/store';
import { selectFilter } from '../redux/filter/selectors';
import { selectWashItemData } from '../redux/washItem/selectors';
import {
  setCategoryId,
  setCurrentPage,
  setFilters,
} from '../redux/filter/slice';
import { fetchWashItems } from '../redux/washItem/asyncActions';
import { SearchWashItemParams } from '../redux/washItem/types';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isMounted = React.useRef(false);

  const { items, status } = useSelector(selectWashItemData);
  const { categoryId, sort, currentPage, searchValue } =
    useSelector(selectFilter);

  const onChangeCategory = React.useCallback((idx: number) => {
    dispatch(setCategoryId(idx));
  }, []);

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const getWashItems = async () => {
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? String(categoryId) : '';
    const search = searchValue;

    dispatch(
      fetchWashItems({
        sortBy,
        order,
        category,
        search,
        currentPage: String(currentPage),
      })
    );

    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    getWashItems();
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const washItems = items.map((obj: any) => (
    <WashItemBlock key={obj.id} {...obj} />
  ));
  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sort} />
      </div>
      <h2 className='content__title'>All Services</h2>
      {status === 'error' ? (
        <div className='content__error-info'>
          <h2>Error 😕</h2>
          <p>
            Unfortunately, something is going wrong. Please try again later.
          </p>
        </div>
      ) : (
        <div className='content__items'>
          {status === 'loading' ? skeletons : washItems}
        </div>
      )}

      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
