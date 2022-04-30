
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddNew from './Components/AddNew/AddNew';
import Blog from './Components/Blog/Blog';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import ManageInventory from './Components/ManageInventory/ManageInventory';
import NF404 from './Components/NotFound/NF404';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Signup from './Components/Signup/Signup';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/manage-inventory' element={<ManageInventory />} />
        <Route path='/add-new' element={
          <RequireAuth>
            <AddNew />
          </RequireAuth>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='*' element={<NF404 />} />
      </Routes>
    </div>
  );
}

export default App;
