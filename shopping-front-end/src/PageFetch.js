import {
    useState,
    useEffect,
} from "react";
import api from './api/axiosConfig'
const ItemsPage = (props) => {
    const [items, setItems] = useState([]);

    const getItems = async() =>{
        try{
          const response = await api.get("/items");
          setItems(response.data);
        }
        catch(error){
          console.error(error)
        }
      }
    
      useEffect(() => {
        getItems();
      },[])

      return (
        <div {...props}>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {
                items.map((item, idx) =>
                  <tr>
                    <td>{item.itemId}</td>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      );
};

export default ItemsPage;

export const CodesPage = (props) => {
  const [codes, setCodes] = useState([]);

  const getCodes = async() =>{
      try{
        const response = await api.get("/discount-code");
        setCodes(response.data);
      }
      catch(error){
        console.error(error)
      }
    }
  
    useEffect(() => {
      getCodes();
    },[])

    return (
      <div {...props}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {
              codes.map((code, idx) =>
                <tr>
                  <td>{code.discountId}</td>
                  <td>{code.discountName}</td>
                  <td>{code.discountAmount}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    );
};

export const OrdersPage = (props) => {
  const [orders, setOrders] = useState([]);

  const getOrders = async() =>{
      try{
        const response = await api.get("/orders");
        setOrders(response.data);
      }
      catch(error){
        console.error(error)
      }
    }
  
    useEffect(() => {
      getOrders();
    },[])

    return (
      <div {...props}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>User ID</th>
              <th>Date</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map((order, idx) =>
                <tr>
                  <td>{order.orderId}</td>
                  <td>{order.userId}</td>
                  <td>{order.date}</td>
                  <td>{order.price}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    );
};

export const UsersPage = (props) => {
  const [users, setUsers] = useState([]);

  const getUsers = async() =>{
      try{
        const response = await api.get("/users");
        setUsers(response.data);
      }
      catch(error){
        console.error(error)
      }
    }
  
    useEffect(() => {
      getUsers();
    },[])

    return (
      <div {...props}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, idx) =>
                <tr>
                  <td>{user.userId}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    );
};