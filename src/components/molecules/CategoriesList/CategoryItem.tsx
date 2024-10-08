import {Pressable, StyleSheet} from 'react-native';
import React from 'react';

import {Text} from 'react-native-paper';

import {ICategoryItemProps} from 'src/types/molecules';
import font from 'src/styles/font';
import FDAImage from 'src/components/atoms/FDAImage';

const CategoryItem: React.FC<ICategoryItemProps> = ({category}) => {
  const {name, image_url} = category;

  const onPress = () => {};

  return (
    <Pressable onPress={onPress}>
      <FDAImage url={image_url} style={styles.image} />
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
