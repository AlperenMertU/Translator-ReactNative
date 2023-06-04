import { useState } from 'react';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Copy = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePress = () => {
    setIsOpen(!isOpen);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} style={styles.open}>
        <Text>Tıkla</Text>
      </TouchableOpacity>
  {
    isOpen
  && (
      <View style={styles.sections}>
        <TouchableOpacity onPress={() => console.log('Kopyala')}>
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
   top:120,
   left:25,
  },
  circle: {
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 25,
    width: 50,
    height: 50,
    backgroundColor: "red",
  },
  plus: {
    top: -5,
    fontSize: 40,
  },
  sections: {
    transform: [{translateY: -120}],
  }

})

export default Copy;
