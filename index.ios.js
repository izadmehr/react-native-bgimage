'use strict';
import React from 'react'
import { Image } from 'react-native';

const BgImage = (props) => {
  return <Image
    resizeMode="repeat"
    {...props}
  >
    {props.children}
  </Image>;
};

module.exports = BgImage;