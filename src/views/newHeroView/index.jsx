import { View } from "react-native";
import { WelcomeHeader, HeroNameInput, FlexView, CreateHeroButton } from '../../components';
import { styles } from "./styles";
import { labels } from "../../labels/labels";

const NewHeroView = ({ navigation }) => {
    const text = ["Choose a name", "for your hero"];
    return (
        <View style={styles.view}>
            <FlexView flex='3'></FlexView>
            <WelcomeHeader text={text}>
            </WelcomeHeader>
            <FlexView flex='2'></FlexView>
            <HeroNameInput></HeroNameInput>
            <FlexView flex='5.5'></FlexView>
            <CreateHeroButton navigation={navigation}></CreateHeroButton>
            <FlexView flex='4'></FlexView>
        </View>
    );
};

export default NewHeroView;