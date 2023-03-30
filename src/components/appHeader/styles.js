import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../theme';

export const styles = StyleSheet.create({
  headerView:{
    flex: 2,
    flexDirection: 'row'
  },
  headerText: {
    color: colors.secondary,
    fontFamily: fonts.regular,
    fontSize: fonts.md
  }
});