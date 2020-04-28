import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import HomeScreen from "./screens/HomeScreen";
import AddItemScreen from "./screens/AddItemScreen";

export default class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "list", title: "List", icon: "book" },
      { key: "add", title: "Add", icon: "edit" },
    ],
  };

  _handleIndexChange = (index) => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    list: HomeScreen,
    add: AddItemScreen,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}
