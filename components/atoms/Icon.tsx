import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { SvgProps } from 'react-native-svg';

type IconName =
  | 'reader-outline'
  | 'add'
  | 'bulb-outline'
  | 'add-circle'
  | 'share-outline'
  | 'chevron-back';

type IconProps = {
  name: IconName;
  size?: number;
} & SvgProps;

export const Icon: React.FunctionComponent<IconProps> = ({
  name,
  size = 24,
  ...otherProps
}) => {
  switch (name) {
    case 'share-outline':
      return <Ionicons name={name} size={size} {...otherProps} />;
    case 'reader-outline':
      return <Ionicons name={name} size={size} {...otherProps} />;
    case 'bulb-outline':
      return <Ionicons name={name} size={size} {...otherProps} />;
    case 'chevron-back':
      return <Ionicons name={name} size={size} {...otherProps} />;
    default:
      throw new Error('Icon not supported');
  }
};
