import './App.css';
import {useState, useEffect} from 'react';
/*import SplitPane, {
  Divider,
  SplitPaneLeft,
  SplitPaneRight,
} from "./SplitPane";
import TabContext from "./TabContext";*/
import ItemsPage from './pages/ItemsPage';
import CodesPage from './pages/CodesPage';
import OrdersPage from './pages/OrdersPage';
import UsersPage from './pages/UsersPage';

import Layout from './components/Layout';
import {Link, Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import api from './api/axiosConfig';

/*const tabs = [
  {
    id: 1,
    category: "Items",
    page: ItemsPage
  },
  {
    id: 2,
    category: "Users",
    page: UsersPage
  },
  {
    id: 3,
    category: "Discount codes",
    page: CodesPage
  },
  {
    id: 4,
    category: "Orders",
    page: OrdersPage
  }
]

function App() {

  const [currTab, setCurrTab] = useState(1);

  return (
    <div className="App">
      <TabContext.Provider value={{ tabs, currTab, setCurrTab }}>
        <SplitPane className="split-pane-row">
          <SplitPaneLeft />
          <Divider className="separator-col" />

          <SplitPaneRight>
          </SplitPaneRight>
        </SplitPane>
      </TabContext.Provider>
    </div>
  );
}

export default App;*/


function App() {
  const [items, setItems] = useState();
  const [users, setUsers] = useState();
  const [codes, setCodes] = useState();
  const [orders, setOrders] = useState();

  const fetchData = async (url, setData)=> {
    try{
      const response = await api.get(url);
      setData(response.data);}
    catch(err){
      console.error(err);}}

  const [sortedOrders, setSortedOrders] = useState();

  const sortOrders = (order) => {
    if (orders === null || orders === undefined) {setSortedOrders(null); return null;}
    const temp = orders.sort((a, b) => {
      if (order === "date") return new Date(a) - new Date(b);
      if (order === "user") return a.userId - b.userId;
      if (order === "price") return a.price - b.price;
      return 0;});
    setSortedOrders(temp);};

  const [itemPopupOpen, setItemPopupOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const openItemPopup = (itemId) => {
    setItemPopupOpen(true);
    setSelectedItemId(itemId);}
  const closeItemPopup = () => {
    setItemPopupOpen(false);
    setSelectedItemId(null);}

  const [codePopupOpen, setCodePopupOpen] = useState(false);
  const openCodePopup = () => {setCodePopupOpen(true);}
  const closeCodePopup = () => {setCodePopupOpen(false);}

  const [userPopupOpen, setUserPopupOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const openUserPopup = (userId) => {
    setUserPopupOpen(true);
    setSelectedUserId(userId);}
  const closeUserPopup = () => {
    setUserPopupOpen(false);
    setSelectedUserId(null);}

  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/items">Items</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/codes">Codes</Link></li>
          <li><Link to="/orders">Orders</Link></li>
          
        </ul>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/items" element={<ItemsPage fetchData = {fetchData} items = {items} setItems = {setItems} itemPopupOpen = {itemPopupOpen} openItemPopup = {openItemPopup} closeItemPopup = {closeItemPopup} selectedItemId = {selectedItemId} />}></Route>
            <Route path="/users" element={<UsersPage fetchData = {fetchData} users = {users} setUsers = {setUsers} userPopupOpen = {userPopupOpen} openUserPopup = {openUserPopup} closeUserPopup = {closeUserPopup} selectedUserId = {selectedUserId} />}></Route>
            <Route path="/codes" element={<CodesPage fetchData = {fetchData} codes = {codes} setCodes = {setCodes} codePopupOpen = {codePopupOpen} openCodePopup = {openCodePopup} closeCodePopup = {closeCodePopup} />}></Route>
            <Route path="/orders" element={<OrdersPage fetchData = {fetchData} orders = {orders} setOrders = {setOrders} sortedOrders = {sortedOrders} sortOrders = {sortOrders} />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App;