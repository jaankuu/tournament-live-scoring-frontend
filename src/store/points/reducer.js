const initialState = {
    loading: false,
    pointsData: []
  }

  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case "STORE_POINTS": {
          return {
            ...state,
            pointsData: action.payload
          }
        }
        case "START_LOADING_POINTS": {
          return {
            ...state,
            loading:true
          }
        }
        case "STOP_LOADING_POINTS": {
          return {
            ...state,
            loading:false
          }
        }
        default: {
            return state
          }
        }
    }
  