import Calendar from './pages/Calendar';
import BetaPage from './pages/Beta';
import Root from './pages/Root';
import Feed from './pages/Social';
import Login from './pages/Login';
import Profile from './pages/Profile';

import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from './components/AuthContext'
import { useContext } from 'react';
import Communities from './pages/Communities';

const PrivateRoutes = () => {
  const { authenticated } = useContext(AuthContext)

  if (!authenticated) return <Navigate to='/login' replace />

  return <Root />
}

export default function App() {

  return (

    <Routes>
      <Route path='/'>
        {/* conditional on authentication routing */}
        <Route path='' element={<BetaPage />} />
        <Route path='login' element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path='calendar' element={<Calendar />} />
          <Route path='feed' element={<Feed />} />
          <Route path='profile' element={<Profile />} />
          <Route path='communities' element={<Communities />} />
        </Route>
      </Route>
    </Routes>
  );
}
