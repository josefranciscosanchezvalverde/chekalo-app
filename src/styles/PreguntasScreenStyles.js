import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  kLogoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  decorativeLine: {
    flex: 1,
    height: 1.5,
    backgroundColor: '#00ADEE',
  },
  faviconImage: {
    width: 25,
    height: 25,
    marginHorizontal: 15,
  },
  mainTitle: {
    fontSize: 22,
    textAlign: 'center',
    marginVertical: 40,
    marginBottom: 30,
    color: '#333',
    fontWeight: 'bold',
  },
  accordionWrapper: {
    marginBottom: 10,
  },
  accordionHeader: {
    backgroundColor: '#E0E0E0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
  },
  accordionText: {
    flex: 1,
    fontSize: 14,
    color: '#444',
    fontWeight: '600',
  },
  plusIcon: {
    fontSize: 22,
    color: '#00ADEE',
  },
  answerContainer: {
    padding: 15,
    backgroundColor: '#F8F8F8',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    marginTop: -5,
  },
  answerText: {
    color: '#666',
    fontSize: 13,
  },

  // --- CONFIGURACIÓN PARA IMAGEN AJUSTABLE ---
  bannerContainer: {
    marginVertical: 20,
    width: '100%',
    alignItems: 'center', // Centra la imagen si sobra espacio
  },
  bannerImage: {
    width: '100%',      // Ocupa todo el ancho de la pantalla
    height: undefined,  // Deja que el aspecto ratio defina el alto
    aspectRatio: 18 / 11, // Ajusta esto según el formato de tu foto 
    borderRadius: 12,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#333',
  },
  pricingSection: {
    backgroundColor: '#F2F2F2',
    padding: 15,
    borderRadius: 20,
  },
  priceLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  }
});