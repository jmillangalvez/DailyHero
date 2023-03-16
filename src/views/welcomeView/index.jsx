import { View } from "react-native";
import { WelcomeButton, WelcomeHeader, FlexView } from '../../components';
import { styles } from "./styles";
import { labels } from "../../labels/labels";

const WelcomeView = ({ navigation }) => {
    return (
        <View style={styles.view}>
            <FlexView flex='4.5'></FlexView>
            <WelcomeHeader text={labels.appName}>
            </WelcomeHeader>
            <FlexView flex='4.5'></FlexView>
            <WelcomeButton text={labels.login} navigation={navigation}>
            </WelcomeButton>
            <FlexView flex='0.5'></FlexView>
            <WelcomeButton text={labels.register} navigation={navigation}>
            </WelcomeButton>
            <FlexView flex='5'></FlexView>
        </View>
    )
};

export default WelcomeView;