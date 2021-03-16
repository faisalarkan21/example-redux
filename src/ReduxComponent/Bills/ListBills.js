import { connect } from "react-redux";
import { multipleNumber } from "../../Services/Users/users.reducer";
const ListBills = (props) => {
  console.log("ListBills", props);
  return (
    <>
      <h1 onClick={() => props.dispatch(multipleNumber(5))}>
        This is List Bils Compoent {props.state.users}
      </h1>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(ListBills);
