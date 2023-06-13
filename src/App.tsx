import Calendar from './pages/Calendar';
import BetaPage from './pages/Beta';
import Root from './pages/Root';
import Feed from './pages/Feed';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import React from 'react';

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path='calendar' element={<Calendar />} />
        <Route path='beta' element={<BetaPage />} />
        <Route path='feed' element={<Feed />} />
      </Route>
    )
  );


  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
