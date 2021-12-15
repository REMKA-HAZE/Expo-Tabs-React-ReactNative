
import React, { useState } from 'react';
import { Text,View, StyleSheet, 
 StatusBar,  
 TouchableOpacity} from 'react-native';




export const Counter=()=>{
  const [counter, setCounter] = useState(0);
  const [intervalId, setIntervalId] = useState(0);
  const [myName, setString] = useState("");

  const increaseCounter = () => {
    setCounter((current) => (current < 1000 ? current + 1 : current + 0));
  };

  const decreaseCounter = () => {
    setCounter((current) => (current > 0 ? current - 1 : current + 0));
  };

  const autoCount = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
      return;
    }
    const newIntervalId = setInterval(() => {
      setCounter((prevCount) =>
        prevCount < 1000 ? prevCount + 1 : prevCount + 0
      );
    }, 50);
    setIntervalId(newIntervalId);
  };

  const setMyName = () => {
    setString("Luis Gerardo Castañeda López");
    setTimeout(() => {
      setString("");
    }, 5000);
  };

  return (
    <View style={styles.container}>
      
<View style={[styles.fila12,{ }]}>
    <View style={[styles.col12,{  }]}>
      <Text style={[styles.label,{ flex:1}]}>Unidad II - Actividad I - Repo Expo</Text>
    </View>
    </View>
    <View style={[styles.fila12,{ }]}>
    <View style={[styles.col12,{  }]}>
      <Text style={[styles.label,{ flex:0.6 }]}>counter</Text>
    <Text style={[styles.labelCounter,{ flex:1, }]}>{counter}</Text>
    </View>
    </View>

      <View style={[styles.fila12,{ paddingBottom: 10 }]}>

    <View style={[styles.col12,{ justifyContent: 'center' }]}>
      <TouchableOpacity onPress={decreaseCounter} style={[styles.buttonCute,{}]}>
          <Text  style={[styles.labelsignos]}>-</Text>
      </TouchableOpacity>
        
    </View>

    <View style={[styles.col12,{  backgroundColor: "" }]}>
    
    
    </View>

    <View style={[styles.col12,{ justifyContent: 'center' }]}>
       <TouchableOpacity onPress={increaseCounter} style={[styles.buttonCute,{}]}>
          <Text  style={[styles.labelsignos]}>+</Text>
      </TouchableOpacity>
    
    </View>

    </View>
      

      <View style={[styles.fila12,{ padding: 5 }]}>

    <View style={[styles.col12,{  backgroundColor: "" }]}></View>

    <View  style={[styles.col,{ flex:3,  paddingBottom: 10 }]}>
        <View style={[styles.col12,{  }]}>
            <TouchableOpacity onPress={autoCount} style={[styles.buttonCute,{}]}>
                  <Text  style={[styles.labelsignos]}>Automatic +</Text>
            </TouchableOpacity>
         
        </View>
       
        
     
    </View>

     <View style={[styles.col12,{  backgroundColor: "" }]}></View>

    </View>

     <View style={[styles.fila,{ flex:3 }]}>

      <View style={[styles.col12,{   }]}>
      
      <View style={[styles.fila12,{  padding: 5 }]}>
        
        <View style={[styles.col,{ flex:1,  backgroundColor: "" }]}>
            <TouchableOpacity onPress={setMyName} style={[styles.buttonCute,{}]}>
                  <Text  style={[styles.labelsignos]}>My Name</Text>
            </TouchableOpacity>
       
        </View>
      </View>


      <View style={[styles.fila12,{  backgroundColor: "" }]}>
        <Text style={[styles.label,{ flex:1 }]}>{myName}</Text>
      </View>


      </View>

      <StatusBar style="auto" />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "black"
  },
  col: {
    flexDirection: "column"
  },
  col12: {
    flex: 1,
    flexDirection: "column"
  },
  fila: {
    flexDirection: "row"
  },
  fila12: {
    flex: 1,
    flexDirection: "row"
  },
  labelCounter:{
    textAlign: "center",
    fontSize: 30,
    color: "white",
  },
  label: {
    textAlign: "center",
    textAlignVertical : "center",
    fontSize: 26,
    color: "#daa520",
  },
  labelsignos: {
    textAlign: "center",
    textAlignVertical : "center",
    fontSize: 40,
    color: "white",
  },
  buttonCute:{
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "#daa520",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%" ,
    textAlign: "center",
  },
  selectedLabel: {
    color: "white",
  },
});

export default Counter;