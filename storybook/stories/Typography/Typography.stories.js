import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View} from 'react-native';
import TextView from 'components/TextView';

import styles from 'components/TextView/styles';

import {initThemes} from 'helpers/themes';
initThemes('light');

storiesOf('Typography', module)
  .add('Headings', () => (
    <View style={styles.container}>
      <TextView
        exampleText={text('H1 Text', 'Example Text')}
        text="Header (H1)"
        type="h1"
      />
      <TextView
        exampleText={text('H2 Text', 'Example Text')}
        text="Header (H2)"
        type="h2"
      />
      <TextView
        exampleText={text('H3 Text', 'Example Text')}
        text="Header (H3)"
        type="h3"
      />
    </View>
  ))
  .add('Paragraphs', () => (
    <View style={styles.container}>
      <TextView
        exampleText={text('P1 Text', 'Example Text')}
        text="Body (P1)"
        type="p1"
      />
      <TextView
        exampleText={text('P2 Text', 'Example Text')}
        text="Body (P2)"
        type="p2"
      />
    </View>
  ));
