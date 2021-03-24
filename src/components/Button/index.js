import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Text} from 'react-native';
import getStyles, {buttonInsets} from 'components/Button/styles';
import textStyles from 'components/TextView/styles';

export default function Button({disabled, onPress, text}) {
  const styles = getStyles(disabled);

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      hitSlop={buttonInsets}
      disabled={disabled}>
      <Text style={{...textStyles.h3, ...styles.buttonText}}>{text}</Text>
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  disabled: false,
  onPress: () => {},
  text: 'Button',
};

Button.propTypes = {
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  text: PropTypes.string,
};
