import React, { useState } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  Image, 
  StatusBar, 
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Importación de componentes locales
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';

// Importación de estilos corregidos
import styles from '../styles/PreguntasScreenStyles'; 

// Habilitar animaciones para Android
const isAndroid = Platform.OS === 'android';
const canAnimate = UIManager.setLayoutAnimationEnabledExperimental;

if (isAndroid && canAnimate) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const FAQ_DATA = [
  { 
    id: 1, 
    question: "¿Cómo me ayuda CHECKALO?", 
    answer: "Verificamos historial legal y mecánico para tu seguridad." 
  },
  { 
    id: 2, 
    question: "¿Por qué no hay datos de dueños?", 
    answer: "Por la Ley Federal de Protección de Datos Personales." 
  },
  { 
    id: 3, 
    question: "¿Es legal el reporte?", 
    answer: "Sí, usamos fuentes públicas y privadas legales." 
  },
  { 
    id: 4, 
    question: "¿Por qué tiene costo?", 
    answer: "Cubre bases de datos premium y soporte experto." 
  },
  { 
    id: 5, 
    question: "¿Métodos de pago?", 
    answer: "Tarjetas de crédito, débito y pagos vía Clip." 
  },
  { 
    id: 6, 
    question: "¿Qué es el NIV?", 
    answer: "Es el Número de Identificación única de cada auto." 
  },
  { 
    id: 7, 
    question: "¿Cuándo recibo el reporte?", 
    answer: "La entrega es inmediata tras confirmar tu pago." 
  },
];

const PreguntasScreen = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    LayoutAnimation.configureNext(
      LayoutAnimation.Presets.easeInEaseOut
    );
    setActiveId(activeId === id ? null : id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Header onMenuPress={() => setMenuVisible(true)} />

      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContent}
      >

        <Text style={styles.mainTitle}>Resuelve tus dudas</Text>
        
        {/* Lista de Preguntas Frecuentes */}
        {FAQ_DATA.map((item) => (
          <View key={item.id} style={styles.accordionWrapper}>
            <TouchableOpacity 
              activeOpacity={0.8}
              onPress={() => toggleAccordion(item.id)}
              style={styles.accordionHeader}
            >
              <Text style={styles.accordionText}>
                {item.question}
              </Text>
              <Text style={styles.plusIcon}>
                {activeId === item.id ? '−' : '+'}
              </Text>
            </TouchableOpacity>
            {activeId === item.id && (
              <View style={styles.answerContainer}>
                <Text style={styles.answerText}>
                  {item.answer}
                </Text>
              </View>
            )}
          </View>
        ))}

        {/* Banner */}
        <View style={styles.bannerContainer}>
          <Image 
            source={require('../../assets/images/car-details.jpg')} 
            style={styles.bannerImage}
            resizeMode="cover"
          />
        </View>

        <Text style={styles.sectionTitle}>
          Elige el reporte que necesitas
        </Text>

        {/* Precios */}
        <View style={styles.pricingSection}>

          <Text style={styles.priceLabel}>CHECK $99.00 mxn</Text>
          <TouchableOpacity 
            style={[styles.accordionHeader, styles.priceAccordion]}
            onPress={() => toggleAccordion('p1')}
          >
            <Text style={styles.accordionText}>¿Qué incluye?</Text>
            <Text style={styles.arrowIcon}>
              {activeId === 'p1' ? '▲' : '▼'}
            </Text>
          </TouchableOpacity>
          {activeId === 'p1' && (
            <View style={styles.answerContainer}>
              <Text style={styles.answerText}>
                Validación de NIV, Reporte de Robo y Placas.
              </Text>
            </View>
          )}

          <Text style={styles.priceLabel}>CHECK PLUS $199.00 mxn</Text>
          <TouchableOpacity 
            style={[styles.accordionHeader, styles.priceAccordion]}
            onPress={() => toggleAccordion('p2')}
          >
            <Text style={styles.accordionText}>¿Qué incluye?</Text>
            <Text style={styles.arrowIcon}>
              {activeId === 'p2' ? '▲' : '▼'}
            </Text>
          </TouchableOpacity>
          {activeId === 'p2' && (
            <View style={styles.answerContainer}>
              <Text style={styles.answerText}>
                Todo lo de CHECK + Historial legal y multas.
              </Text>
            </View>
          )}

          <Text style={styles.priceLabel}>CHECK ULTRA $299.00 mxn</Text>
          <TouchableOpacity 
            style={[styles.accordionHeader, styles.priceAccordion]}
            onPress={() => toggleAccordion('p3')}
          >
            <Text style={styles.accordionText}>¿Qué incluye?</Text>
            <Text style={styles.arrowIcon}>
              {activeId === 'p3' ? '▲' : '▼'}
            </Text>
          </TouchableOpacity>
          {activeId === 'p3' && (
            <View style={styles.answerContainer}>
              <Text style={styles.answerText}>
                Todo lo de CHECK PLUS + Historial y mecánica.
              </Text>
            </View>
          )}

        </View>

        <View style={{ height: 40 }} />
      </ScrollView>

      <SideMenu 
        visible={menuVisible} 
        onClose={() => setMenuVisible(false)} 
        onNavigate={(screen) => { 
          setMenuVisible(false); 
          navigation.navigate(screen); 
        }} 
      />
    </SafeAreaView>
  );
};

export default PreguntasScreen;
