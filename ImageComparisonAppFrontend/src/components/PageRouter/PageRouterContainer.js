import {connect} from 'react-redux';
import PageRouter from "./PageRouter";
import {get} from 'lodash';

const mapStateToProps = (state) => {
  return ({
    currentPage: get(state, "ui.currentPage")
  })
};

const mapDispatchToProps = dispatch => {
  return ({})
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageRouter)