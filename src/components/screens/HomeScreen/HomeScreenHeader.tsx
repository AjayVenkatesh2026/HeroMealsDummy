import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

import {Searchbar} from 'react-native-paper';

import Header from 'src/components/molecules/Header';
import font from 'src/styles/font';
import {useAppSelector} from 'src/hooks/reduxHooks';
import {getMergedAddress, isValidProfile} from 'src/utils/helpers';
import {getThemedStyles} from 'src/utils/theme';
import {CART_OUTLINE, GOOGLE_MAPS} from 'src/constants/icons';
import copies from 'src/constants/copies';

const {CART, SEARCH} = copies;

const HomeScreenHeader = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const theme = useAppSelector(state => state.themeReducer.theme);
  const profile = useAppSelector(state => state.profileReducer.profile);
  const {name = '', address = {}} = isValidProfile(profile) ? profile : {};
  const mergedAddress = getMergedAddress({address});

  return (
    <View
      style={[
        getThemedStyles({
          backgroundColor: theme?.primaryDark,
        }),
      ]}>
      <Header
        leadingIcon={GOOGLE_MAPS}
        trailingIcon={CART_OUTLINE}
        trailingIconLabel={CART}
        trailingIconStyles={styles.trailingIconStyles}
        containerStyles={getThemedStyles({
          backgroundColor: theme?.primaryDark,
        })}>
        <View style={styles.contentContainer}>
          <Text
            style={[styles.title, getThemedStyles({color: theme?.bgTextHigh})]}>
            {name}
          </Text>
          <Text
            style={[styles.address, getThemedStyles({color: theme?.bgTextMid})]}
            numberOfLines={1}
            ellipsizeMode="tail">
            {mergedAddress}
          </Text>
        </View>
      </Header>
      <View style={styles.searchBarContainer}>
        <Searchbar
          value={searchQuery}
          placeholder={SEARCH}
          onChangeText={setSearchQuery}
          // TODO: implement search
          onSubmitEditing={() => null}
        />
      </View>
    </View>
  );
};

export default HomeScreenHeader;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingTop: 12,
  },
  title: {
    ...font.semiBold,
    fontSize: 16,
  },
  address: {
    ...font.regular,
    fontSize: 13,
    maxWidth: 240,
  },
  trailingIconStyles: {
    padding: 0,
    margin: 0,
  },
  searchBarContainer: {
    padding: 16,
  },
});
