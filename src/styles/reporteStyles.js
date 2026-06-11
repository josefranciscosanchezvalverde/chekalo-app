import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  content: {
    padding: 25,
    paddingBottom: 40
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 30
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start', // 🔑 CLAVE
    marginBottom: 15
  },

  column: {
    width: '48%'
  },

  inputFull: {
    width: '100%',
    marginBottom: 15
  },

  radioRow: {
    flexDirection: 'row',
    marginVertical: 20
  },

  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 30
  },

  radioCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 8
  },

  radioActive: {
    backgroundColor: '#14B8A6'
  },

  radioLabel: {
    fontSize: 12
  },

  couponButton: {
    width: '48%',
    height: 52,
    backgroundColor: '#6ECFE3',
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center'
  },

  couponText: {
    fontSize: 12,
    fontWeight: '600'
  },

  submitButton: {
    backgroundColor: '#FF5C5C',
    borderRadius: 30,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },

  submitText: {
    color: '#fff',
    fontWeight: '700'
  }
});
