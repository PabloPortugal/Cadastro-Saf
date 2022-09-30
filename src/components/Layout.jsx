import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../const/Colors";

export default function Layout(props) {

    return (
        <SafeAreaView style={estilos.container}>
            <ImageBackground style={estilos.imagemFundo} source={require('../assets/Fundo.png')}>
                <View style={estilos.text}>
                    <Text style={estilos.textTitle}>Cadastro</Text>
                    {props.children}
                </View>

            </ImageBackground>
            
        </SafeAreaView>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        height: "100%",
       
    },
    imagemFundo: {
        justifyContent: "center",
        flex: 3,
        backgroundColor: 'yellow',
        alignItems: "center",
    },
    containerForm: {
        backgroundColor: COLORS.azulClaro,
        justifyContent: "flex-start",
        height: "80%",
        maxHeight: "100%",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: "5%",
        paddingEnd: "5%",
        paddingBottom: 30,
        
    },
    text: {
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
    },
    textTitle: {
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        color: COLORS.preto,
        fontWeight: "bold",
        fontSize: 25,
        top:40
    },
});
