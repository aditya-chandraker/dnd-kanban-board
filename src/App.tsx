import Calendar from './pages/Calendar';
import BetaPage from './pages/BetaPage';
import Root from './pages/Root';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

export default function App() {
  const startDate = new Date();
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Root />}>
        <Route path='/'>
          <Route index element={<BetaPage />} />
          <Route path='calendar' element={<Calendar startDate={startDate} />} />
        </Route>
      </Route>
    )
  );


  return <Calendar startDate={startDate} />;
}
