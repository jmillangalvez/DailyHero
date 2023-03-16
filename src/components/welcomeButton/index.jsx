import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

const WelcomeButton = ({ text, navigation }) => {
    return (
        <View style={styles.buttonView}>
            <TouchableOpacity
                onPress={() => navigation.navigate(text, {})}
                style={styles.touchable}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{text}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default WelcomeButton;