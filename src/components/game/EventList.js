import React, { useEffect, useState } from "react"
import { getEvents } from "../../managers/EventManager.js"

export const EventList = (props) => {
    const [ events, setEvents ] = useState([])

    useEffect(() => {
        getEvents().then(data => setEvents(data))
    }, [])

    return (
        <article className="events">
            {
                events.map(event => {
                    return <section key={`event--${event?.id}`} className="event">
                        <div className="event__title">{event?.game?.name} with {event?.organizer?.user?.first_name}</div>
                        <div className="event__date">On {event?.date} </div>
                        <div className="event__type">Type of Game: {event?.game?.game_type.label}</div>
                    </section>
                })
            }
        </article>
    )
}