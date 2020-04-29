import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Header } from "react-native-elements";
import { Button,TextInput,RadioButton,Text,Searchbar,searchQuery  } from 'react-native-paper';
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
    checked: 'first',
  };

  submit = () => {
    addItem(this.state.text);
    this.setState({ text: "" });
  };

  render() {

    return (
      <View>
        <Header />
        <TextInput
          style={styles.input}
          placeholder="Add item 1"
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />

        <Button icon="camera" mode="contained" onPress={() => this.submit()}>
    Press me
  </Button>
  <Button icon="camera"onPress={() => this.submit()}>
  Click me
</Button>
<Searchbar
        placeholder="Search"
        onChangeText={this._onChangeSearch}
        value={searchQuery}
      />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    marginTop: 40,
  },
});
