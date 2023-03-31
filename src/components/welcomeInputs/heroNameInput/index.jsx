import React from 'react';
import { View, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { styles } from './styles';
import { modifyHeroNameInput } from '../../../redux/actions/welcomeInputActions';

const HeroNameInput = () => {
    const dispatch = useDispatch();

    return (
        <View style={styles.inputView}>
            <TextInput
                style={styles.input}
                placeholder='Hero name'
                autoCapitalize='none'
                onChangeText={text => dispatch(modifyHeroNameInput(text))}
            />
        </View>
    );
};

export default HeroNameInput;