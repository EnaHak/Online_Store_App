import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ReceptiLista from "../components/ReceptiLista";
import { RECEPTI } from "../data/test-podaci";
import { useSelector } from 'react-redux';

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Button } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const JelaFavoriti = (props) => {
  const favRecepti = useSelector(state => state.recepti.favoritRecepti)
  //const fav = favRecepti.filter((r) => r.id === "r2" || r.id === "r10");

  if (favRecepti.length === 0 || !favRecepti) {
    return (
      <View style={stil.ekran}>
        <Ionicons name="alert-circle-outline" size={30} />
        <Text>Vasi favoriti su prazni!</Text>
      </View>
    )
  }
  return (

   
      <ReceptiLista listaPodaci={favRecepti} navigation={props.navigation} />
      
      
  );
};

JelaFavoriti.navigationOptions = (navData) => {
  return {
    headerTitle: "Favoriti",

  };
};

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"

  },
});

export default JelaFavoriti;
