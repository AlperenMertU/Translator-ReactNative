import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image, Keyboard } from 'react-native';
import Copy from "../components/Copy";
const Home = ({ navigation }) => {


  const [text, setText] = useState("");

  let exit = ""
  const replacementMap = {
    "iç": "𐰱",
    "ık": "𐰶",
    "ok": "𐰸",
    "uk": "𐰸",
    "ök": "𐰰",
    "ük": "𐰰",
    "nç": "𐰨",
    "ng": "𐰭",
    "ny": "𐰪",
    "nd": "𐰦",
    "ld": "𐰡",

    "ka": "𐰴𐰀",
    "ke": "𐰚𐰀",
    "kı": "𐰴𐰃",
    "ki": "𐰚𐰃",
    "ko": "𐰴𐰆",
    "kö": "𐰚𐰇",
    "ku": "𐰴𐰆",
    "kü": "𐰚𐰇",

    "ba": "𐰉𐰀",
    "be": "𐰋𐰀",
    "bı": "𐰉𐰃",
    "bi": "𐰋𐰃",
    "bo": "𐰉𐰆",
    "bö": "𐰋𐰇",
    "bu": "𐰉𐰆",
    "bü": "𐰋𐰇",

    "da": "𐰑𐰀",
    "de": "𐰓𐰀",
    "dı": "𐰑𐰃",
    "di": "𐰓𐰃",
    "do": "𐰑𐰆",
    "dö": "𐰓𐰇",
    "du": "𐰑𐰆",
    "dü": "𐰓𐰇",

    "ga": "𐰍𐰀",
    "ge": "𐰏𐰀",
    "gı": "𐰍𐰃",
    "gi": "𐰏𐰃",
    "go": "𐰍𐰆",
    "gö": "𐰏𐰇",
    "gu": "𐰍𐰆",
    "gü": "𐰏𐰇",

    "la": "𐰞𐰀",
    "le": "𐰠𐰀",
    "lı": "𐰞𐰃",
    "li": "𐰠𐰃",
    "lo": "𐰞𐰆",
    "lö": "𐰠𐰇",
    "lu": "𐰞𐰆",
    "lü": "𐰠𐰇",

    "na": "𐰣𐰀",
    "ne": "𐰤𐰀",
    "nı": "𐰣𐰃",
    "ni": "𐰤𐰃",
    "no": "𐰣𐰆",
    "nö": "𐰤𐰇",
    "nu": "𐰣𐰆",
    "nü": "𐰤𐰇",

    "ra": "𐰺𐰀",
    "re": "𐰼𐰀",
    "rı": "𐰺𐰃",
    "ri": "𐰼𐰃",
    "ro": "𐰺𐰆",
    "rö": "𐰼𐰇",
    "ru": "𐰺𐰆",
    "rü": "𐰼𐰇",

    "sa": "𐰽𐰀",
    "se": "𐰾𐰀",
    "sı": "𐰽𐰃",
    "si": "𐰾𐰃",
    "so": "𐰽𐰆",
    "sö": "𐰾𐰇",
    "su": "𐰽𐰆",
    "sü": "𐰾𐰇",

    "ta": "𐱃𐰀",
    "te": "𐱅𐰀",
    "tı": "𐱃𐰃",
    "ti": "𐱅𐰃",
    "to": "𐱃𐰆",
    "tö": "𐱅𐰇",
    "tu": "𐱃𐰆",
    "tü": "𐱅𐰇",

    "ya": "𐰖𐰀",
    "ye": "𐰘𐰀",
    "yı": "𐰖𐰃",
    "yi": "𐰘𐰃",
    "yo": "𐰖𐰆",
    "yö": "𐰘𐰇",
    "yu": "𐰖𐰆",
    "yü": "𐰘𐰇",

    "ya": "𐰖𐰀",
    "ye": "𐰘𐰀",
    "yı": "𐰖𐰃",
    "yi": "𐰘𐰃",
    "yo": "𐰖𐰆",
    "yö": "𐰘𐰇",
    "yu": "𐰖𐰆",
    "yü": "𐰘𐰇",

    "a": "𐰀",
    "b": "𐰉",
    "c": "𐰲",
    "ç": "𐰲",
    "d": "𐰓",
    "e": "𐰀",
    "f": "𐰯",
    "g": "𐰍",
    "ğ": "𐰍",
    "h": "𐰚",
    "i": "𐰃",
    "ı": "𐰃",
    "j": "𐰖",
    "k": "𐰚",
    "l": "𐰠",
    "m": "𐰢",
    "n": "𐰣",
    "o": "𐰆",
    "ö": "𐰇",
    "p": "𐰯",
    "r": "𐰼",
    "s": "𐰾",
    "ş": "𐱁",
    "t": "𐱃",
    "u": "𐰆",
    "ü": "𐰇",
    "v": "𐰉",
    "y": "𐰖",
    "z": "𐰔",
    "da": "𐰑𐰀",
    "de": "𐰓𐰀",
    "dı": "𐰑𐰃",
    "di": "𐰓𐰃",
    "do": "𐰑𐰆",
    "dö": "𐰓𐰇",
    "du": "𐰑𐰆",
    "dü": "𐰓𐰇",
  };

  let newText = text.toLowerCase()
  console.log(newText);

  let arrayWord = newText.split(" ")


  for (let i = 0; i < arrayWord.length; i++) {
    let ok = ""
    let currentWord = arrayWord[i]

    for (let i = 0; i < currentWord.length; i++) {
      if (i !== 0 && i !== currentWord.length - 1 && currentWord[i] === "a") {
        continue
      }
      if (i !== 0 && i !== currentWord.length - 1 && currentWord[i] === "e") {
        continue
      }
      ok += currentWord[i]
      console.log(ok);
    }
    console.log(ok);
    Object.keys(replacementMap).forEach(key => {
      if (currentWord.includes(key)) {
        currentWord = currentWord.replace(new RegExp(key, 'g'), replacementMap[key]);
      }
    })
    if (i !== arrayWord.at(-1)) {
      exit = exit + " ";
    }

    exit += currentWord;

  }

  console.log(exit);

  return (
    <View style={styles.container}>


      <View style={styles.upperCase}>
        <TextInput style={styles.input} placeholder='Metin girin'
          onChangeText={(getText) => setText(getText)}
          defaulValue={text}
        />
      </View>


      <View style={styles.wolfHead}>
        <Image
          style={styles.img}
          source={require("../assets/wolfhead.png")}
        />
      </View>

      <View style={styles.lowerCase}>
        <TextInput style={styles.output} placeholder='𐰓𐰭𐰢𐰀' value={exit} />
      </View>

      

      <View style={styles.otherElementZ}>
      <Copy/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperCase: {
    width: "100%",
    height: 488,
    backgroundColor: "#6590e0",
  },
  lowerCase: {
    position: "absolute",
    width: "100%",
    height: 480,
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 320,
  },
  wolfHead: {
    zIndex: 99,
    width: 200,
    height: 100,
    position: "absolute",
  },
  img: {
    transform: [{ translateY: 230 }, { translateX: 68 }],
    top: "50%",
    left: "50%",
    width: 70,
    height: 70,
  },
  input: {
    fontSize: 25,
    marginTop: 35,
    marginLeft: 22,
  },
  output: {
    fontSize: 25,
    marginTop: 35,
    marginRight: 22,
  },
  circle:{
    top:105,
    left:20,
    borderRadius:25,
    width:50,
    height:50,
    backgroundColor:"red",
  },
  otherElementZ:{
    
  }

});


export default Home;


