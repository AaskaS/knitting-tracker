import {
    Text,
    View,
    StyleSheet,
    Button,
    Alert,
    ScrollView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
// import * as SecureStore from 'expo-secure-store'
import AsyncStorage from '@react-native-async-storage/async-storage';
import TextInput from './TextInput';


export default function NewProjForm() {
    // const [key, onChangeKey] = useState("")
    const [pattern, setPattern] = useState('')
    const [name, setName] = useState("")

    // async function savePattern(key, value) {
    //     console.log(key, pattern)
    //     await SecureStore.setItemAsync(key, JSON.stringify({ name: key, proj: value }));
    // }

    async function savePattern(key, value) {
        try {
            keys = await AsyncStorage.getAllKeys()
            // console.log(keys.includes(key))

            if (keys.includes(key)) {
                Alert.alert("Error", "The name you entered (" + name + "), already exists. Please choose a different name or delete the entry of the same name")
            }
            else {
                await AsyncStorage.setItem(key, value);
                Alert.alert("Submitted", "You've entered " + name + " and " + pattern)

                setPattern('')
                setName("")
            }



        }
        catch (e) {
            console.log(e)
        }

    }



    // https://reactnative.dev/docs/textinput#keyboardtype
    // https://reactnative.dev/docs/textinput#autocompletetype
    return (
        <View style={styles.container}>
            {/* <Text style={styles.Text} >Add a Project</Text> */}
            <Text style={styles.Text}>Name</Text>
            <TextInput
                icon="text"
                placeholder="Enter the name of your project"
                autoCapitalize="none"
                autoCompleteType="name"
                keyboardType="default"
                keyboardAppearance="dark"
                returnKeyType="next"
                returnKeyLabel="next"
                value={name}
                onChangeText={(name) => setName(name)}
            />
            {/* <Text>{name}</Text> */}

            <Text style={styles.Text}>Pattern</Text>
            <TextInput
                icon="text"
                placeholder="Enter a link to your pattern"
                autoCapitalize="none"
                autoCompleteType="off"
                keyboardType="url"
                keyboardAppearance="dark"
                returnKeyType="done"
                returnKeyLabel="done"
                value={pattern}
                onChangeText={(pattern) => setPattern(pattern)}
            />
            {/* <Text>{pattern}</Text> */}

            <Button
                title="Submit"
                onPress={() => {
                    savePattern(name, pattern);
                    // key = jsjs, value = ansjs to attempt retrieval
                }}
            />
            {/* <Button title="Save" onPress={() => storeUserSession(total)}></Button> */}
            {/* <Button title="Load" onPress={() => getSession()}></Button> */}
            {/* <Text style={styles.Text}>{item}</Text> */}
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    counterLabel: {
        flexDirection: "row",
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'

    },

    item: {
        padding: 10,
        // backgroundColor: '#fff',
        alignItems: 'center',
        width: 100
    },
    Text: {
        fontSize: 30,
    },
    button: {
        alignItems: "center",
        // backgroundColor: '#3190db',
        padding: 10,
        height: 50,
        width: 50,
        justifyContent: "center",
        borderRadius: 10

    }


});

