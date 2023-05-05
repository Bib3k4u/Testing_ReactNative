import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function Textinput({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = () => {
    navigation.navigate("ExampleuseState", {
      userName: name,
      userEmail: email
    });
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={"#E8A0BF"} />
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TouchableOpacity
        onPress={handleSubmit}
        style={{
          backgroundColor: "#BA90C6",
          height: 40,
          width: 80,
          justifyContent: "center",
        }}
      >
        <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#FDF4F5",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  input: {
    backgroundColor: "#FEF2F4",
    width: 300,
    height: 50,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    borderColor: "black",
    borderWidth: 2,
    fontSize: 18,
    margin:10
  },
  operator: {
    fontSize: 10,
  },
});
