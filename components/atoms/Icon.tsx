import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { SvgProps } from 'react-native-svg';

export type IconName =
  | 'reader-outline'
  | 'chevron-back'
  | 'copy-outline'
  | 'close'
  | 'home-outline';

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
    case 'reader-outline':
      return <Ionicons name={name} size={size} {...otherProps} />;
    case 'chevron-back':
      return <Ionicons name={name} size={size} {...otherProps} />;
    case 'copy-outline':
      return <Ionicons name={name} size={size} {...otherProps} />;
    case 'close':
      return <Ionicons name={name} size={size} {...otherProps} />;
    case 'home-outline':
      return <Ionicons name={name} size={size} {...otherProps} />;
    default:
      throw new Error('Icon not supported');
  }
};
