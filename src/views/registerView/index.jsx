import { View } from "react-native";
import { WelcomeHeader, UsernameInput, EmailInput, PasswordInput, FlexView } from '../../components';
import { styles } from "./styles";
import { labels } from "../../labels/labels";

const RegisterView = () => {
    return (
        <View style={styles.view}>
            <FlexView flex='3'></FlexView>
            <WelcomeHeader text={labels.register}>
            </WelcomeHeader>
            <FlexView flex='2'></FlexView>
            <UsernameInput></UsernameInput>
            <FlexView flex='0.5'></FlexView>
            <EmailInput></EmailInput>
            <FlexView flex='0.5'></FlexView>
            <PasswordInput></PasswordInput>
            <FlexView flex='2.5'></FlexView>
            <FlexView flex='4'></FlexView>
        </View>
    )
};

export default RegisterView;