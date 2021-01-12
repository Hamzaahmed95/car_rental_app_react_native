const initialState = {
  myCar: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_CARS":
      return {
        ...state,
        myCar: action.payload
      };
    default:
      return state;
  }
}
