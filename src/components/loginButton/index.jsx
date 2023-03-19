import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { styles } from './styles';
import { loginStart } from '../../redux/actions/loginActions';

const LoginButton = ({ navigation }) => {
    const dispatch = useDispatch();

    return (
        <View style={styles.buttonView}>
            <TouchableOpacity
                onPress={() => dispatch(loginStart())}
                style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

export default LoginButton;