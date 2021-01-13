import { combineReducers } from "redux";
import my_car from "./myCarList";
import reserve_car from "./reservedCar";
import returned_car from "./returnedCar";

export default combineReducers({
  my_car,
  reserve_car,
  returned_car
});
