import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';

export default function Home() {
  const [sleepTime, setSleepTime] = useState('');
  const [sleepDuration, setSleepDuration] = useState('');
  const [sleepNote, setSleepNote] = useState('');

  const handleStartSleepRegulation = () => {
    // Implemente a lógica para iniciar a regulagem do sono aqui
    // Isso pode incluir a navegação para a tela de regulação do sono
  };

  const Stack = createStackNavigator();
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
        source={require('./logonenem.png')} // Substitua pelo caminho da imagem da sua logo
        style={styles.logo}
      />

      <Text style={styles.title}>Preencha as Informações</Text>

      {/* Campo para inserir a hora de dormir */}
      <TextInput
        style={styles.input}
        placeholder="Que horas você dormiu?"
        value={sleepTime}
        onChangeText={(text) => setSleepTime(text)}
      />

      {/* Campo para inserir a duração do sono */}
      <TextInput
        style={styles.input}
        placeholder="Quanto tempo você dormiu?"
        value={sleepDuration}
        onChangeText={(text) => setSleepDuration(text)}
      />

      {/* Campo para inserir uma nota sobre o sono (opcional) */}
      <TextInput
        style={styles.input}
        placeholder="Alguma observação?"
        value={sleepNote}
        onChangeText={(text) => setSleepNote(text)}
      />

      <TouchableOpacity style={styles.getStartedButton} onPress={handleStartSleepRegulation}>
        <Text style={styles.getStartedButtonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 200, // Ajuste a largura da logo conforme necessário
    height: 200, // Ajuste a altura da logo conforme necessário
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  getStartedButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  getStartedButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  manualLocationButton: {
    marginTop: 10,
    backgroundColor: '#ff9900',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  manualLocationButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
