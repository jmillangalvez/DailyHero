import React from 'react';
import { View, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { styles } from './styles';
import { modifyUsernameInput } from '../../../redux/actions/welcomeInputActions';

const UsernameInput = () => {
    const dispatch = useDispatch();

    return (
        <View style={styles.inputView}>
            <TextInput
                style={styles.input}
                placeholder='Username'
                autoCapitalize='none'
                onChangeText={text => dispatch(modifyUsernameInput(text))}
            />
        </View>
    );
};

export default UsernameInput;