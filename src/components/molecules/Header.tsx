import {View, type GestureResponderEvent} from 'react-native';
import React, {PropsWithChildren} from 'react';

import {Appbar, Text} from 'react-native-paper';

import containers from 'src/styles/containers';
import type {Style} from 'src/types/global';
import {useAppSelector} from 'src/hooks/reduxHooks';
import {getThemedStyles} from 'src/utils/theme';

type HeaderProps = {
  leadingIcon: string;
  trailingIcon: string;
  onPressLeadingIcon?: (event?: GestureResponderEvent) => void;
  onPressTrailingIcon?: (event?: GestureResponderEvent) => void;
  trailingIconStyles?: Style;
  trailingIconLabel?: string;
  containerStyles?: Style;
};

const Header = ({
  leadingIcon,
  trailingIcon,
  onPressLeadingIcon,
  onPressTrailingIcon,
  trailingIconStyles = {},
  trailingIconLabel = '',
  children,
  containerStyles = {},
}: PropsWithChildren<HeaderProps>) => {
  const theme = useAppSelector(state => state.themeReducer.theme);

  return (
    <Appbar.Header style={[containerStyles]}>
      {leadingIcon ? (
        <Appbar.Action
          icon={leadingIcon}
          color={theme?.bgTextHigh}
          onPress={onPressLeadingIcon}
        />
      ) : null}
      {children}
      <View style={{...containers.columnCenterCenter}}>
        <Appbar.Action
          icon={trailingIcon}
          onPress={onPressTrailingIcon}
          color={theme?.bgTextHigh}
          style={trailingIconStyles}
        />
        {trailingIconLabel ? (
          <Text
            variant="bodySmall"
            style={getThemedStyles({color: theme?.bgTextHigh})}>
            {trailingIconLabel}
          </Text>
        ) : null}
      </View>
    </Appbar.Header>
  );
};

export default Header;
