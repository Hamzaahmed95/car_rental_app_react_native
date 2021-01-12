import { combineReducers } from "redux";
import my_car from "./myCarList";
import reserve_car from "./reservedCar";

export default combineReducers({
  my_car,
  reserve_car
});
