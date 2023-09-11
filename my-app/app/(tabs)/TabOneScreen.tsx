import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';
import { createStackNavigator, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from './Home';
import { RNCamera } from 'react-native-camera';

export default function TabOneScreen() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const cameraRef = useRef<RNCamera | null>(null);

  const navigation = useNavigation();

  const navigateToCadastro = () => {
    navigation.navigate('TabTwoScreen');
  };

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  const openCamera = () => {
    setIsCameraActive(true);
  };

  const closeCamera = () => {
    setIsCameraActive(false);
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const options = { quality: 0.5, base64: true };
        const data = await cameraRef.current.takePictureAsync(options);
        setCapturedImage(data.uri);
        closeCamera();
        // Implemente a lógica para autenticar o usuário com a foto capturada aqui.
      } catch (error) {
        console.error('Erro ao tirar foto:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* Seu logotipo aqui */}
      <Image
        source={require('./meulogo.png')} // Substitua pelo caminho da imagem do seu logotipo
        style={styles.logo}
      />

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
      <TouchableOpacity onPress={openCamera} style={styles.socialLoginContainer}>
        <View style={styles.socialButton}>
          <Icon name="camera" size={24} color="#007bff" style={styles.socialIcon} />
          <Text style={styles.socialLoginText}>
            {isCameraActive ? 'Tire uma foto para autenticar' : 'Login com a Face'}
          </Text>
        </View>
      </TouchableOpacity>
      {capturedImage && (
        <View>
          <Image source={{ uri: capturedImage }} style={styles.capturedImage} />
        </View>
      )}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Não tem uma conta?</Text>
        <TouchableOpacity onPress={navigateToCadastro}>
          <Text style={styles.signUpLink}>Cadastre-se agora</Text>
        </TouchableOpacity>
      </View>
      {isCameraActive && (
        <RNCamera
          ref={cameraRef}
          style={styles.camera}
          type={RNCamera.Constants.Type.front} // Altere para a câmera frontal ou traseira conforme necessário
          autoFocus={RNCamera.Constants.AutoFocus.on}
          flashMode={RNCamera.Constants.FlashMode.off}
          captureAudio={false}
        />
      )}
      {isCameraActive && (
        <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
          <Text style={styles.captureButtonText}>Capturar</Text>
        </TouchableOpacity>
      )}
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
  logo: {
    width: 100, // Ajuste a largura do logotipo conforme necessário
    height: 100, // Ajuste a altura do logotipo conforme necessário
    marginBottom: 20,
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
  capturedImage: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
  camera: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  captureButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#007bff',
    borderRadius: 50,
    padding: 15,
  },
  captureButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
