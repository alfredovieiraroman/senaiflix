import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import logoImg from "../../assets/logo.png";
import Style from "./style";

export default function testesoft ({ navigation }) {
  return (
    <View style={Style.container}>
      <View style={Style.header}>
        <View style={Style.header}>
          <Image source={logoImg} />
        </View>
        <Text style={Style.title}>Teste de Software </Text>
      </View>
    </View>
  );
}
