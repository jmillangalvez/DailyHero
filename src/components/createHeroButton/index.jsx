import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { styles } from './styles';
import { createHero } from '../../redux/actions/heroActions';

const CreateHeroButton = ({ navigation }) => {
    const dispatch = useDispatch();

    return (
        <View style={styles.buttonView}>
            <TouchableOpacity
                onPress={() => dispatch(createHero())}
                style={styles.button}>
                <Text style={styles.buttonText}>Create</Text>
            </TouchableOpacity>
        </View>
    );
}

export default CreateHeroButton;