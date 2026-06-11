import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import FloatingInput from '../components/FloatingInput';
import styles from '../styles/RegisterScreenStyles';

export default function Register({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    navigation.replace('Login');
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

          <FloatingInput label="Nombre" value={nombre} onChangeText={setNombre} />
          <FloatingInput label="Apellido" value={apellido} onChangeText={setApellido} />
          <FloatingInput label="E - Mail" value={email} onChangeText={setEmail} />
          <FloatingInput
            label="Teléfono"
            keyboardType="phone-pad"
            value={telefono}
            onChangeText={setTelefono}
          />
          <FloatingInput
            label="Contraseña"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <FloatingInput
            label="Confirmar Contraseña"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>

          <Text style={styles.register}>
            ¿Ya tienes cuenta?{' '}
            <Text
              style={styles.registerLink}
              onPress={() => navigation.goBack()}
            >
              Inicia sesión
            </Text>
          </Text>

        </View>
      </View>
    </View>
  );
}

