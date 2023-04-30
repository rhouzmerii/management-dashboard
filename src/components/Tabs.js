import { useState } from "react";
import All from "./All";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container px-6">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
        ALL
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
         PICKUPS
        </button>
        <button
          className={toggleState === 3? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
     RETURNED
        </button>
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
