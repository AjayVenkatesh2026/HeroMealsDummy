import {Image, type ImageProps} from 'react-native';
import React from 'react';

import defautImage from 'src/assets/default.png';
import {isValidHttpUrl} from 'src/utils/helpers';

interface FDAImage extends ImageProps {
  url?: string;
}

const FDAImage = ({url, source, ...restProps}: FDAImage) => {
  const src = url ? (isValidHttpUrl(url) ? {uri: url} : defautImage) : source;

  return <Image source={src} {...restProps} />;
};

export default FDAImage;
