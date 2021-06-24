const initialState = {
    loading: false,
    allEvents: []
  }

  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case "STORE_EVENTS": {
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
        default: {
            return state
          }
        }
    }
  