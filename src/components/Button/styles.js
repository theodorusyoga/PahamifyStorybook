import {createStylesheet} from 'helpers/themes';

export const buttonInsets = {
  top: 15,
  bottom: 15,
  left: 15,
  right: 15,
};

export default (disabled) =>
  createStylesheet({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: 300,
    },
    button: {
      flex: 0,
      alignItems: 'center',
      justifyContent: 'center',
      height: 40,
      width: 200,
      borderRadius: 24,
      backgroundColor: disabled ? '$disabledBg' : '$primaryBg',
    },
    buttonText: {
      color: '$white',
      marginHorizontal: 16,
      marginVertical: 0,
    },
  });
