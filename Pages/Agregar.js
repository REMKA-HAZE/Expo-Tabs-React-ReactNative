import React, { useState,  } from 'react';
import { TextInput, Image, View, StyleSheet, Button, Alert} from 'react-native';



export const Agregar=(prop)=> {
     const {setData} = prop.route.params;
    
    const [initText, setText] = useState('');


    const push = () => {
      if (initText==='') {
         Alert.alert("Agrega un articulo valido","",[{ cancelable: true}]);
      }else if (initText!='') {
         setData(current=>current.concat([{title:initText}]))
         setText('')
      }
    };

    return (
    
    <View style={{ flex: 1, backgroundColor:'white' }}>

      <View style={{alignItems: 'center',justifyContent: 'center',marginBottom:50 }}>
         <Image
          style={styles.tinyLogo}
          source={require('../assets/kisspng-react-angularjs-vue-js-typescript-native-5ac39b06201e24.8669785815227686461316.png')}
        />
      </View>
    
   
      <View style={{  marginHorizontal: 16,justifyContent: 'center', }}>
           <TextInput
        value={initText}
        onSubmitEditing={push}
        style={styles.input}
        onChangeText={title => setText(title)}

      />
         <Button 
        title="Agregar"
        color="#daa520"
        onPress={push}
      />
      </View>
     
    </View>
  );
}
const styles = StyleSheet.create({
   input: {
    
    marginVertical: 16,
    height: 40,
    padding: 10,
    backgroundColor:'#f0e68c',
    justifyContent: 'center'
  },
  tinyLogo: {
    width: 200,
    height: 200,
    
  },
});

export default Agregar;