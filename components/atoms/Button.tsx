import {
  fontPixel,
  pixelSizeHorizontal,
  pixelSizeVertical,
} from 'libs/helpers';
import { useThemedStyles } from 'libs/hooks';
import { Theme } from 'libs/themes';
import React from 'react';
import { Pressable, PressableProps, StyleSheet, TextStyle } from 'react-native';

import { Typography } from './Typography';

type ButtonVariant = 'text' | 'contained' | 'outlined';
type ButtonSize = 'small' | 'medium' | 'large';

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  TypographgyStyles?: TextStyle;
} & PressableProps;

export const Button: React.FunctionComponent<ButtonProps> = ({
  style,
  size = 'medium',
  variant,
  children,
  disabled,
  TypographgyStyles,
  ...otherProps
}) => {
  const baseStyle = useThemedStyles(styles);
  const textStyle = useThemedStyles(textStyles);

  const buttonSize =
    size === 'small'
      ? baseStyle.small
      : size === 'medium'
      ? baseStyle.medium
      : size === 'large'
      ? baseStyle.large
      : baseStyle.small;

  const buttonVariant =
    variant === 'text'
      ? baseStyle.text
      : variant === 'contained'
      ? baseStyle.contained
      : variant === 'outlined'
      ? baseStyle.outlined
      : baseStyle.text;

  const disabledStyles = disabled ? baseStyle.disabled : {};

  const buttonStyles = {
    ...buttonSize,
    ...buttonVariant,
    ...disabledStyles,
    style,
  };

  return (
    <Pressable
      disabled={disabled}
      style={({ pressed }) => [
        baseStyle.container,
        {
          ...buttonStyles,
          opacity: pressed ? 0.8 : 1,
        },
      ]}
      {...otherProps}
    >
      <Typography
        variant='p2'
        style={[
          textStyle.content,
          TypographgyStyles,
          variant === 'contained' ? textStyle.light : textStyle.dark,
        ]}
      >
        {children}
      </Typography>
    </Pressable>
  );
};

const styles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 4,
      borderRadius: theme.radius.rounded,
    },
    content: {
      fontSize: theme.fontSize.m,
      fontWeight: '600',
      lineHeight: 21,
    },
    contained: {
      backgroundColor: theme.colors.primary,
    },
    outlined: {
      borderWidth: 1,
      borderColor: theme.colors.text,
      backgroundColor: 'transparent',
    },
    disabled: {
      backgroundColor: theme.colors.inActive,
    },
    text: {
      backgroundColor: 'transparent',
    },
    large: {
      paddingVertical: pixelSizeVertical(16),
      paddingHorizontal: pixelSizeHorizontal(20),
    },
    small: {
      paddingVertical: pixelSizeVertical(8),
      paddingHorizontal: pixelSizeHorizontal(15),
    },
    medium: {
      paddingVertical: pixelSizeVertical(12),
      paddingHorizontal: pixelSizeHorizontal(18),
    },
  });
};

const textStyles = (theme: Theme) => {
  return StyleSheet.create({
    content: {
      fontSize: fontPixel(theme.fontSize.l),
      fontWeight: '700',
      lineHeight: 24,
    },
    light: {
      color: theme.colors.white,
    },
    dark: {
      color: theme.colors.black,
    },
  });
};
