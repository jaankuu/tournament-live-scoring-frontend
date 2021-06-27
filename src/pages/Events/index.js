import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEvents } from "../../store/events/actions";
import { getEvents, getEventsLoading } from "../../store/events/selectors";
import Event from "../../components/Events";

const Events = () => {
    const dispatch = useDispatch()

    const events = useSelector(getEvents)
    const eventsLoading = useSelector(getEventsLoading)

    useEffect(() => {
        dispatch(fetchEvents())
      }, [dispatch])

    return (
        <>
            <h3>These are all available events</h3>
            <div>
                {eventsLoading ? "Loading.." : events.map(event => {
                    return (
                        <Event
                            key={event.id}
                            name={event.name}
                            id={event.id}
                            location={event.location}
                            date={event.date}
                            />
                    )   
                })}
            </div>

        </>
    )
}

export default Events