const initialState = {
  data: [],
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'TAMBAH_ARRAY': {
      return {
        ...state,
        data: [...state.data, action.data]
      }
    }
    case 'DELETE_ARRAY': {
      return {
        ...state,
        data: state.data.filter((el) => el.id !== action.value)
      }
    }
    case 'LOGOUT': {
      return {
        ...initialState
      };
    }
    default: {
      return state;
    }
  }
}

export default rootReducer;