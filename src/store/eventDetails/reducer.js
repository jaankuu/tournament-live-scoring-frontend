const initialState = {
    loading: false,
    eventDetails: []
  }

  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case "STORE_EVENT_DETAILS": {
        const events = action.payload;
          return {
            ...state,
            allEvents: events
          }
        }
        case "START_LOADING": {
          return {
            ...state,
            loading:true
          }
        }
        case "STOP_LOADING": {
          return {
            ...state,
            loading:false
          }
        }
        case "EVENT_POST_SUCCESS": {
            return {
                ...state,
                eventDetails: action.payload
            }
        }
        default: {
            return state
          }
        }
    }
  