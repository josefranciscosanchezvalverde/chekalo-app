import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    transform: [{ scale: 1 }, { translateY: 0 }],
  },

  content: {
    flex: 1,
    justifyContent: 'center',
  },

  card: {
    marginHorizontal: 24,
    padding: 24,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 16,
  },

  logo: {
    width: 180,
    height: 80,
    alignSelf: 'center',
    marginBottom: 24,
  },

  button: {
    backgroundColor: '#00BFA6',
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 16,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },

  /* 🔴 Forgot password SIN línea */
  forgotPassword: {
    textAlign: 'center',
    marginTop: 12,
    color: '#E53935',
    fontWeight: '600',
  },

  register: {
    textAlign: 'center',
    marginTop: 16,
    color: '#555',
  },

  registerLink: {
    color: '#00BFA6',
    fontWeight: 'bold',
  },
});

export default styles;
