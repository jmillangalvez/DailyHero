import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from "react-redux";
import { styles } from './styles';
import { usernameSelector } from '../../redux/selectors/heroSelectors';

const UsernameDisplay = () => {
    return (
        <View style={styles.headerView}>
            <Text style={styles.headerText}>{useSelector(usernameSelector())}</Text>
        </View>
    );
}

export default UsernameDisplay;