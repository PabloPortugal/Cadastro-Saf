import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import COLORS from '../const/Colors'

const Button = ({title, onPress=(() => {})}) => {
  return (
   <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={onPress}>
      <Text style={styles.texto}>{title}</Text>
      
   </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        height: 45,
        width:"80%",
        backgroundColor: "#7948A0",
        justifyContent: 'center',
        alignItems: "center",
        marginVertical: 20,
        borderWidth: .5,
        borderRadius: 10,
        borderColor: "#7948A0",
        top:90
    },
    texto:{
      color:COLORS.offWhite,
      fontSize: 20
    }
})