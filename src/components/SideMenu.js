import React, { useEffect, useRef, useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Modal,
  Animated,
  Dimensions,
  Image
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/sideMenuStyles';

const { width } = Dimensions.get('window');
const MENU_WIDTH = width * 0.75;

const SideMenu = ({ visible, onClose, onNavigate }) => {
  const slideAnim = useRef(new Animated.Value(MENU_WIDTH)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (visible) {
      setShowModal(true);
      setTimeout(() => {
        Animated.parallel([
          Animated.spring(slideAnim, {
            toValue: 0,
            useNativeDriver: true,
            tension: 65,
            friction: 11,
          }),
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
        ]).start();
      }, 50);
    } else {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: MENU_WIDTH,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }),
      ]).start(() => setShowModal(false));
    }
  }, [visible]);

  const menuItems = [
    { id: 'Home', label: 'Inicio', icon: '🏠' },
    { id: 'Reporte', label: 'Reporte', icon: '📄' },
    { id: 'Empresas', label: 'Empresas', icon: '🏢' },
    { id: 'Concepto', label: 'Concepto', icon: '💡' },
    { id: 'Preguntas', label: 'Preguntas frecuentes', icon: '❓' },
    { id: 'Contact', label: 'Contáctanos', icon: '📧' },
  ];

  const handleItemPress = (itemId) => {
    onClose();
    onNavigate(itemId);
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      onClose();
      onNavigate('Login');
    } catch (error) {
      console.log('Error al cerrar sesión', error);
    }
  };

  return (
    <Modal
      visible={showModal}
      transparent
      animationType="none"
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <Animated.View style={[styles.overlay, { opacity: fadeAnim }]}>
        <TouchableOpacity
          style={styles.closeArea}
          activeOpacity={1}
          onPress={onClose}
        />

        <Animated.View
          style={[
            styles.menuContainer,
            { transform: [{ translateX: slideAnim }] }
          ]}
        >
          <View style={styles.menuHeader}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={styles.logoImage}
              resizeMode="contain"
            />
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeIcon}>✕</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          <View style={styles.userSection}>
            <Text style={styles.avatarIcon}>👤</Text>
            <Text style={styles.userName}>Usuario</Text>
          </View>

          <View style={styles.menuItems}>
            {menuItems.map(item => (
              <TouchableOpacity
                key={item.id}
                style={styles.menuItem}
                onPress={() => handleItemPress(item.id)}
              >
                <Text style={styles.menuIcon}>{item.icon}</Text>
                <Text style={styles.menuLabel}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            style={styles.logoutButton}
            onPress={handleLogout}
          >
            <Text style={styles.logoutIcon}>🚪</Text>
            <Text style={styles.logoutText}>Cerrar sesión</Text>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    </Modal>
  );
};

export default SideMenu;
