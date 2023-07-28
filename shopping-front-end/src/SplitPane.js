import React, {
    createRef, 
    useCallback, 
    useContext, 
    useEffect, 
    useRef, 
    useState,
} from "react";
import SplitPaneContext from "./SplitPaneContext";
import TabContext from "./TabContext";
import api from './api/axiosConfig';

const SplitPane = ({ children, ...props }) => {
    const [clientHeight, setClientHeight] = useState(null);
    const [clientWidth, setClientWidth] = useState(null);
    const yDividerPos = useRef(null);
    const xDividerPos = useRef(null);
  
    return (
      <div {...props}>
        <SplitPaneContext.Provider
          value={{
            clientHeight,
            setClientHeight,
            clientWidth,
            setClientWidth,
          }}
        >
          {children}
        </SplitPaneContext.Provider>
      </div>
    );
  };

export const Divider = (props) => {
    const { onMouseHoldDown } = useContext(SplitPaneContext);

    return <div {...props} />;
};


export const SplitPaneLeft=(props) => {
    const leftRef = createRef();
    const {tabs, setCurrTab } = useContext(TabContext);
    const {clientWidth, setClientWidth } = useContext(SplitPaneContext);
    

    useEffect(() => {
        if (!clientWidth) {
            setClientWidth(leftRef.current.clientWidth / 2);
            return;
        }

        leftRef.current.style.minWidth = clientWidth + "px";
        leftRef.current.style.maxWidth = clientWidth + "px";
    }, [clientWidth]);

    return  (
      <div {...props} className="split-pane-left" ref={leftRef}>
        <h1>Shopping Project</h1>
          <ul>
            {tabs.map((el, i) => {
              return (
                <li key={i}>
                  <a href="#" onClick={() => setCurrTab(el.id)}>
                    {el.category}
                  </a>
                </li>
              );
            })}
          </ul>
      </div>);
};

export const SplitPaneRight = (props) => {
    const { tabs, currTab } = useContext(TabContext);
    const tab = tabs.find((el) => el.id === currTab);

    const [items, setItems] = useState(null);
    const [users, setUsers] = useState(null);
    const [codes, setCodes] = useState(null);
    const [orders, setOrders] = useState(null);

    const urls = ["/items", "/users", "/discount-code", "/orders"];

    const fetchData = useCallback(async (url, setData) => {
        try {
            console.log('Fetching data from:', url);
            const response = await api.get(url);
            console.log("Data response:", response.data);
            setData(response.data);
        }
        catch (error) {
            console.error("Error fetching data:", error);
        }
    }, []);

    useEffect(() => {
        console.log('Fetching data from API...');
        fetchData(urls[0], setItems);
        console.log('Items in SplitPaneRight:', items);
        fetchData(urls[1], setUsers);
        console.log('Users in SplitPaneRight:', users);
        fetchData(urls[2], setCodes);
        console.log('Codes in SplitPaneRight:', codes);
        fetchData(urls[3], setOrders);
        console.log('Orders in SplitPaneRight:', orders);
    }, [fetchData]);

    let dataToShow;
    switch (currTab) {
        case 1:
            dataToShow = items;
            break;
        case 2:
            dataToShow = users;
            break;
        case 3:
            dataToShow = codes;
            break;
        case 4:
            dataToShow = orders;
            break;
    }

    return (
        <div {...props} className="split-pane-right">
                {tab.page(dataToShow)/*use currTab from context to find page to go to*/}
        </div>
    );
};

export default SplitPane;