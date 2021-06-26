import axios from "axios"
import { apiUrl } from "../../config/constants";
// import { selectUser } from "../user/selectors";

const storeEventDetails = (eventDet) => ({ type: "STORE_EVENT_DETAILS", payload: eventDet})

const startLoading = () => ({ type: "START_LOADING" })
const stopLoading = () => ({ type: "STOP_LOADING"})

const postEventSuccess = () => ({ type: "EVENT_POST_SUCCESS" })


export const fetchEventDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch(startLoading())

        const response = await axios.get(`${apiUrl}/events/${id}`)
        const eventDet = response.data
        console.log("events request response:: ", response)
        dispatch(storeEventDetails(eventDet))

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

