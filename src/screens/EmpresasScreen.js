import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StatusBar, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import formStyles from '../styles/EmpresasScreenStyles';

const EmpresasScreen = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleNavigate = (screen) => {
    navigation.navigate(screen);
    setMenuVisible(false);
  };

  return (
    <SafeAreaView style={formStyles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* Rectángulos de fondo (Capa Rosa y Capa Azul) */}
      <View style={formStyles.bgRectPink} />
      <View style={formStyles.bgRectBlue} />

      <Header onMenuPress={() => setMenuVisible(true)} />

      <ScrollView style={formStyles.content} showsVerticalScrollIndicator={false}>

        <View style={formStyles.whiteCard}>
          <Text style={formStyles.cardHeader}>CHECKALO PARA EMPRESAS</Text>
          
          <View style={formStyles.rowSection}>
            <View style={formStyles.textWrapper}>
              <Text style={formStyles.descriptionText}>
                Te brindamos la información vehicular confiable para decisiones en la compraventa.
                Evita fraudes y costos inesperados. Obtén historial completo y reportes seguros.
              </Text>
            </View>
            <Image 
              source={require('../../assets/images/booking-man.png')} 
              style={formStyles.phoneImage}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={formStyles.gridImages}>
          <Image source={require('../../assets/images/f-booking-01.jpg')} style={formStyles.smallImg} />
          <Image source={require('../../assets/images/f-booking-02.jpg')} style={formStyles.smallImg} />
        </View>

        <View style={formStyles.centerImgContainer}>
          <Image source={require('../../assets/images/f-booking-03.jpg')} style={formStyles.mediumImg} />
        </View>

        <Text style={formStyles.footerText}>
          Compra tu auto usado con total confianza
        </Text>

        <TouchableOpacity
          style={formStyles.actionButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Reporte')}
        >
          <Text style={formStyles.actionButtonText}>
            OBTENER REPORTE
          </Text>
        </TouchableOpacity>


        <View style={{ height: 60 }} />
      </ScrollView>

      <SideMenu visible={menuVisible} onClose={() => setMenuVisible(false)} onNavigate={handleNavigate} />
    </SafeAreaView>
  );
};

export default EmpresasScreen;