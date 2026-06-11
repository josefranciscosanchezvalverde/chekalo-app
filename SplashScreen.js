import React, { useEffect, useState } from "react";
import { View, Animated, StyleSheet, Dimensions } from "react-native";
import Video from "react-native-video";

const { width } = Dimensions.get("window");

export default function SplashScreen({ onFinish }) {
    const [progress] = useState(new Animated.Value(0));

    useEffect(() => {
        // Animar el progreso
        Animated.timing(progress, {
        toValue: 1,
        duration: 3000, // 3 segundos
        useNativeDriver: false,
        }).start(() => {
        onFinish(); // Cuando termine avisa que ya acabó
        });
    }, []);

    // Convertir 0 → width
    const widthAnimado = progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, width * 0.7], // barra mide 70% de la pantalla
    });

    return (
        <View style={styles.container}>
        

        {/* BARRA DE PROGRESO */}
        <View style={styles.progressBar}>
            <Animated.View style={[styles.progressFill, { width: widthAnimado }]} />
        </View>
        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
    },
    video: {
        width: 250,
        height: 250,
        marginBottom: 40,
    },
    progressBar: {
        height: 10,
        width: "70%",
        backgroundColor: "#444",
        borderRadius: 10,
        overflow: "hidden",
    },
    progressFill: {
        height: "100%",
        backgroundColor: "#4CAF50",
    },
    });
