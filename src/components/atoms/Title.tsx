import {StyleProp, TextStyle, View, ViewStyle} from 'react-native';
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
  containerStyles?: StyleProp<ViewStyle>;
  showSeeAll?: boolean;
  rightText?: string;
  titleStyles?: StyleProp<TextStyle>;
}

const Title: React.FC<ITitleProps> = ({
  title,
  onPress = () => null,
  containerStyles = {},
  showSeeAll = true,
  rightText = '',
  titleStyles = {},
}) => {
  const theme = useAppSelector(state => state.themeReducer.theme);

  return (
    <View style={[containers.rowCenterBetween, containerStyles]}>
      <Text
        variant="titleMedium"
        style={[
          font.bold,
          getThemedStyles({color: theme?.textHigh}),
          titleStyles,
        ]}>
        {title}
      </Text>
      {showSeeAll ? (
        <Button onPress={onPress}>
          <Text
            variant="bodyMedium"
            style={[
              font.semiBold,
              getThemedStyles({color: theme?.primaryDefault}),
            ]}>
            {rightText || SEE_ALL}
          </Text>
        </Button>
      ) : null}
    </View>
  );
};

export default Title;
