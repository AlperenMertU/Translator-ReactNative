import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
const Output = (props) => {
    return (
        <View>
            <Text style={styles.text}>{props.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
 text:{color:"red",}
})

export default Output;
