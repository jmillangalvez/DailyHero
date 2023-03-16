import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const WelcomeHeader = ({ text }) => {
    return (
        <View style={styles.headerView}>
            <Text style={styles.headerText}>{text}</Text>
        </View>
    );
}

export default WelcomeHeader;