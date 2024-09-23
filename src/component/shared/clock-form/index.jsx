import { useState } from "react"
import { getOffset, getTimezone } from "../../../utils/utils";

const ClockForm = ({values= { title: '', timezone: '', offset: '0'}, edit=false, handleClock, title=true}) => {
    const [state, setState] = useState({...values})

    const handleChange = (e) => {
        let {name, value} = e.target
        
        if (name === 'offset') {
            value = Number(value) * 60
        }

        setState(p => ({
            ...p,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleClock(state)
        setState({...values})
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input disabled={!title} type="text" id='title' name='title' value={state.title} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="timezone">Timezone</label>
                <select id='timezone' name="timezone" value={state.timezone} onChange={handleChange}>
                    {getTimezone().map((timezone) => (
                        <option key={timezone} value={timezone}>{timezone}</option>
                    ))}
                </select>
            </div>
            {(state.timezone === 'GMT' || state.timezone === 'UTC') && (
                <div>
                    <label htmlFor="offset">Offset</label>
                    <select id='offset' name="offset" value={state.offset / 60} onChange={handleChange}>
                        {getOffset().map((offset) => (
                            <option key={offset} value={offset}>{offset}</option>
                        ))}
                    </select>
                </div>
            )}
            <button>{edit ? "Update" : 'Create'}</button>
        </form>
    )
}

export default ClockForm