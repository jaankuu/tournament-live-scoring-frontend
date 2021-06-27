import axios from "axios"
import { apiUrl } from "../../config/constants";

const storePoints = (points) => ({ type: "STORE_POINTS", payload: points})

const startLoading = () => ({ type: "START_LOADING_POINTS" })
const stopLoading = () => ({ type: "STOP_LOADING_POINTS"})

export const fetchPoints = () => async (dispatch, getState) => {
    try {
        dispatch(startLoading())

        const response = await axios.get(`${apiUrl}/points`)
        const points = response.data.points

        console.log("POINTS response:: ", points)
        dispatch(storePoints(points))

        dispatch(stopLoading())

    } catch(error) {
        console.log(error.message)
    }
}
