import { GET_LIST } from '../actions/constans';

const initialState = [];

const passwordReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST: {
      const newState = action.payload;
      return newState;
    }
    default: return state;

  }
};

export default passwordReducer;
