import React from 'react';
import { View, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { styles } from './styles';
import { modifyPasswordInput } from '../../../redux/actions/welcomeInputActions';

const EmailInput = () => {
    const dispatch = useDispatch();

    return (
        <View style={styles.inputView}>
            <TextInput
                style={styles.input}
                placeholder='Password'
                autoCapitalize='none'
                secureTextEntry={true}
                onChangeText={text => dispatch(modifyPasswordInput(text))}
            />
        </View>
    );
}

export default EmailInput;