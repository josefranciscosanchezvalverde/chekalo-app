import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importa las pantallas
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import ContactScreen from './src/screens/ContactScreen';
import ReporteScreen from './src/screens/ReporteScreen';
import EmpresasScreen from './src/screens/EmpresasScreen';
import ConceptoScreen from './src/screens/ConceptoScreen';
import PreguntasScreen from './src/screens/PreguntasScreen';
import Login from './src/authentication/Login';
import Register from './src/authentication/Register';
import ForgotPassword from './src/authentication/ForgotPassword';



const Stack = createNativeStackNavigator();

function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <SplashScreen onFinish={() => setIsLoading(false)} />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="Reporte" component={ReporteScreen} />
        <Stack.Screen name="Empresas" component={EmpresasScreen} />
        <Stack.Screen name="Concepto" component={ConceptoScreen} />
        <Stack.Screen name="Preguntas" component={PreguntasScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

/*
---

Estructura final del proyecto:

CHECKALO_APP/
├── src/
│   ├── screens/
│   │   ├── SplashScreen.js
│   │   ├── HomeScreen.js
│   │   ├── ContactScreen.js
│   │   ├── ReporteScreen.js
│   │   ├── EmpresasScreen.js
│   │   ├── ConceptoScreen.js
│   │   └── PreguntasScreen.js
│   ├── components/
│   │   ├── Header.js
│   │   ├── ContactForm.js
│   │   └── SideMenu.js
│   └── styles/
│       ├── splashScreenStyles.js
│       ├── homeScreenStyles.js
│       ├── contactScreenStyles.js
│       ├── generalScreenStyles.js
│       ├── headerStyles.js
│       ├── contactFormStyles.js
│       └── sideMenuStyles.js
├── assets/
│   └── videos/
│       └── video_checkalo.mp4
├── App.js
|── package.json
|── index.js

*/