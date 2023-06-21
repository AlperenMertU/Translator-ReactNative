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


  const [isOpen, setIsOpen] = useState(false);

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
              <Text style={styles.text}>KOPYALA</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={props.saveTextAsImage} style={styles.pngCopy}>
              <Text style={styles.text}>SAYDAM KAYDET</Text>
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
    bottom: 3,
  },

  sections: {
    width: 55,
    transform: [{ translateY: -110 }],
    bottom: 10,
    left:8
  },
  copy: {
    fontSize: 1,
    bottom: 5,
    borderRadius: 15,
  },
  pngCopy: {
    marginTop:10,
    fontSize: 1,
    bottom: 5,
    borderRadius: 15,
  },
  text:{
    fontSize:11,
    fontWeight:"bold",
  }
})

export default Copy;
