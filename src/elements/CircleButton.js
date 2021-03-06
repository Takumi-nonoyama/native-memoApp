import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  circleButton: {
    position: "absolute",
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  circleButtonTitle: {
    fontSize: 32,
    lineHeight: 32,
  },
})

const CircleButton = (props) => {
  let bgColor = "#E31676"
  let textColor = "#fff"

  if(props.color === "white"){
    bgColor = "#fff"
    textColor = "#E31676"
  }

  return (
    <View style={[styles.circleButton, props.style, {backgroundColor: bgColor}]} >
        <Text style={[styles.circleButtonTitle, {color: textColor}]}>{props.children}</Text>
    </View>
  )
}

export default CircleButton;