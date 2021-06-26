import axios from "axios"
import { apiUrl } from "../../config/constants";

const storeEvents = (events) => ({ type: "STORE_EVENTS", payload: events})

const startLoading = () => ({ type: "START_LOADING" })
const stopLoading = () => ({ type: "STOP_LOADING"})

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
