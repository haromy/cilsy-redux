const initstate = {
  list: []
}

const rootReducer = (state = initstate, action) => {
  switch (action.type) {
    case 'TAMBAH_SATU': {
      const init = {
        no: state.list.length + 1,
        detail: ''
      }
      const update = [...state.list, init];
      return {
        ...state,
        list: update
      }
    }
    case 'UPDATE_DETAIL_BY_INDEX': {
      const update = [...state.list];
      update[action.index].detail = action.value;
      return {
        ...state,
        list: update,
      }
    }
    default: {
      return state;
    }
  }
}

export default rootReducer;