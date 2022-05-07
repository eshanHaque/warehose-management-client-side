import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Page/Header/Header';
import Home from './Page/Home/Home';
import Inventories from './Page/Inventories/Inventories';
import Login from './Page/Log/LogIn/Login';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/inventory" element={<Inventories></Inventories>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
