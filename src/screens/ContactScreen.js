import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import FloatingInput from '../components/FloatingInput';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import styles from '../styles/contactScreenStyles';

const ContactForm = ({ navigation }) => {
  // 🔹 Estado del menú
  const [menuVisible, setMenuVisible] = useState(false);

  // 🔹 Estado del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    asunto: '',
    telefono: '',
    comentario: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Formulario enviado:', formData);
    alert('Mensaje enviado correctamente');
  };

  const handleNavigate = (screen) => {
    navigation.navigate(screen);
    setMenuVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header onMenuPress={() => setMenuVisible(true)} />

      <KeyboardAwareScrollView
        contentContainerStyle={{ paddingBottom: 80 }}
        enableOnAndroid
        extraScrollHeight={120}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >

        <Text style={styles.title}>Escríbenos</Text>

        <View style={styles.formContainer}>
          <FloatingInput
            label="Nombre"
            value={formData.nombre}
            onChangeText={(v) => handleInputChange('nombre', v)}
          />

          <FloatingInput
            label="Correo"
            value={formData.correo}
            onChangeText={(v) => handleInputChange('correo', v)}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <FloatingInput
            label="Asunto"
            value={formData.asunto}
            onChangeText={(v) => handleInputChange('asunto', v)}
          />

          <FloatingInput
            label="Teléfono"
            value={formData.telefono}
            onChangeText={(v) => handleInputChange('telefono', v)}
            keyboardType="phone-pad"
          />

          <FloatingInput
            label="Comentario"
            value={formData.comentario}
            onChangeText={(v) => handleInputChange('comentario', v)}
            multiline
            numberOfLines={5}
            style={{ height: 120, textAlignVertical: 'top' }}
          />

          <TouchableOpacity 
            style={styles.submitButton}
            onPress={handleSubmit}
            activeOpacity={0.8}
          >
            <Text style={styles.submitButtonText}>Enviar Mensaje</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>

      {/* SideMenu */}
      <SideMenu
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
        onNavigate={handleNavigate}
      />
    </SafeAreaView>
  );
};

export default ContactForm;