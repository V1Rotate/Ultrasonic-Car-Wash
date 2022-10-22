import React from 'react';
import Loadbale from 'react-loadable';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import './scss/app.scss';
import MainLayout from './layouts/MainLayout';

const Cart = Loadbale({
  loader: () => import('./pages/Cart'),
  loading: () => <div>Cart is loading ...</div>,
});

const FullWashItem = React.lazy(() => import('./pages/FullWashItem'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='' element={<Home />} />
        <Route
          path='cart'
          element={
            <Suspense fallback={<div>Cart is loading ...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path='washItem/:id'
          element={
            <Suspense fallback={<div>Loading ...</div>}>
              <FullWashItem />
            </Suspense>
          }
        />
        <Route
          path='*'
          element={
            <Suspense fallback={<div>Loading ...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
