import useClock from "../../../hook/useClock"
import Eventlist from "../../event-list"
import ClockAction from "../../shared/clock-action"
import ClockDisplay from "../../shared/clock-display"
import style from "./index.module.css"

const ClockListItem = ({clock, updateClock, deleteClock, events=[]}) => {
    const {date, offset, timezone} = useClock(clock.timezone, clock.offset)

    if (!date) return null

    return (
        <div className={style.main}>
            <div className={style.clock}>
                <ClockDisplay title={clock.title} date={date} timezone={timezone} offset={offset} />
                <div className={style.btn}>
                    <ClockAction localClock={clock} updateClock={updateClock} deleteClock={deleteClock} />
                </div>
            </div>
            <div className={style.events}>
                <Eventlist events={events} />
            </div>
        </div>
    )
}

export default ClockListItem