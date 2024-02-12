// HomeScreen.js
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.Text} >Welcomeeee 🧶</Text>
                <View style={styles.viewbutton}>
                    <Button
                        title="Counter"
                        onPress={() => this.props.navigation.navigate('Counter')}
                    />
                    <Button
                        title="Add Project"
                        onPress={() => this.props.navigation.navigate('Add')}
                    />
                    <Button
                        title="My Projects"
                        onPress={() => this.props.navigation.navigate('Display')}
                    />

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: null,
        width: null


    },
    viewbutton: {
        flexDirection: 'column',
        padding: 10
    },
    count: {
        flex: 0.5,
        flexDirection: "row",
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Text: {
        fontSize: 25,
    },
});