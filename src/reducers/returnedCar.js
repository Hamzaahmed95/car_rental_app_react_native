const initialState = {
  pastCar: [],
  status: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "PAST":
      console.log("hamza2" + action.payload);
      return {
        ...state,
        pastCar: action.payload
      };
    default:
      return state;
  }
}
