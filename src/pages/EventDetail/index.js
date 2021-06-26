import React, { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getEventDetails, getEventDetailsLoading } from "../../store/eventDetails/selectors"
import EventDetails from "../../components/EventDetail"
import { fetchEventDetail } from "../../store/eventDetails/actions";


const EventDetail = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const event = useSelector(getEventDetails)
    const eventLoading = useSelector(getEventDetailsLoading)

    useEffect(() => {
        dispatch(fetchEventDetail(id))
      }, [dispatch, id])


      if (eventLoading === false) {
      console.log("here is SINGLE event::", event)
      }

    return (
        <>
      hello
     {eventLoading ? "Loading.." :
        <EventDetails
        key={event.id}
        name={event.name}
        time={event.time}
        location={event.location}
        description={event.description}
        />
    }
        </>
    )
}

export default EventDetail