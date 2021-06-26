import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getEventDetails, getEventDetailsLoading } from "../../store/eventDetails/selectors"
import EventDetails from "../../components/EventDetail"
import { fetchEventDetail } from "../../store/eventDetails/actions";


const EventDetail = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const eventDetailsLoading = useSelector(getEventDetailsLoading)
    const event = useSelector(getEventDetails).event
    const scoresForEvent = useSelector(getEventDetails).scores
    

    useEffect(() => {
        dispatch(fetchEventDetail(id))
      }, [dispatch, id])


      if (eventDetailsLoading === false) {
      console.log("here is SINGLE event::", event)
      }

    return (
        <>
      hello
     {eventDetailsLoading ? "Loading.." :
        <EventDetails
        key={event.id}
        name={event.name}
        time={event.time}
        location={event.location}
        description={event.description}
        />
        }
        {eventDetailsLoading ? "Loading..." : scoresForEvent.map(score => {
            return (
                <div>
                <p>{score.player}</p>
                <p>{score.eachScore}</p>
                </div>
            )
        })}
        </>
    )
}

export default EventDetail