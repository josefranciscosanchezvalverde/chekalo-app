import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },

  card: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 16,
    padding: 24,
  },

  logo: {
    width: 160,
    height: 70,
    alignSelf: 'center',
    marginBottom: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },

  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },

  button: {
    backgroundColor: '#d32f2f',
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

  back: {
    textAlign: 'center',
    marginTop: 16,
    color: '#d32f2f',
    fontWeight: 'bold',
  },
});

export default styles;
