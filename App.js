import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react'
import Counter from './src/Counter.js';
import NewProjForm from './src/NewProjForm.js';
import Home from './src/Home.js';
import UsersProjects from './src/UsersProjects.js';

// import EncryptedStorage from 'react-native-encrypted-storage/lib/typescript/EncryptedStorage.js';
const AppNavigator = createStackNavigator({
  // Define your screens here
  Home: { screen: Home },
  Counter: { screen: Counter },
  Add: { screen: NewProjForm },
  Display: { screen: UsersProjects }
});
export default createAppContainer(AppNavigator);
// export default function App() {

//   // async function storeUserSession(total) {
//   //   try {
//   //     await EncryptedStorage.setItem(
//   //       "user_session",
//   //       JSON.stringify({
//   //         count: total
//   //       })
//   //     );

//   //     // Congrats! You've just stored your first value!
//   //   } catch (error) {
//   //     // There was an error on the native side
//   //   }
//   // }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.Text} >Knit Counter!</Text>
//       <StatusBar style="auto" />
//       <Counter />
//       {/* <NewProjForm /> */}
//     </View>
//   );
// }



const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',


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

