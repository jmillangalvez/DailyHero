import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const WelcomeHeader = ({ text }) => {
    return (
        <View style={styles.headerView}>
            {text.map(t => (
                    <Text key={t} style={styles.headerText}>{t}</Text>
                )
            )}
        </View>
    );
}

export default WelcomeHeader;