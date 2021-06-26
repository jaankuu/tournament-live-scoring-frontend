const initialState = {
  loading: false,
  details: {}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "STORE_EVENT_DETAILS": {
        return {
          ...state,
          details: action.payload
        }
      }
      case "START_LOADING_DETAILS": {
        return {
          ...state,
          loading:true
        }
      }
      case "STOP_LOADING_DETAILS": {
        return {
          ...state,
          loading:false
        }
      }
      case "EVENT_POST_SUCCESS": {
        return {
          ...state,
          loading: false
        }
    }
      default: {
          return state
        }
      }
  }
  