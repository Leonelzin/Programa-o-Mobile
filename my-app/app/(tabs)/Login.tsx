import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Platform } from 'react-native';
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk-next';
import Icon from 'react-native-vector-icons/FontAwesome5';

let Biometrics: any = null;

if (Platform.OS === 'android') {
  Biometrics = require('react-native-fingerprint-scanner');
} else if (Platform.OS === 'ios') {
  Biometrics = require('react-native-touch-id');
}

export default function TabTwoScreen() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [biometryType, setBiometryType] = useState<string>('');

  useEffect(() => {
    checkBiometryType();
  }, []);

  const checkBiometryType = async () => {
    try {
      const biometryType = await Biometrics.isSupported();
      setBiometryType(biometryType);
    } catch (error) {
      console.error('Erro ao verificar biometria:', error);
    }
  };

  const handleLogin = () => {
    // Implemente a lógica de autenticação aqui
    // Você pode usar o valor de 'username' e 'password' para autenticar o usuário
  };

  const handleBiometricLogin = async () => {
    try {
      const result = await Biometrics.authenticate();

      if (result) {
        console.log('Autenticação biométrica bem-sucedida');
        // Implemente a lógica para autenticar o usuário aqui.
      } else {
        console.log('Autenticação biométrica falhou ou foi cancelada');
      }
    } catch (error) {
      console.error('Erro na autenticação biométrica:', error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
      
      if (result.isCancelled) {
        console.log('Login do Facebook cancelado');
      } else {
        const data = await AccessToken.getCurrentAccessToken();
        if (data) {
          const accessToken = data.accessToken.toString();
          console.log('Token de acesso do Facebook:', accessToken);
        }
      }
    } catch (error) {
      console.error('Erro no login do Facebook:', error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      console.log('Login com o Google');
    } catch (error) {
      console.error('Erro no login com o Google:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleFacebookLogin} style={styles.socialLoginContainer}>
        <View style={styles.socialButton}>
          <Icon name="facebook" size={24} color="#1877f2" style={styles.socialIcon} />
          <Text style={styles.socialLoginText}>Login com Facebook</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGoogleLogin} style={styles.socialLoginContainer}>
        <View style={styles.socialButton}>
          <Icon name="google" size={24} color="#FF0000" style={styles.socialIcon} />
          <Text style={styles.socialLoginText}>Login com Google</Text>
        </View>
      </TouchableOpacity>
      {biometryType === 'FaceID' && (
        <TouchableOpacity onPress={handleBiometricLogin} style={styles.socialLoginContainer}>
          <View style={styles.socialButton}>
            <Icon name="face" size={24} color="#007bff" style={styles.socialIcon} />
            <Text style={styles.socialLoginText}>Login com Face ID</Text>
          </View>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={handleBiometricLogin} style={styles.socialLoginContainer}>
        <View style={styles.socialButton}>
          <Icon name="camera" size={24} color="#007bff" style={styles.socialIcon} />
          <Text style={styles.socialLoginText}>Login com a Face</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Não tem uma conta?</Text>
        <TouchableOpacity>
          <Text style={styles.signUpLink}>Cadastre-se agora</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  loginButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  socialLoginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 5,
  },
  socialIcon: {
    marginRight: 10,
  },
  socialLoginText: {
    color: '#333',
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 10,
    color: '#007bff',
    fontWeight: 'bold',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  signUpText: {
    color: '#333',
  },
  signUpLink: {
    color: '#007bff',
    marginLeft: 5,
    fontWeight: 'bold',
  },
});
