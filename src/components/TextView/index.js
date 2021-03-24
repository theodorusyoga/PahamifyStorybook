import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import styles from 'components/TextView/styles';

export default function TextView({exampleText, text, type}) {
  return (
    <View style={styles.typographyContainer}>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles[type]}>{exampleText}</Text>
    </View>
  );
}

TextView.defaultProps = {
  text: '',
};

TextView.propTypes = {
  text: PropTypes.string,
};
