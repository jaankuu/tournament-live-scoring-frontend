import axios from "axios"
import { apiUrl } from "../../config/constants";

const storeEvents = (events) => ({ type: "STORE_EVENTS", payload: events})

const startLoading = () => ({ type: "START_LOADING" })
const stopLoading = () => ({ type: "STOP_LOADING"})

const postEventSuccess = () => ({ type: "EVENT_POST_SUCCESS" })


export const fetchEvents = () => async (dispatch, getState) => {
    try {
        dispatch(startLoading())

        const response = await axios.get(`${apiUrl}/events`)
        const events = response.data
        console.log("events request response:: ", events)
        dispatch(storeEvents(events))

        dispatch(stopLoading())

    } catch(error) {
        console.log(error.message)
    }
}



export const postEvent = (name, time, location, description, active, userId) => async (dispatch, getState) => {
    try {
        // const { token } = selectUser(getState())
    
        const response = await axios.post(
            `${apiUrl}/createEvent`,
            {
                name,
                time,
                location,
                description,
                active,
                userId,
            }
    
        )
    
        dispatch(postEventSuccess(response.data))
    
    } catch(error) {
        console.log(error.message)
    }
}