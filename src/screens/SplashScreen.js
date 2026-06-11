import React, { useEffect, useRef } from 'react';
import { View, Text, Image} from 'react-native';
import { Video } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import * as Progress from 'react-native-progress';
import styles from '../styles/splashScreenStyles';

const SplashScreen = ({ onFinish }) => {
  const [progress, setProgress] = React.useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 1) {
          clearInterval(interval);
          setTimeout(() => {
            onFinish();
          }, 500);
          return 1;
        }
        return prev + 0.02;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      {/* Fondo con degradado */}
      <LinearGradient
        colors={['#86defeff', '#87dfffff', '#87dfffff', '#86defeff']}
        locations={[0, 0.3, 0.6, 1]}
        style={styles.gradientBackground}
      />

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>

      {/* Video del carrito */}
      <View style={styles.videoContainer}>
        <Video
          ref={videoRef}
          source={require('../../assets/videos/video_checkalo.mp4')}
          style={styles.video}
          resizeMode="contain"
          shouldPlay
          isLooping
          isMuted
        />
      </View>

      {/* Barra de progreso */}
      <View style={styles.progressContainer}>
        <Progress.Bar
          progress={progress}
          width={200}
          height={8}
          color="#14b82dff"
          unfilledColor="#E5E7EB"
          borderWidth={0}
          borderRadius={10}
        />
      </View>
    </View>
  );
};

export default SplashScreen;