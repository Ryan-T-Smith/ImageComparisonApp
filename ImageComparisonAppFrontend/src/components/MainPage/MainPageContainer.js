import {connect} from 'react-redux';
import MainPage from "./MainPage";
import {changePage} from "../../actions/ui_actions";

const mapStateToProps = (state) => {
  return ({})
}

const mapDispatchToProps = dispatch => {
  return ({
    changePage: (page) => {
      dispatch(changePage(page))
    }
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage)