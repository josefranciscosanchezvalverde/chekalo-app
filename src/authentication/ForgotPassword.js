import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

import FloatingInput from '../components/FloatingInput';
import styles from '../styles/ForgotPasswordScreenStyles';

export default function ForgotPassword({ navigation }) {
  const [email, setEmail] = useState('');

  const handleRecover = () => {
    if (!email) {
      Alert.alert('Error', 'Por favor ingresa tu correo');
      return;
    }

    // Aquí después va API / Firebase / backend
    Alert.alert(
      'Revisa tu correo',
      'Te enviamos instrucciones para recuperar tu contraseña'
    );

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Fondo */}
      <Image
        source={require('../../assets/images/city.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      {/* Contenido */}
      <View style={styles.content}>
        <View style={styles.card}>

          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />

          <Text style={styles.title}>¿Olvidaste tu contraseña?</Text>
          <Text style={styles.subtitle}>
            Ingresa tu correo y te enviaremos instrucciones
          </Text>

          <FloatingInput
            label="E - Mail"
            value={email}
            onChangeText={setEmail}
          />

          <TouchableOpacity style={styles.button} onPress={handleRecover}>
            <Text style={styles.buttonText}>Recuperar contraseña</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.back}>Volver al inicio de sesión</Text>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}
