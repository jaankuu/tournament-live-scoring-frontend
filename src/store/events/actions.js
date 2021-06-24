import axios from "axios"
import { apiUrl } from "../../config/constants";

const storeEvents = (events) => ({ type: "STORE_EVENTS", payload: events})

const startLoading = () => ({ type: "START_LOADING" })
const stopLoading = () => ({ type: "STOP_LOADING"})


  export const getEvents = () => async (dispatch, getState) => {
      try {
          dispatch(startLoading())

          const response = await axios.get(`${apiUrl}/events`)
          console.log("events request response:: ", response)
          dispatch(storeEvents(response))

          dispatch(stopLoading())

      } catch(error) {
          console.log(error.message)
      }
  }