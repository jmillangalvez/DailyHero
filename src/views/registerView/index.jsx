import { View } from "react-native";
import { WelcomeHeader, UsernameInput, EmailInput, PasswordInput, FlexView, RegisterButton } from '../../components';
import { styles } from "./styles";
import { labels } from "../../labels/labels";

const RegisterView = ({ navigation }) => {
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
            <RegisterButton navigation={navigation}></RegisterButton>
            <FlexView flex='4'></FlexView>
        </View>
    )
};

export default RegisterView;