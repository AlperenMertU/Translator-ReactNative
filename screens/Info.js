import React from 'react';
import {View, StyleSheet,Text,Button} from 'react-native';

const Info = ({navigation}) => {
    return (
        <View style={styles.container}> 
            <Text>Info</Text>
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

export default Info;
