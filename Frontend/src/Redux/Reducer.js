import * as types from "./actionType"

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_DATA_REQUEST:{
        return{
            isLoading: true,
            isError: false,
            data:[]
        }
    }
    case types.GET_DATA_SUCCUCS:{
        return{
            isLoading: false,
            isError: false,
            data:payload
        }
    }
    case types.GET_DATA_FAILUER:{
        return{
            isLoading: false,
            isError: false,
            data:[]
        }
    }

    default:
      return state;
  }
};
