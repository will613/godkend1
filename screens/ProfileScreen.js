//importer de basale pakker fra react native
import {Pressable, StyleSheet, Text, View} from "react-native";
import * as React from "react";
import Farver from "../src/conts/farver";

//Opretter en meget simpelt komponent, der blot vises simpel tekst og har en button, som fører tilbage til home.
// Dette view er lavet til videre udvikling på appen.
const ProfileScreen =({navigation}) =>{
    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={()=> navigation.navigate("HomeScreen")}>
                <View>
                    <Text styles={styles.buttontext}> Tilbage til home</Text>
                </View>
            </Pressable>
            <Text style={styles.text}>Her vil du i fremtiden kunne redigere din profil</Text>
        </View>
    );
}

export default ProfileScreen

//styling
const styles = StyleSheet.create({
    container: {
        paddingTop:100,
        paddingBottom:100,
        borderWidth: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Farver.grey,
        height:'100%'
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        backgroundColor: Farver.blue,
    },
    text: {
        fontSize: 16,
        color: "black",
    },
    buttontext:{
        color: Farver.white,
        fontSize: 12,
    }
});