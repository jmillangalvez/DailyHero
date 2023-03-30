import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from "react-redux";
import { styles } from './styles';
import { goldSelector } from '../../redux/selectors/heroSelectors';

const getGoldString = (number) => {
    if(number > 999999){
        return (number/1000000).toFixed(1) + 'M';
    }else if( number > 999){
        return (number/1000).toFixed(1) + 'K';
    }
    return number
}

const GoldDisplay = () => {
    return (
        <View style={styles.headerView}>
            <Text style={styles.headerText}>Gold</Text>
            <Text style={styles.headerText}>
                {getGoldString(useSelector(goldSelector()))}
            </Text>
        </View>
    );
}

export default GoldDisplay;