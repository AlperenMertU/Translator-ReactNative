import { useState } from 'react';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Copy = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handlePress = () => {
    setIsOpen(!isOpen);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} style={styles.open}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
  {
    isOpen
  && (
      <View style={styles.sections}>
        <TouchableOpacity onPress={() => console.log('Kopyala')} style={styles.copy}>
          <Text>Kopyala</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('Saydam Kaydet')}>
          <Text>Saydam Kaydet</Text>
        </TouchableOpacity>
      </View>
   
) }
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  plus: {
    textAlign:"center",
    alignItems:"center",
    fontSize: 40,
    bottom:5,
  },
  sections: {
    transform: [{translateY: -120}],
    bottom:10,
  },
  sections: {
    width:55,
    transform: [{translateY: -120}],
    bottom:10,
  },
  copy:{
     bottom:5,

  }

})

export default Copy;
