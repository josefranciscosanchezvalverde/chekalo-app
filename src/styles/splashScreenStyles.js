import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Base blanca
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 60,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    zIndex: 10, // Para que esté encima del degradado
  },
    logoImage: {
    height: 160,
    width: 220,
  },
  logoAccent: {
    color: '#150280ff',
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.8,
    zIndex: 5,
  },
  video: {
    width: width * 1,
    height: height * 0.6,
  },
  progressContainer: {
    marginBottom: 40,
    zIndex: 10,
  },
  gradientBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});