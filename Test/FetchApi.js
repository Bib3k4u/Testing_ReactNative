import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import Axios from "axios";
export default function FetchApi() {
  const [PostData, setPostData] = useState([]);

  useEffect(() => {
    fetchApiData();
  }, []);

  const fetchApiData = async () => {
    try {
      const response = await Axios.get(
        "https://jsonplaceholder.typicode.com/albums/1/photos"
      );
      console.log(response.data);
      setPostData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={"#E8A0BF"} />

      <ScrollView style={{ width: "100%" }}>
        {PostData.map((list, index) => {
          return (
            <View style={styles.cardContainer} key={list.id}>
              <Image
                style={styles.cardImage}
                source={{ uri: list.url }}
              />
              <Text style={{ textAlign: "center", marginVertical: 10, width:'100%' }}>
               {list.title}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#FDF4F5",
    flex: 1,
    alignItems: "center",
  },
  cardContainer: {
    width: "100%",
    marginVertical: 20,
    backgroundColor: "#fff",
    // marginHorizontal: 10,
    // marginLeft:18,
    paddingVertical: 20,
    padding: 10,
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 8,
  },
  cardImage: {
    height: 300,
    width: "100%",
    borderRadius: 20,
  },
});
