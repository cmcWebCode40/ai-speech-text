import { fontPixel } from 'libs/helpers';
import { useThemedStyles } from 'libs/hooks';
import { Theme } from 'libs/themes';
import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

type TypeShapeForHeading = 'h1' | 'h2';
type TypeShapeForParagraph = 'p1' | 'p2';
type TypographyProps = {
  variant?: TypeShapeForHeading | TypeShapeForParagraph;
} & TextProps;

export const Typography: React.FunctionComponent<TypographyProps> = ({
  variant = 'p1',
  style,
  ...otherProps
}) => {
  const BaseStyles = useThemedStyles(styles);
  return (
    <Text
      style={[BaseStyles.container, BaseStyles[variant], style]}
      {...otherProps}
    />
  );
};

const styles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      color: theme.colors.text,
    },
    h1: {
      fontSize: fontPixel(theme.fontSize.xxxl),
      fontWeight: '700',
      color: theme.colors.text,
    },
    h2: {
      fontSize: fontPixel(theme.fontSize.xxl),
      fontWeight: '900',
    },
    p1: {
      fontSize: fontPixel(theme.fontSize.l),
      color: theme.colors.textSecondary,
      fontWeight: '600',
    },
    p2: {
      fontSize: fontPixel(theme.fontSize.m),
      color: theme.colors.textSecondary,
    },
  });
};
