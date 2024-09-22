import {Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import {IProfileOption} from 'src/types/global';
import {Card, Menu} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const {width: WINDOW_WIDTH} = Dimensions.get('window');

const ProfileOption = ({option}: {option: IProfileOption}) => {
  const navigation = useNavigation();
  const {icon, name, onClick, trailingIcon = ''} = option;

  const onClickOption = () => {
    onClick({navigation});
  };

  return (
    <Card style={styles.container}>
      <Menu.Item
        title={name}
        leadingIcon={icon}
        trailingIcon={trailingIcon}
        contentStyle={styles.contentStyle}
        style={styles.item}
        onPress={onClickOption}
      />
    </Card>
  );
};

export default ProfileOption;

const styles = StyleSheet.create({
  container: {
    maxWidth: WINDOW_WIDTH,
    width: '100%',
    marginBottom: 12,
  },
  item: {
    maxWidth: WINDOW_WIDTH,
  },
  contentStyle: {
    flex: 1,
    maxWidth: WINDOW_WIDTH,
  },
});
