import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// FUNCIÓN PARA LETRA AJUSTABLE
const scaleFont = (size) => Math.round(size * (width / 375));

// --- CONFIGURACIÓN DE LOS RECTÁNGULOS ---
// Cámbialos aquí y se aplicarán a ambos automáticamente
const GROSOR_RECTANGULO = 250; 
const LARGO_RECTANGULO = width * 3; // 2.5 veces el ancho de la pantalla para que no se vea el fin
const OPACIDAD_SUAVE = 0.1;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 0,
  },
  // RECTÁNGULO ROSA
  bgRectPink: {
    position: 'absolute',
    width: LARGO_RECTANGULO,       // <--- LARGO
    height: GROSOR_RECTANGULO,     // <--- GROSOR
    backgroundColor: '#E91E63',
    top: -100,
    right: -width * 1.5,           // Ajusta qué tan centrado aparece
    transform: [{ rotate: '-60deg' }],
    opacity: OPACIDAD_SUAVE,
    zIndex: -1,
  },
  // RECTÁNGULO AZUL
  bgRectBlue: {
    position: 'absolute',
    width: LARGO_RECTANGULO,       // <--- LARGO
    height: GROSOR_RECTANGULO,     // <--- GROSOR
    backgroundColor: '#00BCD4',
    bottom: height * 0.1, 
    left: -width * 1.2,            // Ajusta qué tan centrado aparece
    transform: [{ rotate: '60deg' }],
    opacity: OPACIDAD_SUAVE,
    zIndex: -1,
  },
  content: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  mainTitle: {
    color: '#333',
    fontSize: scaleFont(22),
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  whiteCard: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginVertical: 40,
    borderRadius: 20,
    padding: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  cardHeader: {
    fontSize: scaleFont(18),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#000',
  },
  rowSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textWrapper: {
    width: '60%',
  },
  descriptionText: {
    fontSize: scaleFont(14),
    color: '#555',
    lineHeight: scaleFont(20),
    textAlign: 'justify',
  },
  phoneImage: {
    width: '38%',
    height: 180,
  },
  gridImages: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 25,
  },
  smallImg: {
    width: width * 0.42,
    height: 110,
    borderRadius: 15,
  },
  centerImgContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  mediumImg: {
    width: width * 0.88,
    height: 160,
    borderRadius: 15,
  },
  footerText: {
    color: '#000',
    fontSize: scaleFont(22),
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 35,
    paddingHorizontal: 20,
  },
  actionButton: {
    backgroundColor: '#17A2B8',
    marginHorizontal: 40,
    paddingVertical: 18,
    borderRadius: 15,
    marginTop: 25,
    alignItems: 'center',
    elevation: 5,
  },
  actionButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: scaleFont(18),
  },
});