import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { styles } from './styles';
import { resetInputs } from '../../../redux/actions/welcomeInputActions';

const WelcomeRegisterButton = ({ navigation }) => {
    const dispatch = useDispatch();

    return (
        <View style={styles.buttonView}>
            <TouchableOpacity
                onPress={() => {
                    dispatch(resetInputs());
                    navigation.navigate('Register', {});
                }}
                style={styles.button}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
        </View>
    );
}

export default WelcomeRegisterButton;