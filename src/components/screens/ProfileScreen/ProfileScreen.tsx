import {Dimensions, StyleSheet, View} from 'react-native';
import React from 'react';

import {Avatar, Divider, Text} from 'react-native-paper';

import {useAppSelector} from 'src/hooks/reduxHooks';
import {getInitials, isValidProfile} from 'src/utils/helpers';
import containers from 'src/styles/containers';
import {getThemedStyles} from 'src/utils/theme';
import {options} from 'src/constants/profile';
import ProfileOption from './ProfileOption';

const {width: WINDOW_WIDTH} = Dimensions.get('window');
const avatarWidth = Math.floor(0.3 * WINDOW_WIDTH);

const ProfileScreen = () => {
  const profile = useAppSelector(state => state.profileReducer.profile);
  const theme = useAppSelector(state => state.themeReducer.theme);

  if (!isValidProfile(profile)) {
    return <></>;
  }

  const {name} = profile;
  const initials = getInitials({name});

  return (
    <View
      style={[
        styles.container,
        getThemedStyles({backgroundColor: theme?.backgroundColor}),
      ]}>
      {/* TODO: add header later */}
      <Avatar.Text label={initials} size={avatarWidth} />
      <Text variant="titleLarge" style={styles.name}>
        {profile.name}
      </Text>
      <Divider
        style={[
          styles.divider,
          getThemedStyles({backgroundColor: theme?.borderPrimary}),
        ]}
        bold
      />
      {options.map(option => (
        <ProfileOption key={option.id} option={option} />
      ))}
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...containers.columnStartCenter,
    paddingHorizontal: 16,
    paddingTop: 48,
    backgroundColor: 'blue',
  },
  divider: {
    marginTop: 42,
  },
  name: {
    marginTop: 16,
  },
});
