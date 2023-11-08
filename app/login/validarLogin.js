import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';


export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isChecked, setChecked] = useState(false);

  // Função para validar o login
  const validarLogin = () => {
    const usuarios = [
      {
        login: 'victor',
        senha: 'victor'
      },
      {
        login: 'admin',
        senha: 'admin'
      }
    ];

    let validaLogin = false;

    for (let i in usuarios) {
      if (email === usuarios[i].login && senha === usuarios[i].senha) {
        validaLogin = true;
        break;
      }
    }

    if (validaLogin==true) {
      alert('Login bem-sucedido! Redirecionando para a página inicial.');
     location.href = '/home'
    } else {
      alert('Usuário ou senha incorretos');
    }
  }

  return (
    <View>
      {/* ... restante do seu código */}
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="*******"
        secureTextEntry={true}
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />
      <Pressable onPress={validarLogin}>
        <Text style={{ color: "white" }}>ENTRAR</Text>
      </Pressable>
      {/* ... restante do seu código */}
    </View>
  );
}
