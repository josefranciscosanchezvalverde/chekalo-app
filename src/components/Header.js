import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/headerStyles';
import { ROUTES } from './routes';

/* 🔹 Decorativo interno */
const HeaderDecorative = () => {
  return (
    <View style={styles.decorativeContainer}>
      <View style={styles.decorativeLine} />

      <Image
        source={require('../../assets/images/k-icon.png')}
        style={styles.decorativeIcon}
        resizeMode="contain"
      />

      <View style={styles.decorativeLine} />
    </View>
  );
};

const Header = ({
  onMenuPress,
  showDecorative = false,
  variant = 'default', // 'default' | 'decorative'
}) => {
  const navigation = useNavigation();

  /* 🟢 SOLO decorativo */
  if (variant === 'decorative') {
    return <HeaderDecorative />;
  }

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate(ROUTES.HOME)}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuButton} onPress={onMenuPress}>
          <View style={styles.menuLine} />
          <View style={styles.menuLine} />
          <View style={styles.menuLine} />
        </TouchableOpacity>
      </View>

      {showDecorative && <HeaderDecorative />}
      <View style={styles.divider} />
    </>
  );
};

export default Header;
