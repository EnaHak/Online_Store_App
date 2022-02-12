import React from "react";
import PrikazRecepta from "../components/PrikazRecepta";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux";

const ReceptiLista = (props) => {
  const fav = useSelector(state => state.recepti.favoritRecepti)

  const prikaziRecept = (recept) => {
    const favStatus = fav.some(r => r.id === recept.item.id)

    return (
      <PrikazRecepta 
        naziv={recept.item.naziv}
        novac={recept.item.novac}
        odabir={() => {
          props.navigation.navigate({
            routeName: "Detalji",
            params: {
              receptId: recept.item.id,
              naziv: recept.item.naziv,
              favStatus: favStatus
            },
          });
        }}
        naziv={recept.item.naziv}
        cijena={recept.item.cijena}
        slika={recept.item.urlSlike}
      />
    );
  };
  return (
    <View style={stil.ekran}>
      <FlatList
        data={props.listaPodaci}
        renderItem={prikaziRecept}
        style={{ width: "100%"  }}
      />
    </View>
  );
};

const stil = StyleSheet.create({
  ekran: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ReceptiLista;
