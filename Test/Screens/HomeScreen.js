import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {

    function handleNavigation(screenName){
        navigation.navigate(screenName);
    }
    return (
        <View style={{ flex: 1, flexDirection:'column', justifyContent:'space-around', alignItems: 'center', justifyContent: 'center', backgroundColor: "#FDF4F5" }}>
            <StatusBar backgroundColor={'#E8A0BF'}/>
          <Text style={{fontSize:20, fontWeight:'bold'}} > Home Screen</Text>
          <View>
          <TouchableOpacity style={styles.btn} onPress={() => handleNavigation("Textinput")} ><Text style={{textAlign:'center'}}>Text Input</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => handleNavigation("FetchApi")}><Text style={{textAlign:'center'}}>Fetch API</Text></TouchableOpacity>
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
    btn:{
        backgroundColor:'#BA90C6',
        padding:10,
        marginBottom:20,
        marginTop:20,
    }
});