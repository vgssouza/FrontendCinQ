import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  Pressable,
} from "react-native";
import { Link } from "expo-router";
import {BsPersonCircle} from "react-icons/bs";
import {IoFunnelOutline} from "react-icons/io5"
import {BsFileEarmarkPdfFill} from "react-icons/bs"
import PieChart from "react-native-pie-chart";
export default function home() {

  const widthAndHeight = 250
    const series = [50, 30, 20]
    const sliceColor = ['#053B50','#176B87','#64CCC5']

  return (
    <>
    <View>
      <View style={styles.header}>
      <BsPersonCircle color="white" fontSize={30} opacity={0}/>
        <Text style={{ color: "white", fontSize: 20, }}>Minha vida</Text>
        <Link href="/perfil/" asChild>
            <Pressable>
            <BsPersonCircle color="white" fontSize={40}/>
            </Pressable>
          </Link>
      </View>

      <View style={styles.navbar}>
        <View style={styles.navButton}>
        <IoFunnelOutline  color="white" fontSize={20}/>
        <Text style={{ color: "white", fontSize: 20, }}>Mês Atual</Text>
        </View>

        <View style={styles.navButton}>
        <BsFileEarmarkPdfFill  color="white" fontSize={20}/>
        <Text style={{ color: "white", fontSize: 20, }}>Gerar Relatório</Text>
        </View>
      </View>

      <PieChart
            style={styles.grafico}
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
          />
      

      <View style={styles.tabela}>

      </View>

      <View style={styles.entradaSaida}>
        <Text style={{ color: "white", fontSize: 15, fontWeight: "bold"}}>Entrada x Saída</Text>
        
        <View style={styles.valores}>
        <Text style={{ color: "red", fontSize: 15, fontWeight: "bold"}}>R$ 0.0</Text>
        <Text style={{ color: "green", fontSize: 15, fontWeight: "bold"}}>R$ 0.0</Text>
        <Text style={{ color: "yellow", fontSize: 15, fontWeight: "bold"}}>R$ 0.0</Text>
        </View>

        <View style={styles.valores}>
        <Text style={{color: "white", fontSize: 15}}>Entrada</Text>
        <Text style={{color: "white", fontSize: 15}}>Saídas</Text>
        <Text style={{color: "white", fontSize: 15}}>Saldo</Text>
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
    flex: 1,
    alignSelf: "center",
    margin: 20,
  },

  entradaSaida: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#133D63",
    borderRadius: 30,
    width: "90%",
    padding: 15,
  },
  
  navButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    justifyContent: "space-around",
  },
  
  valores: {
    flexDirection: "row",
    gap: 50,
    marginTop: "5%",
  },

  tabela: {

  },
});
