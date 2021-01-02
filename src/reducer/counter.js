const initialState = {
    counter: 0,
    arrayResp: [],
    data: [],
  }
  
  const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
      return {
        ...state,
        counter: state.counter + 1
      }
    }
    if (action.type === 'TAMBAH_COUNTER_DARI_INPUT') {
      return {
        ...state,
        counter: state.counter + action.value
      }
    }
    if (action.type === 'PENGURANGAN_COUNTER') {
      return {
        ...state,
        counter: state.counter - action.value
      }
    }
    if (action.type === 'LOGOUT') {
      return {
        ...initialState
      }
    }
    return state;
  }
  
  export default rootReducer;