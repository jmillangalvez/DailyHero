import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

const FlexView = ({ flex }) => {
    return (
        <View style={{...styles.view, flex: flex}}>
        </View>
    );
}

export default FlexView;