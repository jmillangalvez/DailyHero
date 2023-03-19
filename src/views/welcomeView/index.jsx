import { View } from "react-native";
import { WelcomeLoginButton, WelcomeRegisterButton, WelcomeHeader, FlexView } from '../../components';
import { styles } from "./styles";
import { labels } from "../../labels/labels";

const WelcomeView = ({ navigation }) => {
    return (
        <View style={styles.view}>
            <FlexView flex='4.5'></FlexView>
            <WelcomeHeader text={labels.appName}>
            </WelcomeHeader>
            <FlexView flex='4.5'></FlexView>
            <WelcomeLoginButton navigation={navigation}>
            </WelcomeLoginButton>
            <FlexView flex='0.5'></FlexView>
            <WelcomeRegisterButton navigation={navigation}>
            </WelcomeRegisterButton>
            <FlexView flex='5'></FlexView>
        </View>
    );
};

export default WelcomeView;