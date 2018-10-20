import {connect} from 'react-redux';
import ExpandedResult from "./ExpandedResult";
import {changePage} from "../../actions/ui_actions";
import {MAIN_PAGE} from "../../constants/pages";

const mapStateToProps = (state) => {
  return ({})
}

const mapDispatchToProps = dispatch => {
  return ({
    onBack: () => {
      dispatch(changePage(MAIN_PAGE))
    }
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpandedResult)