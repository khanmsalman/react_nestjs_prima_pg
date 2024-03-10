import { Route, Routes } from 'react-router';
import './App.css';
import Layout from './Layout';
import axios from 'axios';
import { Home, Login, SignUp } from './components';
import ProtectedRoute from './components/ProtectedRoute';

axios.defaults.withCredentials = true;

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/' element={<ProtectedRoute/>}>
          <Route index element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
