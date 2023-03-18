import React from 'react';
import { View, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { styles } from './styles';
import { modifyEmailInput } from '../../../redux/actions/welcomeInputActions';

const EmailInput = () => {
    const dispatch = useDispatch();

    return (
        <View style={styles.inputView}>
            <TextInput
                style={styles.input}
                placeholder='Email'
                autoCapitalize='none'
                onChangeText={text => dispatch(modifyEmailInput(text))}
            />
        </View>
    );
}

export default EmailInput;