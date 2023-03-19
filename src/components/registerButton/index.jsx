import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { styles } from './styles';
import { registerStart } from '../../redux/actions/registerActions';

const RegisterButton = ({ navigation }) => {
    const dispatch = useDispatch();

    return (
        <View style={styles.buttonView}>
            <TouchableOpacity
                onPress={() => dispatch(registerStart())}
                style={styles.button}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
        </View>
    );
}

export default RegisterButton;