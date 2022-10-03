import 'react-native-gesture-handler';
import React from "react-native";
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import WelcomeScreen from "./screens/WelcomeScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen"
//import Ionicons from "react-native-vector-icons/Ionicons";



 const App = () => {
     const Stack = createStackNavigator ()
        return (
            <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen}/>
                <Stack.Screen name="HomeScreen" component={HomeScreen}/>
                <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>

            </Stack.Navigator>
            </NavigationContainer>
        );
};

 export default App





