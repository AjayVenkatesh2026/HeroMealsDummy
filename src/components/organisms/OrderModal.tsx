import {Dimensions, StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {Button, Icon, Modal, Text} from 'react-native-paper';
import {useAppSelector} from 'src/hooks/reduxHooks';
import {getThemedStyles} from 'src/utils/theme';
import containers from 'src/styles/containers';
import font from 'src/styles/font';

const {height: WINDOW_HEIGHT} = Dimensions.get('window');
const modalHeigh = Math.floor(WINDOW_HEIGHT * 0.5);

interface IOrderModalProps {
  visible: boolean;
  icon: string;
  description: string;
  buttonLabel: string;
  buttonColor?: string;
  iconColor?: string;
  onPressButton: () => void;
}

const OrderModal: FC<IOrderModalProps> = ({
  visible = false,
  icon,
  description,
  buttonColor,
  buttonLabel,
  iconColor,
  onPressButton,
}) => {
  const theme = useAppSelector(state => state.themeReducer.theme);

  return (
    <Modal
      visible={visible}
      style={[
        styles.container,
        getThemedStyles({backgroundColor: theme?.modalBakcground}),
      ]}>
      <View
        style={[
          styles.contentContainer,
          getThemedStyles({backgroundColor: theme?.surface}),
        ]}>
        <Icon source={icon} size={100} color={iconColor} />
        <Text variant="bodyLarge" style={styles.description}>
          {description}
        </Text>
        <Button
          mode="contained"
          style={styles.button}
          labelStyle={font.medium}
          onPress={onPressButton}
          buttonColor={buttonColor}>
          {buttonLabel}
        </Button>
      </View>
    </Modal>
  );
};

export default OrderModal;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 22,
  },
  contentContainer: {
    ...containers.columnCenterCenter,
    height: modalHeigh,
    borderRadius: 16,
  },
  description: {
    ...font.medium,
    width: '60%',
    textAlign: 'center',
    paddingTop: 24,
  },
  button: {
    marginTop: 32,
    width: '60%',
  },
});
