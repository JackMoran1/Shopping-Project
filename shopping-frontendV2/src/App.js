import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import { Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Sidebar from './components/Sidebar';
import Items from './components/items/Items';
import Users from './components/users/Users';
import Orders from './components/orders/Orders';
import Discounts from './components/discounts/Discounts';

function App() {
  const [items, setItems] = useState();
  const [users, setUsers] = useState();
  const [discounts, setDiscounts] = useState();
  const [orders, setOrders] = useState();

  const getItems = async() =>{
    try{

      const response = await api.get("/items");
      console.log(response.data)
      setItems(response.data);

    }catch(err){
      console.log(err);
    }
    
  };

  const getUsers = async() =>{
    try{

      const response = await api.get("/users");
      console.log(response.data)
      setUsers(response.data);

    }catch(err){
      console.log(err);
    }
    
  };

  const getDiscounts = async() =>{
    try{

      const response = await api.get("/discounts");
      console.log(response.data)
      setDiscounts(response.data);

    }catch(err){
      console.log(err);
    }
    
  };

  const getOrders = async() =>{
    try{

      const response = await api.get("/orders");
      console.log(response.data)
      setOrders(response.data);

    }catch(err){
      console.log(err);
    }
    
  };

  useEffect(() => {
    getItems();
    getUsers();
    getDiscounts();
    getOrders();
  }, []);

  return (
    <div className="App">
      <Sidebar />
      <div className="content">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Items items={items} setItems={setItems}/>} />
          {/* Uncomment these when you've defined these components */}
          <Route path="/users" element={<Users users={users} />} />
          <Route path="/orders" element={<Orders orders={orders} />} />
          <Route path="/discounts" element={<Discounts discounts={discounts} />} />
        </Route>
      </Routes>
      </div>
    </div>
  );
}

export default App;
