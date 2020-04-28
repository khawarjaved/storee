import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Header, ListItem } from "react-native-elements";
import { db } from "../config";

let itemsRef = db.ref("/items");

export default class HomeScreen extends Component {
  state = {
    items: [{ text: "" }],
  };

  componentDidMount() {
    itemsRef.on("value", (snapshot) => {
      let data = snapshot.val();
      if (data === null) return [];
      let items = Object.values(data);
      this.setState({ items });
    });
  }

  renderItem = ({ item }) => (
    <ListItem title={item.text} bottomDivider chevron />
  );

  keyExtractor = (item, index) => index.toString();

  render() {
    return (
      <View>
        <Header />
        <FlatList
          style={styles.list}
          keyExtractor={this.keyExtractor}
          data={this.state.items}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    marginBottom: 100,
  },
});
