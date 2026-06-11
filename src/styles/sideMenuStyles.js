import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flexDirection: 'row',
  },
  closeArea: {
    flex: 1,
  },
  menuContainer: {
    width: width * 0.75, // 75% del ancho de la pantalla
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: -2,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingTop: 30, // Espacio para la status bar 
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  logoAccent: {
    color: '#14B8A6',
  },
    logoImage: {
    height: 40,
    width: 120,
  },
  closeButton: {
    padding: 5,
  },
  closeIcon: {
    fontSize: 28,
    color: '#000',
    fontWeight: '300',
  },
  divider: {
    height: 2,
    backgroundColor: '#00ADEE',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  userSection: {
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarIcon: {
    fontSize: 30,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  menuItems: {
    flex: 1,
    paddingTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  menuIcon: {
    fontSize: 20,
    marginRight: 15,
    width: 25,
  },
  menuLabel: {
    fontSize: 16,
    color: '#374151',
    fontWeight: '500',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    marginTop: 'auto',
    marginBottom: 20,
  },
  logoutIcon: {
    fontSize: 20,
    marginRight: 15,
    width: 25,
  },
  logoutText: {
    fontSize: 16,
    color: '#374151',
    fontWeight: '500',
  },
});