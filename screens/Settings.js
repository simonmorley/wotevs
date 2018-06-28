import React, { Component } from 'react';
import { Alert, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class Settings extends Component {
  render() {
    return (
      <ScrollView>
        <List>
          <ListItem
            title="Notifications"
          />
          <ListItem
            title="Profile"
          />
          <ListItem
            title="Password"
          />
        </List>
        <List>
          <ListItem
            title="Sign Out"
            rightIcon={{ name: 'cancel' }}
            onPress={() => {
              Alert.alert('You tapped the button!');
            }}
          />
        </List>
      </ScrollView>
    );
  }
}

export default Settings;
