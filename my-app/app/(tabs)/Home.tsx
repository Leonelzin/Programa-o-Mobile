import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  const handleStartSleepRegulation = () => {
    // Implemente a lógica para iniciar a regulagem do sono aqui
    // Isso pode incluir a navegação para a tela de regulação do sono
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Sleep Better</Text>
      <Text style={styles.description}>
        O Sleep Better é seu parceiro para uma noite de sono mais saudável e revigorante.
        Monitore seu sono, crie rotinas saudáveis e experimente a diferença em sua vida.
      </Text>
      <TouchableOpacity style={styles.getStartedButton} onPress={handleStartSleepRegulation}>
        <Text style={styles.getStartedButtonText}>Comece a Regular o Sono</Text>
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
});
