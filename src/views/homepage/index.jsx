import { View } from "react-native";
import { AppHeader, FlexView } from '../../components';
import { styles } from "./styles";

const HomepageView = ({ navigation }) => {
    return (
        <View style={styles.view}>
            <FlexView flex='1'></FlexView>
            <AppHeader>
            </AppHeader>
            <FlexView flex='15.5 '></FlexView>
        </View>
    );
};

export default HomepageView;