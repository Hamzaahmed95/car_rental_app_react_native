const initialState = {
  myCar: [],
  status: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_CARS":
      return {
        ...state,
        myCar: action.payload
      };
    case "CREATE_A_CAR":
      return {
        ...state,
        status: action.payload
      };
    default:
      return state;
  }
}
