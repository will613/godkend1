//importer de basale pakker fra react native
import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, Image } from "react-native";


const UselessTextInput = () => {
    const [text, onChangeText] = React.useState("John doe");
    const [number, onChangeNumber] = React.useState(null);

    return (
        <SafeAreaView>
            {/* Her indsættes et standard billede,
            som oftes bruges på sociale medier når personen
            gerne vil have et anonymt profil billede
            */}
            <Image
                style={{
                    height:"45%", width: "70%", alignSelf: "center", justifyContent: "center"
                }}
                source={{
                    uri: 'https://st4.depositphotos.com/1000507/24488/v/600/depositphotos_244889634-stock-illustration-user-profile-picture-isolate-background.jpg',
                }}
            />
            {/* I fremtiden vil man her kunne opdatere sine brugers oplysninger
            Lige nu virker funktionaliteten i præcist ikke,
            da man ikke kan logge/oprette brugere på appen endnu
            */}
            <Text style={styles.title}>
                Her kan du opdatere dit navn
            </Text>
            {/* Laver en simple onchangetext, så man kan forestille sig,
            hvordan ville se ud med den rigtige funktionalitet
            */}
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
            <Text style={styles.title}>
                Her kan du opdatere dit mobil nummer
            </Text>
            {/* Igen en onchangetext, bare med tal denne gang.
            Her skal man i fremtiden kunne opdatere sit nummer knyttet på kontoen
            */}
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                keyboardType="numeric"
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 50,
        margin: 12,
        borderWidth: 2,
        padding: 8,
        marginHorizontal: 10,
    },
    title: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "18",
        margin: 3,
    }
});

export default UselessTextInput;