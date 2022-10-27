//importer de basale pakker fra react native
import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, Image } from "react-native";


const UselessTextInput = () => {
    const [text, onChangeText] = React.useState("John doe");
    const [number, onChangeNumber] = React.useState(null);

    return (
        <SafeAreaView>
            <Image
                style={{
                    height:"45%", width: "70%", alignSelf: "center", justifyContent: "center"
                }}
                source={{
                    uri: 'https://st4.depositphotos.com/1000507/24488/v/600/depositphotos_244889634-stock-illustration-user-profile-picture-isolate-background.jpg',
                }}
            />
            <Text style={styles.title}>
                Her kan du opdatere dit navn
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
            <Text style={styles.title}>
                Her kan du opdatere dit mobil nummer
            </Text>
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