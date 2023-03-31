import { View } from "react-native";
import { WelcomeHeader, UsernameInput, PasswordInput, FlexView, LoginButton } from '../../components';
import { styles } from "./styles";
import { labels } from "../../labels/labels";

const LoginView = ({ navigation }) => {
    const text = [labels.login];
    return (
        <View style={styles.view}>
            <FlexView flex='3'></FlexView>
            <WelcomeHeader text={text}>
            </WelcomeHeader>
            <FlexView flex='2'></FlexView>
            <UsernameInput ></UsernameInput>
            <FlexView flex='0.5'></FlexView>
            <PasswordInput ></PasswordInput>
            <FlexView flex='4'></FlexView>
            <LoginButton navigation={navigation}></LoginButton>
            <FlexView flex='4'></FlexView>
        </View>
    );
};

export default LoginView;