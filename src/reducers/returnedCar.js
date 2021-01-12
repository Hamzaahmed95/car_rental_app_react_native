const initialState = {
  isDataLoaded: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "RETURN_CAR":
      return {
        ...state,
        isDataLoaded: action.payload
      };
    default:
      return state;
  }
}
