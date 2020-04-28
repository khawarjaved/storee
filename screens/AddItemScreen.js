import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Header } from "react-native-elements";
import { Button,TextInput,RadioButton  } from 'react-native-paper';
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
    const { checked } = this.state;
    return (
      <View>
        <Header />
        <TextInput
          style={styles.input}
          placeholder="Add item 1"
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />
<RadioButton
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ checked: 'first' }); }}
        />
        <Button icon="camera" mode="contained" onPress={() => this.submit()}>
    Press me
  </Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    marginTop: 40,
  },
});
