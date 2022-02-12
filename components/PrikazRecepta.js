import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native";

import Boje from "../constants/Boje";

const PrikazRecepta = (props) => {
    return (
        <View style={{backgroundColor: "white"}}>
            <TouchableOpacity onPress={props.odabir}>
                    <View style={stil.zaSliku}>
                        <ImageBackground source={{ uri: props.slika }} style={stil.pozSlika}>
                        
                                <View style={stil.naslov1}>
                                <Text numberOfLines={1}>{props.naziv}</Text>

                                </View>
                                <View style={stil.naslov2}>
                                <Text numberOfLines={1}>{props.novac} kn</Text>

                                </View>
                            
                            
                        </ImageBackground>
                    </View>
                  
            </TouchableOpacity>
            </View>
    );
};

const stil = StyleSheet.create({
    pozSlika: {
        width: 300,
        height: 490,
        alignItems:"center",
        marginTop: 20,
        margin: 50
        },
    naslov: {
        flexDirection: "column",
        fontSize: 15,
        color: 'black',
        backgroundColor: 'white',
        paddingVertical: 0,
        textAlign: 'center',
        width: 300,
        marginTop: 490
        
    },
    zaSliku:{
        alignItems: "center"
        
    },
    naslov1:{
        fontSize: 15,
        color: 'black',
      
        paddingVertical: 0,
        textAlign: 'center',
        width: 300,
        marginTop: 490
        
    },
    naslov2:{
        fontSize: 15,
        color: 'black',
        paddingVertical: 0,
        textAlign: 'center',
        width: 300,
        marginTop: 0
       
    }
});

export default PrikazRecepta;
