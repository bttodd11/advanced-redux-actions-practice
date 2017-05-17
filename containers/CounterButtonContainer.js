import { connect } from "react-redux";
import {increaseCounter, decreaseCounter} from "../actions";
import CounterButton from "../components/CounterButton.js";

function mapDispatchToProps(dispatch){
  return{
    increase: function(){
      let action = increaseCounter();
      dispatch(action);
    },
    decrease: function(){
      let action = decreaseCounter();
      dispatch(action);
    }
  }
}
const CounterButtonContainer = connect(null, mapDispatchToProps)(CounterButton);
export default CounterButtonContainer
