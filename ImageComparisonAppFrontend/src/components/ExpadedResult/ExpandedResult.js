import React from 'react';
import {Button, Text, View} from 'react-native';

class ExpandedResult extends React.Component {
  render() {
    return (
      <View>
        <Text> EXPANDED RESULT PAGE </Text>
        <Button
          title="Back"
          onPress={this.props.onBack}
        >
        </Button>
      </View>
    );
  }
}



export default ExpandedResult;
