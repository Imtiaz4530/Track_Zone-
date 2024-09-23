import style from "./index.module.css";
import ClockDisplay from "../shared/clock-display";
import ClockAction from "../shared/clock-action";
import useClock from "../../hook/useClock";

const LocalClock = ({ localClock, createNewClock, updateClock }) => {
  const { date, timezone, offset } = useClock(
    localClock.timezone,
    localClock.offset
  );

  return (
    <div className={style.container}>
      <ClockDisplay
        title={localClock.title}
        date={date}
        timezone={timezone}
        offset={offset}
      />
      <div className={style.btn}>
        <ClockAction
          isCreate={false}
          isEdit={false}
          local={true}
          localClock={localClock}
          createNewClock={createNewClock}
          updateClock={updateClock}
        />
      </div>
    </div>
  );
};

export default LocalClock;
