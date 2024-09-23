import { useState } from "react";
import shortid from "shortid";

import "./App.css";
import LocalClock from "./component/local-clock";
import ClockList from "./component/clock-list";

const LOCAL_CLOCK_INIT = {
  title: "My Clock",
  timezone: "",
  offset: 0,
  date: null,
};

const App = () => {
  const [localClock, setLocalClock] = useState({ ...LOCAL_CLOCK_INIT });
  const [clocks, setClocks] = useState([]);

  const createNewClock = (clock) => {
    clock.id = shortid.generate();
    setClocks([...clocks, clock]);
  };

  const updateLocalClock = (clock) => {
    setLocalClock({ ...localClock, ...clock });
  };

  const updateClock = (updatedClock) => {
    const updatedClocks = clocks.map((clock) => {
      if (clock.id === updatedClock.id) return updatedClock;

      return clock;
    });

    setClocks(updatedClocks);
  };

  const deleteClock = (id) => {
    const deleteC = clocks.filter((clock) => clock.id !== id);
    setClocks(deleteC);
  };

  return (
    <div className="app_main">
      <LocalClock
        localClock={localClock}
        createNewClock={createNewClock}
        updateClock={updateLocalClock}
      />
      <ClockList
        clocks={clocks}
        updateClock={updateClock}
        deleteClock={deleteClock}
      />
    </div>
  );
};

export default App;
