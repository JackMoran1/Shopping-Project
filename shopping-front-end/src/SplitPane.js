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

const SplitPane = ({ children, ...props }) => {
    const [clientHeight, setClientHeight] = useState(null);
    const [clientWidth, setClientWidth] = useState(null);
    const yDividerPos = useRef(null);
    const xDividerPos = useRef(null);
  
    const onMouseHoldDown = (e) => {
      yDividerPos.current = e.clientY;
      xDividerPos.current = e.clientX;
    };
  
    const onMouseHoldUp = () => {
      yDividerPos.current = null;
      xDividerPos.current = null;
    };
  
    const onMouseHoldMove = (e) => {
      if (!yDividerPos.current && !xDividerPos.current) {
        return;
      }
  
      setClientHeight(clientHeight + e.clientY - yDividerPos.current);
      setClientWidth(clientWidth + e.clientX - xDividerPos.current);
  
      yDividerPos.current = e.clientY;
      xDividerPos.current = e.clientX;
    };
  
    useEffect(() => {
      document.addEventListener("mouseup", onMouseHoldUp);
      document.addEventListener("mousemove", onMouseHoldMove);
  
      return () => {
        document.removeEventListener("mouseup", onMouseHoldUp);
        document.removeEventListener("mousemove", onMouseHoldMove);
      };
    });
  
    return (
      <div {...props}>
        <SplitPaneContext.Provider
          value={{
            clientHeight,
            setClientHeight,
            clientWidth,
            setClientWidth,
            onMouseHoldDown,
          }}
        >
          {children}
        </SplitPaneContext.Provider>
      </div>
    );
  };

export const Divider = (props) => {
    const { onMouseHoldDown } = useContext(SplitPaneContext);

    return <div {...props} onMouseDown={onMouseHoldDown} />;
};


export const SplitPaneLeft=(props) => {
    const leftRef = createRef();
    const {itemss, setCurrItemss } = useContext(TabContext);
    /*const {clientWidth, setClientWidth } = useContext(SplitPaneContext);
    

    useEffect(() => {
        if (!clientWidth) {
            setClientWidth(topRef.current.clientWidth / 2);
            return;
        }

        topRef.current.style.minWidth = clientWidth + "px";
        topRef.current.style.maxWidth = clientWidth + "px";
    }, [clientWidth]);*/

    return  (
      <div {...props} className="split-pane-left" ref={leftRef}>
        <h1>Shopping Project</h1>
          <ul>
            {itemss.map((el, i) => {
              return (
                <li key={i}>
                  <a href="#" onClick={() => setCurrItemss(el.id)}>
                    {el.author}
                  </a>
                </li>
              );
            })}
          </ul>
      </div>);
};

export const SplitPaneRight = (props) => {
    const { itemss, currItemss } = useContext(TabContext);
    const itemsss = itemss.find((el) => el.id === currItemss);

    const [item, setItems] = useState();
  
    const getItems = async() =>{
      try{
        const response = await api.get("/items/tx1111");
        //console.log(response.data.itemId)
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
        <div {...props} className="split-pane-right">
            <div className="quote">
                <blockquote>{itemsss.description}</blockquote>
                {/*<span>{item.author}</span>*/}
                {/*<h1>{item.itemId}</h1>*/}
            </div>
        </div>
    );
};

export default SplitPane;