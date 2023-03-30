import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from "react-redux";
import { styles } from './styles';
import { levelSelector } from '../../redux/selectors/heroSelectors';

const LevelDisplay = () => {
    return (
        <View style={styles.headerView}>
            <Text style={styles.headerText}>Level</Text>
            <Text style={styles.headerText}>{useSelector(levelSelector())}</Text>
        </View>
    );
}

export default LevelDisplay;