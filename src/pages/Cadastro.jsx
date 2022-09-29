import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Layout from "../components/Layout";
import COLORS from "../const/Colors";
import Input from "../components/Input";
import Button from "../components/Button";

const Cadastro = () => {
    return (
        <Layout>
            <View style={estilos.viewForm}>
                <Input placeholder="Nome paciente *" iconName="account"/>
                <Input placeholder="Telefone paciente *" iconName="phone"/>
                <Input placeholder="Celular paciente *" iconName="cellphone" />
                <Input placeholder="E-mail paciente *" iconName="email" />
                <Input placeholder="Nome responsável" iconName="account-multiple" />
                <Input placeholder="Telefone responsável" iconName="phone-plus" />
                <View style={estilos.botoes}>
                    <Button title="Registrar-se" />
                </View>
                <Text style={estilos.login}>Já tem uma conta?Login</Text>
            </View>
        </Layout>
    );
};
const estilos = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewForm: {
        flex: 1,
    },
    imagemFundo: {
        justifyContent: "flex-end",
        flex: 3,
    },
    containerForm: {
        backgroundColor: "#FFF",
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: "5%",
        paddingEnd: "5%",
    },
    botoes: {
        flexDirection: "row",
    },
    login:{
        alignItems:"center",
        textAlign: "center",
        fontSize: 16,
        color: COLORS.offWhite
    }
});

export default Cadastro;
