import React, {
    createRef, 
    useContext, 
    useEffect, 
    useRef, 
    useState,
} from "react";
import SplitPaneContext from "./SplitPaneContext";
import TabContext from "./TabContext";
import api from './api/axiosConfig'
import ItemsPage, {UsersPage} from './PageFetch.js';

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

    return (
        <div {...props} className="split-pane-right">
            {tab.page()}
        </div>
    );
};

export default SplitPane;