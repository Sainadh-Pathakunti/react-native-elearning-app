import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, TouchableOpacity, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

class DrawerContent extends Component {
  state = {
    channels: [
      { screen: 'Screen1', title: 'Health & Safety', icon: 'home' },
      { screen: 'Screen2', title: 'Safety Legislation', icon: 'list-ordered' },
      { screen: 'Screen3', title: 'Safety Act', icon: 'list-ordered' },
      { screen: 'Screen4', title: 'Employer Duty', icon: 'list-ordered' },
      { screen: 'Screen5', title: 'Workplace Safety', icon: 'list-ordered' },
      { screen: 'Screen6', title: 'Safety Issues', icon: 'list-ordered' },
      { screen: 'Screen7', title: 'Workplace Hazards', icon: 'list-ordered' },
      // { screen: 'Screen8', title: 'Screen8', icon: 'list-ordered' },
      { screen: 'Screen9', title: 'Questions', icon: 'list-ordered' },
      { screen: 'Screen10', title: 'Questions', icon: 'list-ordered' },
    ],
  };  

  navigateToScreen = route => () => {
    const navigate = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigate);
  };

  renderChannelButtons() {
    return this.state.channels.map(({ screen, title, icon }) => (
      <TouchableOpacity
        key={screen + title}
        onPress={this.navigateToScreen(screen)}
      >
        <View style={{ flexDirection: 'row' }}>
          <Icon
            name={icon}
            size={20}
            color="white"
            style={{ margin: 15, width: 20 }}
          />
          <Text style={{ color: 'white', marginTop: 17 }}>{title}</Text>
        </View>
      </TouchableOpacity>
    ));
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <ScrollView>{this.renderChannelButtons()}</ScrollView>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#444',
  },
};

export default DrawerContent;
