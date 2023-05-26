import React, { useState } from 'react';
import {View, StyleSheet} from 'react-native';
import Output from './Output';

const Input = () => {
     const [name, setName] = useState("Sagopa Kajmer");
    return (
        <View>
            <Output name={name}/>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Input;
