import React, {useEffect,useState} from 'react';
import { StyleSheet, Text, View, Button,TextInput,CheckBox,Alert, TouchableWithoutFeedback, Keyboard, Switch } from 'react-native';
import { KATEGORIJE } from '../data/test-podaci2';

const PocetniEkranSvaki = (props) => {
  const katID = props.navigation.getParam('idKategorije')
  const odabranaKat = KATEGORIJE.find(kat => kat.id === katID)

  const [unos, postaviUnos] = useState('')
  const [odabir, postaviOdabir] = useState(false)
  const [odabraniBroj, postaviOdabraniBroj] = useState()
  const [isSelected, setSelection] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

  const [isEnabled3, setIsEnabled3] = useState(false);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);

  const prihvati= ()=>{
    props.navigation.navigate("SveKategorije")
  }
  const prihvati2= ()=>{
    props.navigation.navigate("Newsletterr")
  }
  const Spremi =()=>{
    
    if ( unos == "" ){
      
      Alert.alert(
        "Unesi e-mail adresu!",
        "",
        [{text: "OK", onPress: prihvati2 , style: 'default' }],
        
      );
  }
  else {
    Alert.alert(
      "HVALA",
      "Primit cete e-mail s potvrdom o predbiljezbi",
      [{text: "PRIHVATI", onPress: prihvati , style: 'default' }],
      
    );
  }

    postaviOdabir(true)
    postaviOdabraniBroj(unos)
    postaviUnos('')
   
  }

  if (odabranaKat.id=="c1"){
    return (
      <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
      <View style={stil.ekran}>
  
        <View>
          <Text style={{fontSize: 17 }}>NEWSLETTER</Text>
        </View>
        <View>
          <Text></Text>
        </View>
        <View>
          <Text style={{fontSize: 13 }}>
            PREDBILJEZITE SE NA NEWSLETTER I SVAKI TJEDAN PRIMAJTE NOVOSTI I TRENDOVE POVEZANE S ODJELJCIMA KOJE STE ODABRALI.
            </Text>

        </View>
        <View>
          <Text></Text>
        </View>
        <View>
          
          <TextInput style={stil.unos} placeholder="E-POSTA" value={unos} onChangeText={postaviUnos} />

          
        </View>
  
        <View>
          <Text style={{fontSize: 13 }}>ODJELJCI KOJI VAS ZANIMAJU:</Text>
        </View>
        <View>
          <Text></Text>
        </View>
        <View style={{flexDirection: "row" }}>
  
          <View style={{alignItems: 'flex-start', width:300, height:50}}>
            <Text style={{fontSize: 13 }}>ZENE</Text>
          </View>
  
          <View style={{alignItems: 'flex-start'}}>
            <Switch trackColor={{ false: "#DCDCDC", true: "#DCDCDC" }}
        thumbColor={isEnabled ? "black" : "#DCDCDC"}  
        onValueChange={toggleSwitch}
        value={isEnabled}  />
          </View>
  
        </View>
  
        <View style={{flexDirection: "row" }}>
  
          <View style={{alignItems: 'flex-start', width:300, height:50}}>
            <Text style={{fontSize: 13 }}>MUSKARCI</Text>
          </View>
  
          <View style={{alignItems: 'flex-start'}}>
            <Switch  trackColor={{ false: "#DCDCDC", true: "#DCDCDC" }}
        thumbColor={isEnabled1 ? "black" : "#DCDCDC"}  
        onValueChange={toggleSwitch1}
        value={isEnabled1}  />
          </View>
          
        </View>
  
        <View style={{flexDirection: "row" }}>
  
          <View style={{alignItems: 'flex-start', width:300, height:50}}>
            <Text style={{fontSize: 13 }}>DJECA</Text>
          </View>
  
          <View style={{alignItems: 'flex-start'}}>
            <Switch trackColor={{ false: "#DCDCDC", true: "#DCDCDC" }}
        thumbColor={isEnabled2 ? "black" : "#DCDCDC"}  
        onValueChange={toggleSwitch2}
        value={isEnabled2} />
          </View>
          
        </View>
        <View style={{flexDirection: "row" }}>
  
          <View style={{alignItems: 'flex-start', width:300, height:50}}>
            <Text style={{fontSize: 13 }}>BEAUTY</Text>
          </View>
  
          <View style={{alignItems: 'flex-start'}}>
            <Switch trackColor={{ false: "#DCDCDC", true: "#DCDCDC" }}
        thumbColor={isEnabled3 ? "black" : "#DCDCDC"}  
        onValueChange={toggleSwitch3}
        value={isEnabled3} />
          </View>
          
        </View>
        <View>
          <Text></Text>
        </View>
        <View>
          <Text></Text>
        </View>
        <View>
          <Text></Text>
        </View>
        <View style={{marginTop: 34 }}>
          <Button  color="black" title="SPREMI" onPress={Spremi} />
        </View>
  
      </View>
      </TouchableWithoutFeedback>
    );
  }
  if (odabranaKat.id=="c2") {
    return (
      <View style={stil.ekran}>
  
        <Text>PRAVILA ZASTITE PRIVATNOSTI / UVJETI KUPNJE</Text>
  
      </View>
    );
  }
   
  }; 

 

const stil = StyleSheet.create({
  ekran: {
    flex: 1,
    paddingLeft: 30,
    paddingTop: 100,
    backgroundColor: "white",
    paddingRight: 30,
   
    
  },
  unos: {
    width: '98%',
    marginBottom: 40,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontSize: 13
  },
  
  
});

export default PocetniEkranSvaki