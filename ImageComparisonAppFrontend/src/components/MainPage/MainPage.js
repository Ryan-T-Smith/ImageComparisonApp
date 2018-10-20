import React from 'react';
import {Text, View} from 'react-native';
import {FULL_WIDTH, PADDED} from "../../styles/general_styles";
import {Card} from "react-native-material-ui";

class MainPage extends React.Component {
  render() {

    return (
      <View style={{...PADDED, ...FULL_WIDTH,   paddingTop: 36}} >
        <Card>
          <View style={{height: '55%'}}>
            <Text style={PADDED}> Preview </Text>
          </View>
        </Card>
        <Card>
          <View style={{height: '20%'}}>
            <Text style={PADDED}> Description </Text>
          </View>
        </Card>
        <View style={{display: 'flex', flexDirection: "row", justifyContent: "space-around"}}>
          <Card>
            <View style={{height: '20%', minWidth: "49%"}}>
              <Text style={PADDED} > Image A </Text>
            </View>
          </Card>
          <Card>
            <View style={{height: '20%', minWidth: "49%"}}>
              <Text style={PADDED}> Image B </Text>
            </View>
          </Card>
        </View>
      </View>
    );
  }

}


export default MainPage;
