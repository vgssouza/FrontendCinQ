import React from "react";
import {
  ImageBackground,
  Button,
  StyleSheet,
  Image,
  View,
  Text,
} from "react-native";
import { Link } from "expo-router";

const login = () => (
  <View>
    <Text>Bem vindo a tela de Home</Text>
    <Link href="/">Voltar</Link>
  </View>
);

export default login;
