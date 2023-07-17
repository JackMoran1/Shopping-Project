import logo from './logo.svg';
import './App.css';
import api from './api/axiosConfig'
import {useState, useEffect} from 'react';

function App() {

  const [item, setItems] = useState();

  const getItems = async() =>{
    try{
      const response = await api.get("/items/tx1111");
      console.log(response.data)
      setItems(response.data);
    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    getItems();
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          This is Whalien's edit.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
