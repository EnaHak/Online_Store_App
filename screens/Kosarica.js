import React from "react";
import { StyleSheet, Text, View, Button, Alert} from "react-native";
import ReceptiLista from "../components/ReceptiLista";
import PrikazRecepta from "../components/PrikazRecepta";
import { RECEPTI } from "../data/test-podaci";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

const Kosarica = (props) => {
  const kosRecepti = useSelector(state => state.recepti.proizvodiUKosarici)
  const ukupnaCijena = useSelector(state => state.recepti.ukupnaCijena)

  const Naruci = () =>
  {
    Alert.alert(
      "Hvala!",
      "Vasa narudzba je zaprimljena.",
      [{text: "OK",style: 'default' }],

    );
  }


 

  if (kosRecepti.length === 0 || !kosRecepti) {
    return (
      <View style={stil.ekran}>
        <Ionicons name="alert-circle-outline" size={30} />
        <Text>Vaša košarica je prazna!</Text>
      </View>
    );
  }

  return (
   
   
    <View style={stil.ekran}>
    <ReceptiLista listaPodaci={kosRecepti} navigation={props.navigation} />
      <View style={{flexDirection: "row",paddingTop: 30, alignItems:"center", marginRight: 90,marginBottom: 10}}>
        <View>
        <Button title="      KUPI     " color="black" onPress={Naruci} style={{width: "80%"}}/>

        </View>
        <View style={{marginLeft: 10}}>
        <Text>UKUPNO {ukupnaCijena} kn </Text>
        </View>
      </View>
    </View>  
    
    
);
};
Kosarica.navigationOptions = (navData) => {
  return {
    headerTitle: "Kosarica",
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

export default Kosarica;
