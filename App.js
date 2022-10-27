import 'react-native-gesture-handler';
import React from "react-native";
import {NavigationContainer} from '@react-navigation/native'
//import {createStackNavigator} from '@react-navigation/stack'
import WelcomeScreen from "./screens/WelcomeScreen";
import HomeScreen from "./screens/HomeScreen"
import ProfileScreen from "./screens/ProfileScreen"
import {createDrawerNavigator} from "@react-navigation/drawer";
import Ionicons from 'react-native-vector-icons/Ionicons';
const Drawer = createDrawerNavigator ()



function App () {
        return (
            <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="WelcomeScreen" component={WelcomeScreen} options={{
                    drawerIcon:({color}) => (<Ionicons name="tv-outline" size={22} color={color} />),}}
                />
                <Drawer.Screen name="HomeScreen" component={HomeScreen} options={{
                        drawerIcon: ({color}) => (<Ionicons name="home-outline" size={22} color={color} />),}}/>
                <Drawer.Screen name="Profile" component={ProfileScreen}
                    options={{drawerIcon: ({color}) => (<Ionicons name="person-outline" size={22} color={color} />),}}
                />
            </Drawer.Navigator>
            </NavigationContainer>
        );
};

 export default App





