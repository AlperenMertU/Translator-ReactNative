import { StyleSheet, Text, View, TextInput, Image, } from 'react-native';
import Input from './components/Input';


export default function App() {
  return (
    <View style={styles.container}>


      <View style={styles.upperCase}>
        <TextInput style={styles.input} placeholder='Metin girin'/>
      </View>



      <View style={styles.wolfHead}>
        <Image
          style={styles.img}
          source={require('./assets/wolfhead.png')}
        />
      </View>

      <View style={styles.lowerCase}>
      <TextInput style={styles.output} placeholder='𐰓𐰭𐰢𐰀'/>
      </View>

      <View style={styles.otherElementZ}>
         
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
  input:{
    fontSize:25,
    marginTop:35,
    marginLeft:22,
  },
  output:{
    fontSize:25,
    marginTop:35,
    marginRight:22,
  }

});
