import React from 'react';
import {Text, View} from 'react-native';
import {CAMERA_VIEW} from "../../constants/views";
import CameraPageContainer from "../Camera/CameraPageContainer";

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
      case CAMERA_VIEW: return <CameraPageContainer/>;
      default: return <Text>Unrecognized Page</Text>;
    }
  }


}


export default PageRouter;
