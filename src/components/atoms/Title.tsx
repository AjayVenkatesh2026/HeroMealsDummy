import {View} from 'react-native';
import React from 'react';

import {Button, Text} from 'react-native-paper';

import {useAppSelector} from 'src/hooks/reduxHooks';
import containers from 'src/styles/containers';
import font from 'src/styles/font';
import {getThemedStyles} from 'src/utils/theme';
import copies from 'src/constants/copies';

const {SEE_ALL} = copies;

interface ITitleProps {
  title: string;
  onPress?: () => void;
}

const Title: React.FC<ITitleProps> = ({title, onPress = () => null}) => {
  const theme = useAppSelector(state => state.themeReducer.theme);

  return (
    <View style={containers.rowCenterBetween}>
      <Text
        variant="titleMedium"
        style={[font.bold, getThemedStyles({color: theme?.textHigh})]}>
        {title}
      </Text>
      <Button onPress={onPress}>
        <Text
          variant="bodyMedium"
          style={[
            font.semiBold,
            getThemedStyles({color: theme?.primaryDefault}),
          ]}>
          {SEE_ALL}
        </Text>
      </Button>
    </View>
  );
};

export default Title;
