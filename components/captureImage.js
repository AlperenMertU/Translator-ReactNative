import React, { useRef, useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';
import { captureRef } from 'react-native-view-shot';

const App = () => {
  // buraya kadar her şey yolund sayılır yazılanı koyalıyor ama amacım bnunu home veya copy bilşeniyle harmanlamak
  const textRef = useRef(null);
  const [text, setText] = useState('Merhaba, Dünya!');

  const saveTextAsImage = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if (status !== 'granted') {
      console.log('Erişim izni reddedildi');
      return;
    }

    const uri = await captureRef(textRef.current, {
      format: 'png',
      quality: 1,
    });

    MediaLibrary.saveToLibraryAsync(uri)
      .then(() => {
        console.log('Resim kaydedildi!');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
        //bazı problemlerimiz var türk alfabesinde saydam kopya için aşağıdaki gibi bir text elementi içinde olması gerek

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text ref={textRef}>{text}</Text>
      <TextInput value={text} onChangeText={setText} />
      <Button title="Metni Kaydet" onPress={saveTextAsImage} />
    </View>
  );
};

export default App;
