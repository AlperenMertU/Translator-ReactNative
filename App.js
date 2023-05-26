import { StyleSheet, Text, View } from 'react-native';
import Output from './components/Output';
import Input from './components/Input';


export default function App() {
  return (
    <View style={styles.container}>
     <Input/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
