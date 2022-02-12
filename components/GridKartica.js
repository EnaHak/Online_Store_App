import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Boje from "../constants/Boje";

const GridKartica = (props) => {
  return (
    <TouchableOpacity
      style={stil.gridElement}
      onPress={props.odabir}
    >
      <View style={{...stil.okvir,...{backgroundColor: props.boja}}}>
        <Text numberOfLines={2} style={stil.naslov}>{props.naziv}</Text>
      </View>
    </TouchableOpacity>
  );
};

const stil = StyleSheet.create({
  gridElement: {
    flex: 1,
    margin: 10,
    height: 130,
    paddingTop: 30,
    
  },
  okvir:{
    flex: 1,
    borderRadius: 0,
    elevation: 0,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  naslov:{
    fontFamily: 'raleway',
    fontSize: 22,
     textAlign: 'right'
  }
});

export default GridKartica;
