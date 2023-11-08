import React, { useState } from 'react';
import { Image, View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { Link } from "expo-router";
import Checkbox from 'expo-checkbox';


export default function Login() {
  const [isChecked, setChecked] = useState(false);

  return (
    <View>
      <Image
        style={styles.logoSize}
        source={require("./../../assets/images/logoColorida.png")}
      />

      <Text style={styles.title}>Log in</Text>
      <Text style={{ marginLeft: "5%", marginTop: "2%" }}>Bem vindo(a) De volta!</Text>
      <View style={styles.divInput}>
        <Text style={{ marginTop: "2%", fontSize: 15, fontWeight: "bold" }}>
          E-mail*
        </Text>
        <TextInput style={styles.input} placeholder="E-mail" />
      </View>

      <View style={styles.divInput}>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>Senha*</Text>
        <TextInput style={styles.input} placeholder="*******" />
      </View>

      <View style={styles.checkbox}>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#151D2D' : undefined}
        />
        <Text style={{
          paddingLeft: "2%",
        }}
        
        >Lembrar de mim</Text>
        <Link href="/esqueciSenha/" asChild>
        <Text style={{
          color: "#1E1E1E",
          paddingLeft: "35%",
          textDecorationLine: "underline"
        }}
        
        >Esqueci a senha</Text>
        </Link>
      </View>

     

      <View style={styles.botaoDentro}>
      <Link href="/home/" asChild>
          <Pressable onPress={validarLogin}>
            <Text style={{ color: "white" }}>ENTRAR</Text>
          </Pressable>
        </Link>
      </View>

      <View
        style={{
          marginTop: "5%",
          flex: 1,
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <Link href="/home/" asChild>
          <Pressable>
            <Image source={require("./../../assets/images/GoogleEntrar.png")} />
          </Pressable>
        </Link>
      </View>

      <Text style={{ marginTop: "5%", textAlign: "center", fontSize: 15 }}>
      Não tem uma conta?{" "}
      <Link style={{ fontWeight: "bold", color: "#151D2D" }} href="/registrar/">
        Cadastre-se
      </Link>{" "}
    </Text>
  </View>
  );
}

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
    paddingLeft: "5%",
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
    padding: "1.2%",
    alignSelf: "center",
    backgroundColor: "#151D2D",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },

  checkbox: {
    marginLeft: "5%",
    flexDirection: "row",
  }
});
