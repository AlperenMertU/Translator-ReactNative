import { useState } from 'react';
import React, { useRef } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Button } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';
import { captureRef } from 'react-native-view-shot';


const Copy = (props) => {


console.log(props.saveTextAsImage);
////
  const copyToClipboard = () => {
    Clipboard.setStringAsync(props.exit)
  };


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

            <TouchableOpacity onPress={copyToClipboard} style={styles.copy}>
              <Text>Kopyala</Text>
            </TouchableOpacity>

            
            <TouchableOpacity onPress={props.saveTextAsImage}>
              <Text>Saydam Kaydet</Text>
            </TouchableOpacity>

          </View>

        )}

     

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  plus: {
    textAlign: "center",
    alignItems: "center",
    fontSize: 40,
    bottom: 5,
  },
  sections: {
    transform: [{ translateY: -120 }],
    bottom: 10,
  },
  sections: {
    width: 55,
    transform: [{ translateY: -120 }],
    bottom: 10,
  },
  copy: {
    bottom: 5,

  }

})

export default Copy;
