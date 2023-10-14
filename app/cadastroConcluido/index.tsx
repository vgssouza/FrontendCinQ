import React from "react";
import {
  ImageBackground,
  Button,
  StyleSheet,
  Image,
  View,
  Text,
  Pressable,
} from "react-native";
import { Link } from "expo-router";
import { TextInput } from "react-native-gesture-handler";

const login = () => (
  <View>
    <Image
      style={styles.logoSize}
      source={require("./../../assets/images/logoColorida.png")}
    />

    <Image
      style={{ alignSelf: "center", marginTop: "30%" }}
      source={require("./../../assets/images/sucess.png")}
    />

    <Text style={styles.title}>Cadastro concluído</Text>
    <Text
      style={{
        textAlign: "center",
        width: "80%",
        alignSelf: "center",
      }}
    >
      Seu cadastro foi criado com sucesso. Clique no botão abaixo para fazer o
      login.
    </Text>

    <View style={styles.botaoDentro}>
      <Link href="/login/" asChild>
        <Pressable>
          <Text style={{ color: "white" }}>Login</Text>
        </Pressable>
      </Link>
    </View>
  </View>
);

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },

  logoSize: {
    width: 252,
    height: 94,
    alignSelf: "center",
    shadowColor: "black",
    marginTop: "20%",
    opacity: 1,
  },

  title: {
    flex: 1,
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: "5%",
  },

  divInput: {
    padding: "2%",
  },

  botaoDentro: {
    marginTop: "5%",
    width: "92.5%",
    flex: 1,
    padding: "3%",
    alignSelf: "center",
    backgroundColor: "#151D2D",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
});
export default login;
