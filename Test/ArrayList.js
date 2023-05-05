import { View, Text, StyleSheet, StatusBar, FlatList, TouchableOpacity} from "react-native";
import React, { useState } from "react";

export default function Textinput() {
  const [data, setData] = useState([
    { id: 1, name: "Baba" },
    { id: 2, name: "Ram" },
    { id: 3, name: "Hero" },
    { id: 4, name: "Sun" },
    { id: 5, name: "Moon" },
    { id: 6, name: "Star" },
    { id: 7, name: "Call" },
    { id: 8, name: "Gang" },
    { id: 9, name: "Mango" },
    { id: 10, name: "Native" },
  ]);

  const handleDelete = oldid => {
    setData((prevData) =>{
        return prevData.filter((tempData) => {
            if(tempData.id != oldid){
                return tempData;
            }
        })
    })
  }

  return (
    <View style={styles.mainContainer}>
      <StatusBar backgroundColor={"#E8A0BF"} />
      {/* //If we use FlatList we dont need to use Scrollview as it is responsive */}

      <FlatList
      keyExtractor={item =>{item.id}}
      numColumns={2}
        data={data}
        renderItem={({item}) =>{
            return ( <TouchableOpacity onPress={() => handleDelete(item.id)} >
                <Text style={styles.textArea}>{item.name}</Text>
                </TouchableOpacity>
            )

        }}
      />
      {/* <ScrollView>
        {data.map((list, index) => {
          return (
            <View key={data.id}>
              <Text style={styles.textArea}>{list.name}</Text>
            </View>
          );
        })}
      </ScrollView> */}
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
    justifyContent: "space-around",
  },
  textArea :{
    fontSize:30,
    backgroundColor:'pink',
    width:100,
    textAlign:"center",
    height:50,
    margin:20
  }
});
