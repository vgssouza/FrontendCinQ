import React, { useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text} from 'react-native';



export default function Login() {


  function handleLogin(data) {
    console.log(data);
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image 
        source={require('./assets/image/Logo.png')}
        />
      </View>
      <View style={styles.container}>

        <Text style={styles.h1}>Login</Text>
        <Text style={styles.h2}>Bem vindo(a) de volta!</Text>
        <Text style={styles.h3}>E-mail</Text>
            <TextInput style={styles.input}
              autoCorrect={false}
              placeholder="Digite sei E-mail!"
            />
        <Text style={styles.h3}>Senha</Text>
       
         
            <TextInput style={styles.input}
              autoCorrect={false}
              secureTextEntry={true}
              placeholder="Digite sua Senha!"
            />
    
      
        <TouchableOpacity style={styles.btnEntrar} onPress={handleLogin}>
          <Text style={styles.textEntrar}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnGoogle}>
          <Text style={styles.textGoogle}>Entrar com o Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCriarConta}>
          <Text style={styles.textCriarConta}>Não tem uma conta? Cadastre-se</Text>
        </TouchableOpacity>


      </View>
      <View style={styles.rodape}>

      </View>
    </KeyboardAvoidingView>

  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  containerLogo: {
    flex: 1,
    justifyContent: 'space-between',
    maxHeight: '30%',
    margin: 0,
    paddingTop: 90,
    paddingBottom: 90,
  },
  h1: {
    fontSize: 36,
    color: '#101828',
    fontWeight: '600',
    lineHeight: 44,
    paddingVertical: 6,

  },
  h2: {
    color: '#475467',
    fontSize: 16,
    lineHeight: 24,
    paddingBottom: 22,

  },
  h3: {
    lineHeight: 20,
    textAlignVertical: 'bottom',
    paddingVertical: 10,

  },
  container: {
    flex: 1,
    alignItems: 'stretchq',
    justifyContent: 'flex-start',
    width: '90%',
    marginBottom: 60,
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#D0D5DD',
    fontSize: 14,
    borderRadius: 4,
    padding: 7,
  },
  rodape: {
    flex: 1,
    maxHeight: '25%'
  },
  btnEntrar: {
    backgroundColor: '#133D63',
    width: '100%',
    padding: 10,
    marginTop: 80,
    marginBottom: 16,
    alignItems: 'center',
    borderRadius: 4,

  },
  btnGoogle: {
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#D0D5DD',
    borderRadius: 4,
  },
  btnCriarConta: {

  },
  textEntrar: {
    color: '#fff'
  },
  labelErros: {
    alignSelf:'flex-start',
    color:'#ff375b',
    marginBottom:8,
  }
})