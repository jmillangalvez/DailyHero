import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import GoldDisplay from '../goldDisplay';
import LevelDisplay from '../levelDisplay';
import UsernameDisplay from '../usernameDisplay';

const AppHeader = () => {
    return (
        <View style={styles.headerView}>
            <LevelDisplay></LevelDisplay>
            <UsernameDisplay></UsernameDisplay>
            <GoldDisplay></GoldDisplay>
        </View>
    );
}

export default AppHeader;