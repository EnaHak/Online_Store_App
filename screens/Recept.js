import React, {useEffect,useCallback} from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image, Alert
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";
import { promjenaFavorita } from "../store/actions/recepti";
import { promjenaKosarica} from "../store/actions/recepti";

import { Ionicons } from "@expo/vector-icons";


import { RECEPTI } from "../data/test-podaci";

// Odvajamo prikaz elementa u posebnu komponentu
// Koristimo je samo ovdje pa nema potrebe za novom datotekom


const Recept = (props) => {
  const sviRecepti = useSelector(state => state.recepti.recepti)
  const idRecepta = props.navigation.getParam("receptId");
  const odabrani = sviRecepti.find((rec) => rec.id === idRecepta);

  const statusFavorit = useSelector((state) =>
  state.recepti.favoritRecepti.some((r) => r.id === idRecepta))

  

  const dispatch = useDispatch();
 
  const favHandler = useCallback(() => {
    dispatch(promjenaFavorita(idRecepta));
  }, [dispatch, idRecepta]);
 
  useEffect(() => {
    props.navigation.setParams({ promFavorit: favHandler });
  }, [favHandler]);



  useEffect(() => {
    props.navigation.setParams({favStatus: statusFavorit})
  }, [statusFavorit])

  const kosHandler = useCallback(() => {
    dispatch(promjenaKosarica(idRecepta));
  }, [dispatch, idRecepta]);
 
  useEffect(() => {
    props.navigation.setParams({ promKosarica: kosHandler });
  }, [kosHandler]);

  return (
    
    <ScrollView style={{backgroundColor: "white"}}>
    <View style={stil.zaSliku}>
      <Image style={stil.slika} source={{ uri: odabrani.urlSlike }} />
    </View>
    <View style={stil.zaTekst}>
       <Text>{odabrani.naziv}</Text>
       <Text>{odabrani.novac} kn</Text>
    </View >
    <View style={{flexDirection: "row"}}>
    <View style={{padding: 50}}>
    <Button title="Dodaj u kosaricu" color="black" onPress={kosHandler}/>
    </View>
    <View style={{alignItems: "flex-end", marginVertical: 54, marginHorizontal: 70}}>
    <Ionicons name= {statusFavorit ? "heart" : "heart-outline"} size={30} onPress={favHandler} />

    </View>
    </View>
    </ScrollView>
   
  );
};


const stil = StyleSheet.create({
  slika: {
    width: 300,
    height: 490,
    alignItems:"center",
  },
  receptDetalji: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  naslov: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  element:{
    marginVertical: 5,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  },
  zaSliku:{
    alignItems:"center",
    paddingTop: 30
  },
  zaTekst:{
    paddingLeft:55
  }
});

export default Recept;
