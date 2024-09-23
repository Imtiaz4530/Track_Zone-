import { useState } from "react"
import shortid from "shortid"

/**
 * getEventsbyClockId()
 * getEvents()
 * addEvents()
 * updateEvents()
 * deleteEvents()
 * deleteEventsByClockId()
*/

const useEvents = () => {
    const [state, setState] = useState({})

    const addEvents = (event) => {
        event.id = shortid.generate()
        setState((p) => ({
            ...p,
            [`${event.cid}|${event.id}`]: event
        }))
    }

    const getEventsbyClockId = (id) => {
        return Object.values(state).filter((event) => event.cid === id)
    }

    const getEvents = (isArray=false) => {
        if (!isArray) return state
        
        return Object.values(state)
    }

    const updateEvents = (updateEvent, id) => {
        const events = {...state}
        
        events[id] = {
            ...events[id],
            ...updateEvent
        }

        setState(events)
    }

    const deleteEvent = (id) => {
        const events = {...state}
        delete events(id)
        setState(events)
    }

    const deleteEventsByClockId = (id) => {
        const events = Object.keys(state).filter((item) => !item.startsWith(id))
        setState(events)
    }

    return {
        addEvents, 
        events: state,
        getEventsbyClockId,
        getEvents,
        deleteEvent,
        deleteEventsByClockId,
        updateEvents
    }
}

export default useEvents

