import React from 'react';
import {View, StyleSheet,Text,Button} from 'react-native';

const Home = ({navigation}) => {
    return (
        <View style={styles.container}> 
            <Text>Home</Text>
            <Button title="click" onPress={()=> alert("button clicked")}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"red0",
    }
})

export default Home;
