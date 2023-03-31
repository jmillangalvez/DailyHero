import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import ItemDisplay from '../itemDisplay';
import FlexView from '../flexView';

const EquipmentDisplay = () => {
    return (
        <View style={styles.mainView}>
            <View style={styles.row}>
                <ItemDisplay style={styles.item}></ItemDisplay>
                <ItemDisplay style={styles.item}></ItemDisplay>
            </View>
            <FlexView flex="2"></FlexView>
            <View style={styles.row}>
                <ItemDisplay style={styles.item}></ItemDisplay>
                <ItemDisplay style={styles.item}></ItemDisplay>
            </View>
        </View>
    );
}

export default EquipmentDisplay;