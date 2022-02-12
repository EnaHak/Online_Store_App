import React from "react";
import { StyleSheet, Text, View, Button, FlatList,TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { KATEGORIJE } from "../data/test-podaci2";
  
const PocetniEkran = (props) => 
{
  const renderGrid = (podaci) => {
    return (

      <TouchableOpacity style={stil.gridElement} onPress={() => {props.navigation.navigate("Newsletterr",{
        idKategorije: podaci.item.id})}}>
        <View style={stil.zaTekst} >
        <Text style={stil.tekst}>{podaci.item.naziv}</Text>
      </View>
      </TouchableOpacity>
     
    )
    }

      return (
        <View style={{backgroundColor: "white"}}>
            <View style={stil.zaSliku}>
              <Image style={stil.slika} source={require('../assets/slik2.jpg')}/> 
           
            </View>
            <FlatList data={KATEGORIJE} numColumns={1} renderItem={renderGrid} />
          
        </View>
      )
    

    

}

const stil = StyleSheet.create({
  gridElement: {
    flex: 1,
    marginBottom: 7,
    height: 30,
    alignItems: 'center',
    backgroundColor: "white"
    

  },
  poz: {
    backgroundColor: "white",
    
  
  },
  slika:{
    width: 340,
    height: 550,
    alignItems:"center",
    margin: 40
    },
  zaSliku:{
    alignItems: "center"
  },
  tekst:{
   fontSize: 13,
   fontStyle: "normal",
   shadowColor: 'black',
  
   
  },
  zaTekst:{
    alignItems: "center",
    borderColor: "red"
  }
  
 
    
});

export default PocetniEkran;