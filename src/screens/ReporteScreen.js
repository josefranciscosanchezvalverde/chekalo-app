import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import FloatingInput from '../components/FloatingInput';
import styles from '../styles/reporteStyles';

const ReporteScreen = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [tipoBusqueda, setTipoBusqueda] = useState('VIN');

  const [form, setForm] = useState({
    telefono: '',
    estado: '',
    ciudad: '',
    cp: '',
    direccion: '',
    tipoReporte: '',
    precio: '',
    vin: '',
    vin2: '',
    cupon: ''
  });

  const handleChange = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const handleNavigate = (screen) => {
    navigation.navigate(screen);
    setMenuVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header onMenuPress={() => setMenuVisible(true)} />

      <KeyboardAwareScrollView
        contentContainerStyle={styles.content}
        enableOnAndroid
        keyboardShouldPersistTaps="handled"
      >

        <Text style={styles.title}>OBTEN TU REPORTE</Text>

        {/* 📞 Contacto */}
        <View style={styles.row}>
          <View style={styles.column}>
            <FloatingInput
              label="Teléfono"
              value={form.telefono}
              onChangeText={(v) => handleChange('telefono', v)}
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.column}>
            <FloatingInput
              label="Estado"
              value={form.estado}
              onChangeText={(v) => handleChange('estado', v)}
            />
          </View>
        </View>


        <View style={styles.row}>
          <View style={styles.column}>
            <FloatingInput
              label="Ciudad"
              value={form.ciudad}
              onChangeText={(v) => handleChange('ciudad', v)}
            />
          </View>

          <View style={styles.column}>
            <FloatingInput
              label="Código Postal"
              value={form.cp}
              onChangeText={(v) => handleChange('cp', v)}
              keyboardType="numeric"
            />
          </View>
        </View>

        <FloatingInput
          label="Dirección"
          value={form.direccion}
          onChangeText={(v) => handleChange('direccion', v)}
          style={styles.inputFull}
        />

        {/* 📄 Reporte */}
        <View style={styles.row}>
          <View style={styles.column}>
            <FloatingInput
              label="Tipo de reporte"
              value={form.tipoReporte}
              onChangeText={(v) => handleChange('tipoReporte', v)}
            />
            </View>

          <View style={styles.column}>
            <FloatingInput
              label="Precio"
              value={form.precio}
              editable={false}
            />
          </View>
        </View>

        {/* 🚗 Tipo búsqueda */}
        <View style={styles.radioRow}>
          {['VIN', 'PLACA'].map(item => (
            <TouchableOpacity
              key={item}
              style={styles.radioItem}
              onPress={() => setTipoBusqueda(item)}
            >
              <View
                style={[
                  styles.radioCircle,
                  tipoBusqueda === item && styles.radioActive
                ]}
              />
              <Text style={styles.radioLabel}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* 🔍 VIN / PLACA */}
        {tipoBusqueda === 'VIN' ? (
          <View style={styles.row}>
            <View style={styles.column}>
              <FloatingInput
                label="VIN"
                value={form.vin}
                onChangeText={(v) => handleChange('vin', v)}
              />
            </View>

            <View style={styles.column}>
              <FloatingInput
                label="Confirmar VIN"
                value={form.vin2}
                onChangeText={(v) => handleChange('vin2', v)}
              />
            </View>
          </View>
        ) : (
          <View style={styles.row}>
            <View style={styles.column}>
              <FloatingInput
                label="Placa"
                value={form.placa}
                onChangeText={(v) => handleChange('placa', v)}
              />
            </View>

            <View style={styles.column}>
              <FloatingInput
                label="Confirmar placa"
                value={form.placa2}
                onChangeText={(v) => handleChange('placa2', v)}
              />
            </View>
          </View>
        )}

        {/* 🎟 Cupón */}
        <View style={styles.row}>
          <View style={styles.column}>
            <FloatingInput
              label="Cupón"
              value={form.cupon}
              onChangeText={(v) => handleChange('cupon', v)}
            />
          </View>

          <TouchableOpacity style={styles.couponButton}>
            <Text style={styles.couponText}>APLICAR CUPÓN</Text>
          </TouchableOpacity>
        </View>


        {/* 🚀 CTA */}
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitText}>ENVIAR</Text>
        </TouchableOpacity>

      </KeyboardAwareScrollView>

      <SideMenu
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
        onNavigate={handleNavigate}
      />
    </SafeAreaView>
  );
};

export default ReporteScreen;
