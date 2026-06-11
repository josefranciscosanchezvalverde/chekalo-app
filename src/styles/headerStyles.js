import { StyleSheet, Platform, StatusBar } from 'react-native';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingTop: 0,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    padding: 5,
  },
  menuLine: {
    width: 25,
    height: 3,
    backgroundColor: '#000',
    marginVertical: 3,
    borderRadius: 2,
  },
  divider: {
    height: 2,
    backgroundColor: '#00ADEE',
    marginHorizontal: 20,
  },
  logoImage: {
    height: 40,
    width: 120,
  },

  decorativeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 35,
  },
  decorativeLine: {
    flex: 1,
    height: 2,
    backgroundColor: '#00ADEE',
  },
  decorativeIcon: {
    width: 25,
    height: 25,
    marginHorizontal: 15,
  },
});