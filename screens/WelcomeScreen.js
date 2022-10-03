// Først importeres alle de nødevendige pakker fra React os
// Derefter importeres Farver, der bare en fil, hvor jeg har predefineret nogle farver, så de nemt kan bruges til styling

import React from "react-native"
import {
    StyleSheet,
    SafeAreaView,
    Image,
    StatusBar,
    View,
    Pressable,
    Text,
} from "react-native";
import Farver from "../src/conts/farver";

//Nu oprettes komponenten WelcomeScreen, som der senere bliver ekspoteret til App.js
// I komponenten bliver der både vist et billede, tekst og button, derfor navigation i props


const WelcomeScreen =({navigation}) =>{
    return <SafeAreaView style={{flex:1,backgroundColor:Farver.white}}>
        <StatusBar translucent backgroundColor={Farver.tranparent}/>
        <Image
            source={require('../assets/welcomescreen.png')}
               style={style.image}
            />
        {/* Her viser indikatoren, hvilket billede nummer man er på.
         Der kan kun vises et billede pt, så den virker ikke,
         men er lavet til fremtidig udvikling.*/}
        <View style={style.indicatorContainer}>
            <View style={style.indicator}/>
            <View style={style.indicator}/>
            <View style={[style.indicator, style.indicatorActive]}/>
        </View>
        <View style={{paddingHorizontal: 20, paddingTop: 20}}>
            {/* tittel indsættes her */}
            <View>
                <Text style={style.title}>Find din drømme andelsbolig</Text>
            </View>

            {/* tekst indsættes her*/}
            <View style={{marginTop: 10}}>
            <Text style={style.textStyle}>
                Find boligen ved bare et par klik
            </Text>
        </View>
        </View>
        {/* Her er knappen der fører videre til hjemmeskærmen */}
        <View style={{flex:1, justifyContent: 'flex-end', paddingBottom: 40}}>
            <Pressable onPress={()=> navigation.navigate("HomeScreen")}>
            <View style={style.Button}>
                <Text style={{color: Farver.white}}> Kom i gang</Text>
            </View>
        </Pressable>
        </View>
    </SafeAreaView>
}


const style = StyleSheet.create({
    image: {
        height: 420,
        width: '100%'
    },
    indicatorContainer: {
        height: 20,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center'
    },
    indicator: {
        height: 3,
        width: 30,
        backgroundColor: Farver.grey,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    indicatorActive: {
        backgroundColor: Farver.dark,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold"
    },
    textStyle: {fontSize: 16, color: Farver.grey
    },
    Button:{
    height: 60,
        marginHorizontal: 20,
        backgroundColor: Farver.dark,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
     },
    });
export default WelcomeScreen
