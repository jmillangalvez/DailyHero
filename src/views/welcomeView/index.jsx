import { View } from "react-native";
import { WelcomeButton, WelcomeHeader, FlexView } from '../../components';
import { styles } from "./styles";
import { labels } from "../../labels/labels";

const WelcomeView = () => {
    return (
        <View style={styles.view}>
            <FlexView flex='4.5'></FlexView>
            <WelcomeHeader text={labels.appName}>
            </WelcomeHeader>
            <FlexView flex='4.5'></FlexView>
            <WelcomeButton text={labels.login}>
            </WelcomeButton>
            <FlexView flex='0.5'></FlexView>
            <WelcomeButton text={labels.register}>
            </WelcomeButton>
            <FlexView flex='5'></FlexView>
        </View>
    )
};

export default WelcomeView;