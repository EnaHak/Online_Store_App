import React from "react";
import { ColorPropType, Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Kosarica from "../screens/Kosarica";
import { Ionicons } from "@expo/vector-icons";

import Kategorije from "../screens/Kategorije";
import JelaKategorije from "../screens/JelaKategorije";
import Recept from "../screens/Recept";
import JelaFavoriti from "../screens/JelaFavoriti";
import Boje from "../constants/Boje";
import PocetniEkran from "../screens/PocetniEkran";
import PocetniEkranSvaki from "../screens/PocetniEkranSvaki";

const stackOpcije = {
  headerStyle: {
    backgroundColor: Boje.glavna,
  },
  headerTintColor: "black",
};

const ReceptiNavigacija = createStackNavigator(
  {

    Kategorije: {
      screen: Kategorije,
      
    },
    JednaKategorija: {
      screen: JelaKategorije,
    },
    Detalji: Recept,
  },
  {
    defaultNavigationOptions: stackOpcije,
  }
);
const Pocetno = createStackNavigator(
  {
    SveKategorije: {
      screen: PocetniEkran,
    },
    Newsletterr: PocetniEkranSvaki,
  },
  {
    defaultNavigationOptions:{
    headerTitle: "ZEna",
    backgroundColor:"white",
  headerStyle: {
    backgroundColor: "white",
  },
  headerTintColor: "black",
  headerTitleAlign: "center",
  headerTitleStyle: {
    fontSize: 65,
    fontFamily: "DM",
  },
  }}
)
const FavoritiNavigacija = createStackNavigator(
  {
    Favoriti: JelaFavoriti,
    Detalji: Recept,
  },
  {
    defaultNavigationOptions: stackOpcije,
  }
);
const KosaricaNavigacija = createStackNavigator(
  {
    Kosaricaa: Kosarica,
    Detalji: Recept,
   
  }
)
const tabEkrani = {
  ZEna: {
    screen: Pocetno,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="home-outline" size={20} color={tabInfo.tintColor} />;
      },
    },
  },
  IZBORNIK: {
    screen: ReceptiNavigacija,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="menu" size={20} color={tabInfo.tintColor} />;
      },
    },
  },

  FAVORITI: {
    screen: FavoritiNavigacija,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="heart-outline" size={20} color={tabInfo.tintColor} />;
      },
    },
  },
  KOSARICA: {
    screen: KosaricaNavigacija,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="cart-outline" size={20} color={tabInfo.tintColor} />;
      },
    },
  },
};

const ReceptiTabNavigacija =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabEkrani, {
      activeColor: "black",
      inactiveColor: "black",
      shifting: false,
      barStyle: {backgroundColor: "white"}
    })
    : createBottomTabNavigator(tabEkrani);

 





export default createAppContainer(ReceptiTabNavigacija);
