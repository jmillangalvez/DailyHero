import React from 'react';
import { View, TextInput } from 'react-native';
import { styles } from './styles';

const getTextinputProps = ({ placeholder, isPassword = false }) => {
    const standarProps = {
        style: styles.input,
        placeholder
    };

    if(isPassword){
        return {
            ...standarProps,
            secureTextEntry:true
        };
    }

    return {
        ...standarProps,
        autoCapitalize: 'none'
    };
}

const WelcomeInput = ({ placeholder, isPassword }) => {
    return (
        <View style={styles.inputView}>
            <TextInput
                {...getTextinputProps({placeholder, isPassword})}
            />
        </View>
    );
}

export default WelcomeInput;