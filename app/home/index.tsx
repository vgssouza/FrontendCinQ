import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
} from "react-native";
import { Link } from "expo-router";
import {BsPersonCircle} from "react-icons/bs";
import {IoFunnelOutline} from "react-icons/io5"
import {BsFileEarmarkPdfFill} from "react-icons/bs"
export default function home() {
  return (
    <>
    <View>
      <View style={styles.header}>
      <BsPersonCircle color="white" fontSize={40} opacity={0}/>
        <Text style={{ color: "white", fontSize: 23, }}>Minha vida</Text>
        <BsPersonCircle color="white" fontSize={40}/>
      </View>

      <View style={styles.navbar}>
        <View style={styles.navButton}>
        <IoFunnelOutline  color="white" fontSize={25}/>
        <Text style={{ color: "white", fontSize: 23, }}>Mês Atual</Text>
        </View>

        <View style={styles.navButton}>
        <BsFileEarmarkPdfFill  color="white" fontSize={25}/>
        <Text style={{ color: "white", fontSize: 23, }}>Gerar Relatório</Text>
        </View>
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
    justifyContent: "space-around",
    flexDirection: "row",
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
  
  navButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    justifyContent: "space-around",
  },
  
});
