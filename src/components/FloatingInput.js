import React, { useState, useEffect } from 'react';
import { View, TextInput, Animated, StyleSheet } from 'react-native';

const FloatingInput = ({
    label,
    value,
    onChangeText,
    style,
    ...props
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const animatedValue = useState(new Animated.Value(value ? 1 : 0))[0];

    useEffect(() => {
        Animated.timing(animatedValue, {
        toValue: isFocused || value ? 1 : 0,
        duration: 180,
        useNativeDriver: false,
        }).start();
    }, [isFocused, value]);

    const labelStyle = {
        position: 'absolute',
        left: 14,
        backgroundColor: '#fff',
        paddingHorizontal: 4,
        zIndex: 10,

        transform: [
        {
            translateY: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [18, -10], // 🔼 qué tanto sube
            }),
        },
        ],
        fontSize: animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [16, 12],
        }),
        color: animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['#9CA3AF', '#00ADEE'],
        }),
    };

    return (
        <View style={styles.container}>
        <Animated.Text style={labelStyle}>
            {label}
        </Animated.Text>

        <TextInput
            {...props}
            value={value}
            onChangeText={onChangeText}
            style={[styles.input, style]}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
        />
        </View>
    );
};

export default FloatingInput;

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    input: {
        height: 52,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 10,
        paddingHorizontal: 14,
        fontSize: 16,
        backgroundColor: '#fff',
    },
});
