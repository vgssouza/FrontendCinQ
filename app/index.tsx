import React from "react";
import {
  ImageBackground,
  Button,
  StyleSheet,
  Image,
  View,
  Pressable,
  Text,
} from "react-native";
import {Link} from 'expo-router'

const App = () => (
  <View style={styles.container}>
    <ImageBackground
      source={require("./../assets/images/backgroundPreto.png")}
      resizeMode="cover"
    >
      
      <Image style={styles.logoSize} source={require("./../assets/images/logoBranca.png")} />
    
    <View style={styles.botao}>
      <View style={styles.botaoDentro}>
   <Link href="/login/" asChild>
      <Pressable>
        <Text style={{color:"white"}}>LOGIN</Text>
      </Pressable>
    </Link>
    </View>

    <View style={styles.botaoDentro}>
   <Link href="/registrar/" asChild>
      <Pressable>
      <Text style={{padding: 20, color:"white"}}>REGISTRAR</Text>
      </Pressable>
    </Link>
    </View>
    </View>
      
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },


  botao: {
    flex: 1,
    alignSelf: "center",
    width: "80%",
  },

  botaoDentro: {
    marginTop: "30%",
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

  logoSize: {
    width: 259,
    height: 94,
    alignSelf: "center",
    shadowColor: "black",
    marginTop: "50%",
    opacity: 1,
  },
});

export default App;
