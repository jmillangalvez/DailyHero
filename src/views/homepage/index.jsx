import { View } from "react-native";
import { WelcomeHeader, FlexView } from '../../components';
import { styles } from "./styles";

const HomepageView = ({ navigation }) => {
    return (
        <View style={styles.view}>
            <FlexView flex='3'></FlexView>
            <WelcomeHeader text='Homepage'>
            </WelcomeHeader>
            <FlexView flex='13.5 '></FlexView>
        </View>
    );
};

export default HomepageView;