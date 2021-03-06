import { connect } from "react-redux";
import {setIsLoading} from "../actions";
import ShowModal from "../components/ShowModal.js";

function mapDispatchToProps(dispatch){
  return{
    setIsLoading: function(isLoading){
      let action = setIsLoading(isLoading);
      dispatch(action);
    }
  }
}
const ShowModalContainer = connect(null, mapDispatchToProps)(ShowModal);
export default ShowModalContainer
