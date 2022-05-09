import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Page/Blogs/Blogs';
import Header from './Page/Header/Header';
import Home from './Page/Home/Home';
import Inventories from './Page/Inventories/Inventories';
import Login from './Page/Log/LogIn/Login';
import Register from './Page/Log/Register/Register';
import RequireAuth from './Page/Log/RequireAuth/RequireAuth';
import ManageInventory from './Page/ManageInventory/ManageInventory';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/inventory" element={
        
          <Inventories></Inventories>
        
        }></Route>
        <Route path="/manage/:id" element={<ManageInventory></ManageInventory>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      </Routes>
    </div>
  );
}

export default App;
