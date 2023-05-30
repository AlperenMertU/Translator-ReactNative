import React from 'react';
import {View, StyleSheet,Text,Button} from 'react-native';

const Help = ({navigation}) => {
    return (
        <View style={styles.container}> 
            <Text>Help</Text>
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

export default Help;
