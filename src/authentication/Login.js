import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import FloatingInput from '../components/FloatingInput';
import styles from '../styles/LoginScreenStyles';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.replace('Home');
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

          {/* LOGO */}
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />

          <FloatingInput
            label="E - Mail"
            value={email}
            onChangeText={setEmail}
          />

          <FloatingInput
            label="Contraseña"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>

          {/* Olvidé mi contraseña */}
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={{ color: 'red', textAlign: 'center', marginVertical: 10 }}>
              Olvidaste tu Contraseña
            </Text>
          </TouchableOpacity>
          
          <Text style={styles.register}>
            ¿No tienes Cuenta?{' '}
            <Text
              style={styles.registerLink}
              onPress={() => navigation.navigate('Register')}
            >
              Regístrate
            </Text>
          </Text>

        </View>
      </View>
    </View>
  );
}
