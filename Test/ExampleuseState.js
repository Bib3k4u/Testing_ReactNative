import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import React, { useState, useEffect } from "react";

export default function ExampleuseState({ route, navigation }) {
  const [counter, setCounter] = useState(0);
  // useEffect(() => {
  //     setTimeout(() => {
  //       setCounter((count) => count + 1);
  //     }, 2000);
  //   });

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const { userName, userEmail } = route.params;
  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={"#E8A0BF"} />
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          margin: 50,
        }}
      >
        <TouchableOpacity onPress={decrement}>
          <View style={styles.btn}>
            <Text style={styles.operator}>-</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.operator}>{counter}</Text>
        <TouchableOpacity onPress={increment}>
          <View style={styles.btn}>
            <Text style={styles.operator}>+</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 20 }}>Name : {userName}</Text>
        <Text style={{ fontSize: 20 }}>Email : {userEmail}</Text>
      </View>
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
  btn: {
    backgroundColor: "#BA90C6",
    width: 40,
    borderRadius: 50,
    alignItems: "center",
    marginLeft: 50,
    marginRight: 50,
  },
  operator: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
