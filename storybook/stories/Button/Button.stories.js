import {action} from '@storybook/addon-actions';
import {boolean, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {View} from 'react-native';
import Button from 'components/Button';
import styles from 'components/Button/styles';
import CenterView from '../CenterView';

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Standard Button', () => (
    <View style={styles.container}>
      <Button
        disabled={boolean('Disabled', false)}
        onPress={action('clicked-text')}
        text={text('Button Text', 'Button')}
      />
    </View>
  ));
