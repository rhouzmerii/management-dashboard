import { useState } from "react";
import All from "./All";
import { BsFillBagFill } from "react-icons/bs";
import { FaLongArrowAltRight, FaLongArrowAltLeft} from "react-icons/fa";
import { IconContext } from "react-icons";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container px-6 ">
      <div className="bloc-tabs">
        <IconContext.Provider value={{size:'12px'}}>
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
        <BsFillBagFill/> <h6>ALL</h6>
        </button>
        </IconContext.Provider>
       
        <IconContext.Provider value={{size:'12px'}}>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
        <FaLongArrowAltRight/> <h6>PICKUP</h6>
        </button>
        </IconContext.Provider>
        <IconContext.Provider value={{size:'12px'}}>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
        <FaLongArrowAltLeft/> <h6>RETURNED</h6>
     
        </button>
        </IconContext.Provider>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
      <All/>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
        j
        </div>
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
        j
        </div>
      </div>
    </div>
  );
}

export default Tabs;
