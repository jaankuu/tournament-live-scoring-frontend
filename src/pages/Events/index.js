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
            <h1>This is Events page</h1>
            <div>
                {eventsLoading ? "Loading.." : events.map(event => {
                    return (
                        <Event
                            key={event.id}
                            name={event.name}
                            id={event.id}
                            />
                    )   
                })}
            </div>

        </>
    )
}

export default Events