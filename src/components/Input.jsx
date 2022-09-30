import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import COLORS from '../const/Colors';

// Função que representa um componente
const Input = ({label, iconName, error, onFocus = () => {}, ...props}) => {
  return (
    <View style={estilos.formContainer}>
      <Text style={estilos.inputLabel}>{label}</Text>

        {/* Quando adicionamos [] podemos colocar mais de uma classe */}
      <View style={[estilos.inputContainer , {borderColor: error ? COLORS.offWhite : COLORS.azulPrincipal}]}>
        <Icon name={iconName} style={estilos.icon}/>
        <TextInput
          style={estilos.TextInput}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
          }}
          {...props}
        />
      </View>

      <Text>{error}</Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  formContainer: {
    marginBottom:-30 ,
    top:80
    
  },
  inputLabel: {
    marginVertical:5,
    fontSize: 15,
    color: COLORS.gray,

  },
  inputContainer: {
    height: 40,
    backgroundColor: "white",
    flexDirection: 'row',
    borderWidth: 1,
    paddingHorizontal: 15,
    alignItems: 'center',
    borderRadius: 20
  },
  TextInput: {
    flex: 1,
    color: COLORS.offWhite,
    
  },
  icon: {
    marginRight: 10,
    fontSize: 22,
  }
});

export default Input;