import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react'
import * as SecureStore from 'expo-secure-store'
import NewProjForm from './NewProjForm.js';

export default function Counter() {

    const [total, setTotal] = useState(0)

    useEffect(() => {
        async function values() {
            try {
                const result = await SecureStore.getItemAsync("Count");
                // console.log(result)
                if (isNaN(result)) {
                    console.log(result)
                    setTotal(0)
                }

                else {
                    setTotal(parseInt(result))
                }

            }
            catch (err) {
                console.log("Err", err)
            }

        }
        values()
    }, [])


    useEffect(() => {
        async function store() {
            try {

                await SecureStore.setItemAsync("Count", String(total))

                // Congrats! You've just stored your first value!
            } catch (error) {
                // There was an error on the native side
                console.log("Err", error)
            }
        }
        store()
    })

    // setTotal(getSession())
    const changeTotal = (operation) => {
        if (operation == "+") {
            setTimeout(() => setTotal(total => total + 1), 10);
        }
        else {
            setTimeout(() => setTotal(total => total - 1), 10);
        }


    }

    return (
        <View style={styles.container}>
            <Text style={styles.Text} >Knit Counter!</Text>
            <View style={styles.counterLabel}>
                <View style={styles.item}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => changeTotal("+")}>
                        <Text>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.item}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => changeTotal("-")}
                    >
                        <Text>-</Text>
                    </TouchableOpacity>
                </View>
                {/* <View style={styles.item}>
                    <Button title="+" onPress={() => changeTotal("+")} />
                </View>

                <View style={styles.item}>
                    <Button title="-" onPress={() => changeTotal("-")} />
                </View> */}

            </View>


            <Text style={styles.Text}>{total}</Text>


            {/* <Button title="Save" onPress={() => storeUserSession(total)}></Button> */}
            {/* <Button title="Load" onPress={() => getSession()}></Button> */}

        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
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
        fontSize: 50,
    },
    button: {
        alignItems: "center",
        backgroundColor: '#3190db',
        padding: 10,
        height: 50,
        width: 50,
        justifyContent: "center",
        borderRadius: 10

    }


});


// async function storeUserSession(total) {
//     try {

//         await SecureStore.setItemAsync("Count", String(total))

//         // Congrats! You've just stored your first value!
//     } catch (error) {
//         // There was an error on the native side
//         console.log(error)
//     }

// }

// async function getSession() {
//     try {
//         let result = await SecureStore.getItemAsync("Count");
//         console.log("result", result)

//         return parseInt(result)



//     }
//     catch (error) {
//         console.log(error)
//     }

// }