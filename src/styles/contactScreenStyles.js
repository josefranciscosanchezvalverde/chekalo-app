import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
  },
  content: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'center',
    marginTop: 0,
    marginBottom: 10,
  },
  decorativeLine: {
    width: 40,
    height: 2,
    backgroundColor: '#00ADEE',
    marginHorizontal: 10,
  },
  titleK: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00ADEE',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    color: '#1F2937',
    marginTop: 40,
    marginBottom: 30,
  },
  formContainer: {
    paddingHorizontal: 40,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#374151',
    marginBottom: 8,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#F3F4F6', // Gris claro suave
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: '#000',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  textArea: {
    height: 120,
    paddingTop: 12,
  },
  submitButton: {
    backgroundColor: '#00ADEE',
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 20,
    // Sombra para iOS
    shadowColor: '#00ADEE',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    // Sombra para Android
    elevation: 6,
    marginBottom: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});