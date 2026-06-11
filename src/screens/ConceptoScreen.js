import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  Image, 
  StatusBar,
  StyleSheet // Añadido por si necesitas estilos locales
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Importación de componentes comunes
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';

// --- CORRECCIÓN AQUÍ ---
// Cambiamos 'screenStyles' por 'formStyles' para que coincida con el resto del código
import formStyles from '../styles/ConceptoScreenStyles'; 

const ConceptoScreen = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleNavigate = (screen) => {
    navigation.navigate(screen);
    setMenuVisible(false);
  };


  return (
    /* Aquí usamos screenStyles si es que el contenedor principal así se llama en tu archivo de estilos */
    /* Si no, cámbialo a formStyles.container */
    <SafeAreaView style={formStyles.container || { flex: 1, backgroundColor: '#fff' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* Cabecera */}
      <Header onMenuPress={() => setMenuVisible(true)} />

      {/* Contenido de la Pantalla */}
      <ScrollView 
        style={formStyles.content} 
        showsVerticalScrollIndicator={false}
      >
        <Text style={[formStyles.title, { marginTop: 20 }]}>El Origen de Checkalo</Text>
        
        <View style={{ paddingHorizontal: 10, marginBottom: 30 }}>
          <Text style={[formStyles.descriptionText, { textAlign: 'justify' }]}>
            En CHECKALO trabajamos para brindar confianza y
            transparencia al comprar un auto seminuevo.
          </Text>
          <Text style={[formStyles.descriptionText, { textAlign: 'justify' }]}>
            Usamos tecnología, automatización y análisis de datos 
            para generar reportes seguros y rápidos.
          </Text>
          <Text style={[formStyles.descriptionText, { textAlign: 'justify' }]}>
            Este proyecto es posible gracias al esfuerzo conjunto de 
            expertos en desarrollo, diseño y estrategia.
          </Text>
          <Text style={[formStyles.descriptionText, { textAlign: 'justify' }]}>
            Buscamos transformar la forma en que tomas decisiones, 
            con información clara y accesible.
          </Text>
        </View>

        <Header variant="decorative" />

        <Text style={formStyles.title}>MISIÓN</Text>
        <Text style={[formStyles.italicText, { textAlign: 'justify' }]}>
          Ayudamos a que nuestros clientes tomen decisiones inteligentes 
          con información clara y precisa para evitar fraudes, robos o estafas.
        </Text>

        <Header variant="decorative" />

        <Text style={formStyles.title}>VISIÓN</Text>
        <Text style={[formStyles.italicText, { textAlign: 'justify' }]}>
          Digitalizar el proceso de compra/venta al 100% con tecnología avanzada, 
          haciéndolo fácil, rápido y seguro para todos.
        </Text>

        <Header variant="decorative" />

        <Text style={formStyles.title}>VALORES</Text>
        <View style={formStyles.valuesList}>
          {[
            'Honestidad',
            'Transparencia',
            'Orientación al cliente',
            'Innovación',
            'Adaptabilidad'
          ].map((valor, index) => (
            <View key={index} style={formStyles.valueItem}>
              <View style={formStyles.bullet} />
              <Text style={formStyles.valueText}>{valor}</Text>
            </View>
          ))}
        </View>

        <View style={{ height: 60 }} />
      </ScrollView>

      {/* Menú Lateral */}
      <SideMenu
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
        onNavigate={handleNavigate}
      />
    </SafeAreaView>
  );
};

export default ConceptoScreen;