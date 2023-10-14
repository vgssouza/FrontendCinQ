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

    <Text style={styles.title}>Verifique seu email</Text>
    <Text
      style={{
        textAlign: "center",
        width: "80%",
        alignSelf: "center",
      }}
    >
      Enviamos um link de redefinição de senha para o email olivia@exemplo.com
    </Text>

    
    <Text style={{ marginTop: "5%", textAlign: "center", fontSize: 15 }}>
      Não recebeu o email?{" "}
      <Link style={{ fontWeight: "bold", color: "#151D2D" }} href="/redefinaSenha/">
        Clique aqui para reenviar
      </Link>{" "}
    </Text>

    <View >
      <Link href="/login/" asChild>
        <Pressable style={styles.voltar}>
          <Image source={require("./../../assets/images/arrow-left.png")} />
          <Text style={{paddingLeft: "2%"}}>Voltar para login</Text>
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
    marginTop: "30%",
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

  voltar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    paddingTop: "5%",
  }
});
export default login;
