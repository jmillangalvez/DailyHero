import { View } from "react-native";
import { WelcomeButton, WelcomeHeader, UsernameInput, PasswordInput, FlexView } from '../../components';
import { styles } from "./styles";
import { labels } from "../../labels/labels";

const LoginView = () => {
    return (
        <View style={styles.view}>
            <FlexView flex='3'></FlexView>
            <WelcomeHeader text={labels.login}>
            </WelcomeHeader>
            <FlexView flex='2'></FlexView>
            <UsernameInput ></UsernameInput>
            <FlexView flex='0.5'></FlexView>
            <PasswordInput ></PasswordInput>
            <FlexView flex='4'></FlexView>
            <WelcomeButton text={labels.login}>
            </WelcomeButton>
            <FlexView flex='4'></FlexView>
        </View>
    )
};

export default LoginView;