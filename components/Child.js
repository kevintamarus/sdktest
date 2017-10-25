import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  NativeModules,
} from 'react-native';
import { Button } from 'native-base';

const CalendarManager = NativeModules.CalendarManager;


export default class Child extends Component<{}> {
  constructor(props) {
    super(props);
    this.callCalendar = this.callCalendar.bind(this);
    this.state = {
      name: '',
      location: ''
    }
  }

  callCalendar() {
    CalendarManager.addEvent(this.state.name, this.state.location);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Test Calendar Manager</Text>
        <TextInput
          style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({name: text})}
          value={this.state.name}
        />
        <TextInput
          style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({location: text})}
          value={this.state.location}
        />
        <Button success onPress={this.callCalendar}><Text>Send Data</Text></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
