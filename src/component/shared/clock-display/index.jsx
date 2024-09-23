import useTimer from "../../../hook/useTimer"
import style from "./index.module.css"

const ClockDisplay = ({title, date, timezone, offset}) => {
    const {timer} = useTimer(date)
    
    if (!date || !timer) return null

    return (
        <div className={style.clock_section}> 
            <h2>{title}</h2>
            <div className={style.clock}>
                <h3 className={style.time}>{timer ? timer.toLocaleTimeString() : "No Date"}</h3>
                <div className={style.others}>
                    <p>{timezone}</p>
                    <p>{offset > 0 ? `+${Math.abs(offset)}` : `-${Math.abs(offset)}`}</p>
                </div>
            </div>
        </div>
    )
}

export default ClockDisplay