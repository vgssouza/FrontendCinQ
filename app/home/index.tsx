import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
} from "react-native";
import { Link } from "expo-router";

export default function home() {
  return (
    <>
      <View style={styles.header}>
        <Text style={{ color: "white" }}>Minha vida</Text>
      </View>

      <View style={styles.navbar}>
        <Text style={{ color: "white" }}>Mês Atual</Text>
        <Text style={{ color: "white" }}>Gerar Relatório</Text>
      </View>

      <View>
        <Image
          style={styles.grafico}
          source={require("./../../assets/images/grafico.png")}
        />
      </View>

      <View style={styles.entradaSaida}>
        <Text style={{ color: "white", fontWeight: 600, marginTop: 10 }}>
          Entradas X Saídas
        </Text>

        <View style={{ flexDirection: "row", marginTop: 40, gap: 50 }}>
          <Text style={{ color: "green", fontSize: 15, fontWeight: 600 }}>
            R$ 000
          </Text>
          <Text style={{ color: "red", fontSize: 15, fontWeight: 600 }}>
            R$ 000
          </Text>
          <Text style={{ color: "purple", fontSize: 15, fontWeight: 600 }}>
            R$ 000
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            gap: 60,
            marginBottom: 10,
          }}
        >
          <Text style={{ color: "white" }}>Entrada</Text>
          <Text style={{ color: "white" }}>Saída</Text>
          <Text style={{ color: "white" }}>Saldo</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    backgroundColor: "#133D63",
    padding: 15,
    paddingTop: 60,
  },

  navbar: {
    backgroundColor: "#005452",
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  grafico: {
    marginTop: 20,
  },

  entradaSaida: {
    alignItems: "center",
    backgroundColor: "#133D63",
    justifyContent: "center",
    borderRadius: 10,
    width: "90%",
    margin: 18,
  },
  
  
});
