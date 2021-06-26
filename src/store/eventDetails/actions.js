import axios from "axios"
import { apiUrl } from "../../config/constants";


export const storeEventDetails = (eventDetails) => ({ type: "STORE_EVENT_DETAILS", payload: eventDetails })
export const postEventSuccess = () => ({ type: "EVENT_POST_SUCCESS" })

export const startLoading = () => ({ type: "START_LOADING_DETAILS" })
export const stopLoading = () => ({ type: "STOP_LOADING_DETAILS" })


export const fetchEventDetail = (id) => async (dispatch, getState) => {
    try {
        dispatch(startLoading())

        const response = await axios.get(`${apiUrl}/events/${id}`)
        const eventDetails = response.data.event

        console.log("event DETAIL response:: ", eventDetails)

        dispatch(storeEventDetails(eventDetails))
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