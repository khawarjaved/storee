import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Header, Input, Button } from "react-native-elements";
import { db } from "../config";

let addItem = (item) => {
  if (item) {
    db.ref("/items").push({
      text: item,
    });
  }
};
export default class AddItemScreen extends Component {
  state = {
    text: "",
  };

  submit = () => {
    addItem(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <View>
        <Header />
        <Input
          style={styles.input}
          placeholder="Add item"
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />
        <Button type="clear" onPress={() => this.submit()} title="Save" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    marginTop: 40,
  },
});
