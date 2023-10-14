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

    <Text style={styles.title}>Escolha uma senha</Text>

    <View style={styles.divInput}>
      <Text style={{ marginTop: "2%", fontSize: 15, fontWeight: "bold" }}>
        Senha*
      </Text>
      <TextInput style={styles.input} placeholder="********" />
    </View>

    <View style={styles.divInput}>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
        Confirmar a senha*
      </Text>
      <TextInput style={styles.input} placeholder="Confirme a senha" />
    </View>

    <View style={styles.botaoDentro}>
      <Link href="/cadastroConcluido/" asChild>
        <Pressable>
          <Text style={{ color: "white" }}>Redefinir Senha</Text>
        </Pressable>
      </Link>
    </View>

    <View>
      <Link href="/login/" asChild>
        <Pressable style={styles.voltar}>
          <Image source={require("./../../assets/images/arrow-left.png")} />
          <Text style={{ paddingLeft: "2%" }}>Voltar para login</Text>
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
    marginTop: "20%",
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
    justifyContent: "center",
    paddingTop: "5%",
  },
});
export default login;
