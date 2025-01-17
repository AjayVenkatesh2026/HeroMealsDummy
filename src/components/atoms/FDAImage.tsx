import {Image} from 'react-native';
import React from 'react';

import {isValidHttpUrl} from 'src/utils/helpers';
import type {FDAImage as FDAImageProps} from 'src/types/global';

import defautImage from 'src/assets/default.png';

const FDAImage = ({url, source, ...restProps}: FDAImageProps) => {
  const src = url ? (isValidHttpUrl(url) ? {uri: url} : defautImage) : source;

  return <Image source={src} {...restProps} />;
};

export default FDAImage;
