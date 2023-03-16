import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../theme';

export const styles = StyleSheet.create({
    inputView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      width: '75%',
      height: '100%',
      borderRadius: 15,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      color: colors.secondary,
      borderColor: colors.secondary,
      borderStyle: 'solid',
      borderWidth: 2,
      paddingLeft: 15,
      paddingRight: 15,
      fontFamily: fonts.regular,
      fontSize: fonts.sm
    }
  });