import Calendar from './pages/Calendar';
import BetaPage from './pages/Beta';
import Feed from './pages/Social';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Communities from './pages/Communities';
import SignUp from './pages/Signup';
import CheckVerification from './pages/CheckVerification';

import { Route, Routes } from 'react-router-dom';
import Root from './components/Root';

export default function App() {

  return (

    <Routes>
      <Route path='/'>
        <Route path='' element={<BetaPage />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='checkyouremail' element={<CheckVerification />} />

        {/* TODO: conditional on authentication routing */}
        <Route element={<Root />}>
          <Route path='calendar' element={<Calendar />} />
          <Route path='social' element={<Feed />} />
          <Route path='profile' element={<Profile />} />
          <Route path='communities' element={<Communities />} />
        </Route>
      </Route>
    </Routes>
  );
}
