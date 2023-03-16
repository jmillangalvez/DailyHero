import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../theme';

export const styles = StyleSheet.create({
  buttonView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: '45%',
    height: '100%',
    borderRadius: 15,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: colors.primary,
    fontFamily: fonts.regular,
    fontSize: fonts.md
  }
});