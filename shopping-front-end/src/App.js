import './App.css';
import {useState, useEffect} from 'react';
import SplitPane, {
  Divider,
  SplitPaneLeft,
  SplitPaneRight,
} from "./SplitPane";
import TabContext from "./TabContext";
import ItemsPage from './pages/ItemsPage';
import CodesPage from './pages/CodesPage';
import OrdersPage from './pages/OrdersPage';
import UsersPage from './pages/UsersPage';

const tabs = [
  {
    id: 1,
    category: "Items",
    description:
    "There should be some things about items here but I haven't gotten it to work yet",
    page: ItemsPage
  },
  {
    id: 2,
    category: "Users",
    description:
    "There should be some things about users here but I haven't gotten it to work yet",
    page: UsersPage
  },
  {
    id: 3,
    category: "Discount codes",
    description:
    "There should be some things about discount codes here but I haven't gotten it to work yet",
    page: CodesPage
  },
  {
    id: 4,
    category: "Orders",
    description:
    "There should be some things about orders here but I haven't gotten it to work yet",
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

export default App;
