import { View } from "react-native";
import { WelcomeButton, WelcomeHeader, WelcomeInput, FlexView } from '../../components';
import { styles } from "./styles";
import { labels } from "../../labels/labels";

const RegisterView = () => {
    return (
        <View style={styles.view}>
            <FlexView flex='3'></FlexView>
            <WelcomeHeader text={labels.register}>
            </WelcomeHeader>
            <FlexView flex='2'></FlexView>
            <WelcomeInput placeholder={labels.userName}></WelcomeInput>
            <FlexView flex='0.5'></FlexView>
            <WelcomeInput placeholder={labels.email}></WelcomeInput>
            <FlexView flex='0.5'></FlexView>
            <WelcomeInput placeholder={labels.password} isPassword='true'></WelcomeInput>
            <FlexView flex='2.5'></FlexView>
            <WelcomeButton text={labels.register}>
            </WelcomeButton>
            <FlexView flex='4'></FlexView>
        </View>
    )
};

export default RegisterView;