import {
    Text,
    View,
    StyleSheet,
    Button,
    Alert,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import React, { useState, useEffect } from 'react'
import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TextInput from './TextInput';


export default function UsersProjects() {

    const [items, setItem] = useState([])

    // useEffect(() => {
    async function values() {
        let keys = []
        let values
        try {
            // const result = await AsyncStorage.getItem("aaska");
            // console.log(result)
            // setItem(result)
            keys = await AsyncStorage.getAllKeys()
            values = await AsyncStorage.multiGet(keys)
            // console.log(values)
            setItem(values)
        }
        catch (err) {
            console.log("Err", err)
        }

    }
    values()
    // }, [])

    async function deleteProj(key) {
        try {
            await AsyncStorage.removeItem(key)

        }
        catch (e) {
            console.log(e)
        }

    }
    // https://reactnative.dev/docs/textinput#keyboardtype
    // https://reactnative.dev/docs/textinput#autocompletetype
    // items.map(key =>
    return (
        <ScrollView>
            {items.map(([proj, pattern]) => (

                <View style={styles.container} key={proj}>
                    <Text style={styles.Text} >{proj}</Text>
                    <Text style={styles.patternlabel}>{pattern}</Text>

                    <Button
                        color="#ff5c5c"
                        title="Delete"
                        onPress={() => {
                            deleteProj(proj);
                        }}
                    />
                </View>




            ))}

            {/* <Text style={styles.Text} >Add a Project</Text> */}
            {/* <Text style={styles.Text}>Name</Text>
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
            <Text>{name}</Text>

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
            <Text>{pattern}</Text>

            <Button
                title="Save this key/value pair"
                onPress={() => {
                    savePattern(name, pattern);
                    // key = jsjs, value = ansjs to attempt retrieval
                }}
            /> */}
            {/* <Button title="Save" onPress={() => storeUserSession(total)}></Button> */}
            {/* <Button title="Load" onPress={() => getSession()}></Button> */}


        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        // backgroundColor: '#fff',
        alignItems: 'flex-start',
        margin: 20,
        justifyContent: 'flex-start',
        borderRadius: 8,
        borderColor: '#000',
        borderWidth: StyleSheet.hairlineWidth,
        padding: 8,
        overflow: 'scroll'



    },
    patternlabel: {
        flexDirection: "row",
        // backgroundColor: '#fff',
        fontSize: 15,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        overflow: 'scroll'

    },

    item: {
        padding: 10,
        // backgroundColor: '#fff',
        alignItems: 'center',
        width: 100
    },
    Text: {
        fontSize: 30,
        overflow: 'scroll'
    },
    buttonDelete: {
        alignItems: "right",
        backgroundColor: '#c60101'

    },
    button: {
        alignItems: 'right',
        backgroundColor: '#c60101',
        padding: 10
    }


});

