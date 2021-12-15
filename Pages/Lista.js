import React, {  } from 'react';
import { Text, View, StyleSheet, 
FlatList,  } from 'react-native';



const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
export const Lista=(prop)=> {
    const {initData} = prop;
     
      const renderItem = ({ item }) => (
      <Item title={item.title} />
      );
      return (
      <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'black' }}>
      <FlatList
        data={initData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
     
    </View>
  );
}
const styles = StyleSheet.create({
 
    item: {
    backgroundColor: '#daa520',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  }, 
  title: {
    color:'white',
    fontSize: 30,
  },
});


export default Lista;