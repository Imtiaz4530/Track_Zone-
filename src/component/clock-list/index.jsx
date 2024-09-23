import ClockListItem from "./clock-list-item/ClockListItem";
import classes from "./index.module.css";

const ClockList = ({ clocks, updateClock, deleteClock }) => {
  return (
    <div className={classes.main}>
      <div className={classes.text}>
        <h2>Other Clocks</h2>
      </div>
      {clocks.length === 0 ? (
        <div className={classes.text}>
          <p>No clock created</p>
        </div>
      ) : (
        clocks.map((clock) => (
          <ClockListItem
            key={clock.id}
            clock={clock}
            updateClock={updateClock}
            deleteClock={deleteClock}
          />
        ))
      )}
    </div>
  );
};

export default ClockList;
