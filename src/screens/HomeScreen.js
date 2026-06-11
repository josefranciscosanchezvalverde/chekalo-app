import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, StatusBar, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native';

import Carousel from 'react-native-reanimated-carousel';

import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import styles from '../styles/homeScreenStyles';
import { ROUTES } from '../components/routes';


const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const carouselRef = useRef(null);
  
  // Animaciones de fade
  const textOpacity = useSharedValue(0);
  const carOpacity = useSharedValue(0);

  const textAnimatedStyle = useAnimatedStyle(() => ({
    opacity: textOpacity.value,
  }));

  const carAnimatedStyle = useAnimatedStyle(() => ({
    opacity: carOpacity.value,
  }));


  useEffect(() => {
    textOpacity.value = withTiming(1, { duration: 1500 });

    setTimeout(() => {
      carOpacity.value = withTiming(1, { duration: 1500 });
    }, 800);
  }, []);


  const handleNavigate = (screen) => {
    if (navigation) {
      navigation.navigate(screen);
    }
  };

  // Datos del carrusel
  const carouselData = [
    {
      id: 1,
      title: 'Tecnología con\nInteligencia Artificial',
      description: 'Utilizamos inteligencia artificial, conectándonos a cientos de bases de datos a nivel municipal, estatal, federal e internacional.',
      icon: require('../../assets/images/ai-icon.png'),
      buttonText: 'CONÓCENOS',
      route: ROUTES.CONCEPTO,
    },
    {
      id: 2,
      title: 'Procesamiento de datos\ncon Data Analyst',
      description: 'Reunimos y analizamos miles de datos, generando un reporte práctico y seguro con información en tiempo real que te ayudará a tomar decisiones para la compraventa de vehículos.',
      icon: require('../../assets/images/data-icon.png'),
      buttonText: 'OBTENER REPORTE',
      route: ROUTES.REPORTE,
    },
    {
      id: 3,
      title: 'Seguridad y\nTransparencia',
      description: 'Nuestro sistema de pago es 100% seguro, en cuestión de minutos recibirás tu reporte a través de nuestra plataforma, por correo electrónico o WhatsApp.',
      icon: require('../../assets/images/security-icon.png'),
      buttonText: 'TRANSPARENCIA',
      route: ROUTES.CONTACT,
    },
  ];

  // Datos de los iconos de tecnología
  const icons = [
    { id: 1, image: require('../../assets/icon/icon1.png'), label: 'Datos del Vehículo' },
    { id: 2, image: require('../../assets/icon/icon2.png'), label: 'Información \nMecanica' },
    { id: 3, image: require('../../assets/icon/icon3.png'), label: 'Precio del\nMercado' },
    { id: 4, image: require('../../assets/icon/icon4.png'), label: 'Estado de\nEmplacado' },
    { id: 5, image: require('../../assets/icon/icon5.png'), label: 'Historial de\nPlacas' },
    { id: 6, image: require('../../assets/icon/icon7.png'), label: 'Seguro vehicular' },
    { id: 7, image: require('../../assets/icon/icon8.png'), label: 'Tenencias y\nRefrendos' },
    { id: 8, image: require('../../assets/icon/icon9.png'), label: 'Reportes de robo' },
    { id: 9, image: require('../../assets/icon/icon10.png'), label: 'Historial de\ninfracciones' },
    { id: 10, image: require('../../assets/icon/icon11.png'), label: 'Historial de\nSiniestros' },
    { id: 11, image: require('../../assets/icon/icon12.png'), label: 'Registros \nInternacionales' },
    { id: 12, image: require('../../assets/icon/icon6.png'), label: 'Guia de\nCompraventa' },
  ];

  const renderCarouselItem = ({ item, animationValue }) => {
    const animatedStyle = useAnimatedStyle(() => {
      const scale = interpolate(
        animationValue.value,
        [-1, 0, 1],
        [0.9, 1, 0.9]
      );

      const opacity = interpolate(
        animationValue.value,
        [-1, 0, 1],
        [0.6, 1, 0.6]
      );

      return {
        transform: [{ scale }],
        opacity,
      };
    });

    return (
      <Animated.View style={[styles.carouselCard, animatedStyle]}>
        <Text style={styles.carouselTitle}>{item.title}</Text>
        <Text style={styles.carouselDescription}>{item.description}</Text>

        <View style={styles.carouselFooter}>
          <View style={styles.carouselIconContainer}>
            <Image source={item.icon} style={styles.carouselIcon} />
          </View>

          {/* CTA real */}
          <TouchableOpacity
            style={styles.carouselCTA}
            activeOpacity={0.8}
            onPress={() => navigation.navigate(item.route)}
            >
            <Text style={styles.carouselButtonText}>
              {item.buttonText}
            </Text>
          </TouchableOpacity>

        </View>
      </Animated.View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      <Header onMenuPress={() => setMenuVisible(true)} />
      
      <ScrollView 
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Sección 1: Texto animado con fade */}
        <Animated.View style={[styles.textContainer, textAnimatedStyle]}>

          <Text style={styles.title}>Tu Reporte</Text>
          <Text style={styles.title}>Vehicular</Text>
          <Text style={styles.subtitle}>
            <Text style={styles.subtitleBold}>fácil</Text>
            <Text style={styles.subtitleNormal}>, </Text>
            <Text style={styles.subtitleBold}>rápido</Text>
            <Text style={styles.subtitleNormal}> y </Text>
            <Text style={styles.subtitleBold}>seguro</Text>
          </Text>
        </Animated.View>

        {/* Sección 2: Imagen del carro animada con fade */}
        <Animated.View style={[styles.textContainer, textAnimatedStyle]}>

          <Image
            source={require('../../assets/images/car-home.png')}
            style={styles.carImage}
            resizeMode="contain"
          />
        </Animated.View>

        {/* Sección 3: Título con K decorada */}
        <View style={styles.conceptSection}>
          <Header variant="decorative" />

          <Text style={styles.conceptSubtitle}>UN CONCEPTO INNOVADOR</Text>
          <Text style={styles.conceptTitle}>¿Cómo funciona Checkalo?</Text>
        </View>

        {/* Sección 4: Carrusel */}
        <View style={styles.carouselContainer}>
          <Carousel
            width={width}
            height={520}
            data={carouselData}
            loop
            autoPlay
            autoPlayInterval={4500}
            pagingEnabled
            mode="parallax"
            modeConfig={{
              parallaxScrollingScale: 0.9,
              parallaxScrollingOffset: 60,
            }}
            renderItem={renderCarouselItem}
          />
        </View>

        {/* Sección 5: Tecnología + Transparencia */}
        <View style={styles.techSection}>
          <Header variant="decorative" />
          <Text style={styles.conceptSubtitle}>¿QUÉ INCLUYE MI REPORTE?</Text>
          <Text style={styles.techTitle}>Tecnología + Transparencia</Text>
          
          {/* Grid de iconos */}
          <View style={styles.iconsGrid}>
            {icons.map((icon) => (
              <View key={icon.id} style={styles.iconItem}>
                <Image
                  source={icon.image}
                  style={styles.iconImage}
                  resizeMode="contain"
                />
                <Text style={styles.iconLabel}>
                  {icon.label}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      
      <SideMenu 
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
        onNavigate={handleNavigate}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;