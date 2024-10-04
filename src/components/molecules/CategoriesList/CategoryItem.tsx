import {Image, Pressable, StyleSheet} from 'react-native';
import React from 'react';

import {Text} from 'react-native-paper';

import {ICategoryItemProps} from 'src/types/molecules';
import font from 'src/styles/font';

const CategoryItem: React.FC<ICategoryItemProps> = ({category}) => {
  const {name, image} = category;

  const onPress = () => {};

  return (
    <Pressable onPress={onPress}>
      <Image source={{uri: image}} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  image: {
    width: 65,
    height: 65,
    resizeMode: 'contain',
  },
  text: {
    ...font.bold,
    fontSize: 6,
    textAlign: 'center',
  },
});
