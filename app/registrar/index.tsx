import React from "react";
import {
  ImageBackground,
  Button,
  StyleSheet,
  Image,
  View,
  Text,
} from "react-native";
import {Link} from 'expo-router'
import { TextInput } from "react-native-gesture-handler";

const login = () => (
  <View>
   
   <Image 
   style={styles.logoSize}
   source={require("./../../assets/images/logoColorida.png")} />
   
   <Text
   style={styles.title}
   >Cadastre-se</Text>
  
  <View style={styles.divInput}>
  <Text style={{marginTop: "2%", fontSize: 15, fontWeight: "bold"}}>Nome*</Text>
   <TextInput
        style={styles.input}
        placeholder="Insira seu nome"
      />
  </View>

  <View style={styles.divInput}>
  <Text style={{fontSize: 15, fontWeight: "bold"}}>Email*</Text>
       <TextInput
        style={styles.input}
        placeholder="Insira seu email"
      />
  </View>

<View style={{
  margin: "2%",
  width: "90%",
  flex: 1,
  alignSelf: "center",
  }}>
  <Button 
          title="Continuar" 
          color="#151D2D"
          />
   </View>
   
   <View style={{
  margin: "2%",
  width: "90%",

  alignSelf: "center",
  }}>
   <Button 
          title="Cadastrar com o google" 
          color="red"
          />
    </View>
    <Text style={{marginTop:"5%", textAlign:"center", fontSize: 15}}>Já possui uma conta? <Link style={{fontWeight:"bold", color:"#151D2D"}} href="/login/">Faça o login</Link> </Text>
    
  </View>
);


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
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
  
  }
});
export default login;
