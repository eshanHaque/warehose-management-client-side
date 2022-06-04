import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Blogs from './Page/Blogs/Blogs';
import Footer from './Page/Footer/Footer';
import Header from './Page/Header/Header';
import Home from './Page/Home/Home';
import Inventories from './Page/Inventories/Inventories';
import Login from './Page/Log/LogIn/Login';
import Register from './Page/Log/Register/Register';
import RequireAuth from './Page/Log/RequireAuth/RequireAuth';
import ManageInventory from './Page/ManageInventory/ManageInventory';
import Myorder from './Page/ManageInventory/MyOrder';
import AddItem from './Page/ManageInventory/AddItem';
import DeleteItems from './Page/ManageInventory/DeleteItems';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/inventory" element={
          <RequireAuth>
            <Inventories></Inventories>
          </RequireAuth>
        }></Route>
        <Route path="manage" element={<ManageInventory></ManageInventory>}>
          <Route index element={<Myorder></Myorder>}></Route>
          <Route path="addItem" element={<AddItem></AddItem>}></Route>
          <Route path="deleteItem" element={<DeleteItems></DeleteItems>}></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>

    </div>
  );
}

export default App;
