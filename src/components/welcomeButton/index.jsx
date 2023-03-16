import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { styles } from './styles';

const WelcomeButton = ({ text }) => {
    return (
        <View style={styles.buttonView}>
            <TouchableWithoutFeedback>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{text}</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

export default WelcomeButton;