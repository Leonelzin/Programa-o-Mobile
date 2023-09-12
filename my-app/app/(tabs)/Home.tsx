import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator, useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation(); // Use o hook useNavigation para acessar a navegação

  // Função para lidar com o início da regulagem do sono
  const handleStartSleepRegulation = () => {
    // Navegue para a tela de formulário
    navigation.navigate('Formulario');
  };

  // Função para definir a localização manualmente
  const handleSetLocationManually = () => {
    Alert.prompt(
      'Definir Localização Manualmente',
      'Insira a latitude e a longitude separadas por vírgula (ex: 12.345, -67.890)',
      (text) => {
        const [lat, long] = text.split(',').map((coord) => parseFloat(coord.trim()));

        if (!isNaN(lat) && !isNaN(long)) {
          // Você pode fazer algo com a latitude e longitude inseridas aqui, se necessário
        } else {
          Alert.alert('Erro', 'Por favor, insira valores de latitude e longitude válidos.');
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      {/* Sua logo aqui */}
      <Image
        source={require('./imagens/logonenem.png')} // Substitua pelo caminho da imagem da sua logo
        style={styles.logo}
      />

      <Text style={styles.title}>Bem-vindo ao Sleep Better</Text>
      <Text style={styles.description}>
        O Sleep Better é seu parceiro para uma noite de sono mais saudável e revigorante.
        Monitore seu sono, crie rotinas saudáveis e experimente a diferença em sua vida.
      </Text>
      <TouchableOpacity style={styles.getStartedButton} onPress={handleStartSleepRegulation}>
        <Text style={styles.getStartedButtonText}>Comece a Regular o Sono</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.manualLocationButton} onPress={handleSetLocationManually}>
        <View style={styles.iconContainer}>
          <Icon name="map-pin" size={20} color="#fff" />
          <Text style={styles.manualLocationButtonText}>Definir Localização Manualmente</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  // Estilos para o container principal
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  // Estilos para a logo
  logo: {
    width: 200, // Ajuste a largura da logo conforme necessário
    height: 200, // Ajuste a altura da logo conforme necessário
    marginBottom: 20,
  },
  // Estilos para o título "Bem-vindo ao Sleep Better"
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  // Estilos para a descrição
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  // Estilos para o botão "Comece a Regular o Sono"
  getStartedButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  // Estilos para o texto do botão "Comece a Regular o Sono"
  getStartedButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  // Estilos para o botão "Definir Localização Manualmente"
  manualLocationButton: {
    marginTop: 10,
    backgroundColor: '#ff9900',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  // Estilos para o container do ícone e texto do botão "Definir Localização Manualmente"
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Estilos para o texto do botão "Definir Localização Manualmente"
  manualLocationButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
