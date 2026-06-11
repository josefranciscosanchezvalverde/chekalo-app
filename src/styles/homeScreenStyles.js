import { StyleSheet, Platform, StatusBar, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 0,
  },
  content: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    paddingTop: 40,
    paddingBottom: 40,
  },
  textContainer: {
    marginBottom: 40,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#2C3E50',
    lineHeight: 56,
  },
  subtitle: {
    fontSize: 48,
    lineHeight: 56,
    marginTop: 5,
  },
  subtitleBold: {
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  subtitleNormal: {
    fontWeight: '300',
    color: '#2C3E50',
  },
  carContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 60,
    paddingHorizontal: 30,
  },
  carImage: {
    width: width * 0.9,
    height: height * 0.35,
  },
  iconLabel: {
    marginTop: 8,
    fontSize: 12,
    color: '#444',
    textAlign: 'center',
  },
  
  // Sección de concepto con K decorada
  conceptSection: {
    alignItems: 'center',
    marginBottom: 40,
    paddingHorizontal: 30,
  },
  decorativeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  leftLine: {
    width: 40,
    height: 3,
    backgroundColor: '#14B8A6',
    marginRight: 10,
  },
  kIcon: {
    width: 30,
    height: 30,
  },
  rightLine: {
    width: 40,
    height: 3,
    backgroundColor: '#14B8A6',
    marginLeft: 10,
  },
  conceptSubtitle: {
    fontSize: 14,
    color: '#14B8A6',
    fontWeight: '600',
    marginBottom: 40,
    letterSpacing: 1,
  },
  conceptTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2C3E50',
    textAlign: 'center',
  },

  // Carrusel
  carouselCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 28,
    marginHorizontal: 20,
    minHeight: 340,
    shadowColor: '#14B8A6',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 6,
  },
  carouselTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 20,
    lineHeight: 32,
  },
  carouselDescription: {
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 24,
    marginBottom: 30,
  },
  carouselFooter: {
    marginTop: 'auto',
  },
  carouselIconContainer: {
    width: 70,
    height: 70,
    backgroundColor: '#14B8A6',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
  },
  carouselIcon: {
    width: 40,
    height: 40,
    tintColor: '#fff',
  },
  carouselButton: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '600',
    letterSpacing: 1,
  },

    carouselCTA: {
    backgroundColor: '#14B8A6',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignSelf: 'flex-start',
  },

  carouselButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    letterSpacing: 1,
    fontSize: 14,
  },

  
  // Sección de Tecnología
  techSection: {
    marginTop: 0,
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  techTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 40,
    textAlign: 'center',
  },
  iconsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  iconItem: {
    width: '45%',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    padding: 15,
  },

  iconImage: {
    width: 70,
    height: 70,
  },
});