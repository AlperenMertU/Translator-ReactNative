import React, { useRef } from 'react';
import { View, StyleSheet, Text, Button, Image, ScrollView } from 'react-native';
import CaptureImage from "../components/captureImage";
import * as MediaLibrary from 'expo-media-library';
import * as Permissions from 'expo-permissions';
import { captureRef } from 'react-native-view-shot';


const Info = ({ navigation }) => {

    return (
        <View style={styles.container}>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 120,
    },
    image1: {
        width: 240,
        height: 365,
    },
    image2: {
        width: 280,
        height: 95,
    },
    infoText: {
        paddingTop: 50,
        alignContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    h1: {
        fontSize: 25,
        fontWeight: "bold",
    },
    h2: {
        fontSize: 20,
        fontWeight: "bold",
    },
    p: {
        fontSize: 18,
    },
})

export default Info;
