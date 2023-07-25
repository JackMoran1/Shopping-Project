// import logo from './logo.svg';
import './App.css';
import api from './api/axiosConfig'
import {useState, useEffect} from 'react';
import SplitPane, {
  Divider,
  SplitPaneLeft,
  SplitPaneRight,
} from "./SplitPane";
// import SplitPane from "react-split-pane"
import TabContext from "./TabContext";

const itemss = [
  {
    id: 1,
    author: "Items",
    description:
    "There should be some things about items here but I haven't gotten it to work yet",
  },
  {
    id: 2,
    author: "Users",
    description:
    "There should be some things about users here but I haven't gotten it to work yet",
  },
  {
    id: 3,
    author: "Discount codes",
    description:
    "There should be some things about discount codes here but I haven't gotten it to work yet",
  },
  {
    id: 4,
    author: "Orders",
    description:
    "There should be some things about orders here but I haven't gotten it to work yet",
  }
]

function App() {

  /*const [item, setItems] = useState();

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
  },[])*/

  const [currItemss, setCurrItemss] = useState(1);

  return (
    <div className="App">
      <TabContext.Provider value={{ itemss, currItemss, setCurrItemss }}>
        <SplitPane className="split-pane-row">
          <SplitPaneLeft >
          </SplitPaneLeft>
          <Divider className="separator-col" />

          <SplitPaneRight />
        </SplitPane>
      </TabContext.Provider>
    </div>
  );
}

export default App;
