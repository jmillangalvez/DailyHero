import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { styles } from './styles';
import { resetInputs } from '../../../redux/actions/welcomeInputActions';

const WelcomeLoginButton = ({ navigation }) => {
    const dispatch = useDispatch();

    return (
        <View style={styles.buttonView}>
            <TouchableOpacity
                onPress={() => {
                    dispatch(resetInputs());
                    navigation.navigate('Login', {});
                }}
                style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

export default WelcomeLoginButton;