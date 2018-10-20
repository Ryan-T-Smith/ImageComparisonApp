import React from 'react';
import {Text, View} from 'react-native';
import {CAMERA_VIEW, MAIN_PAGE} from "../../constants/pages";
import CameraPageContainer from "../Camera/CameraPageContainer";
import MainPageContainer from "../MainPage/MainPageContainer";

class PageRouter extends React.Component {
  render() {

    return (
      <View >
        {this.renderCurrentView()}
      </View>
    );
  }

  renderCurrentView(){
    switch (this.props.currentPage){
      case MAIN_PAGE: return <MainPageContainer/>
      case CAMERA_VIEW: return <CameraPageContainer/>;
      default: return <Text>Unrecognized Page</Text>;
    }
  }


}


export default PageRouter;
