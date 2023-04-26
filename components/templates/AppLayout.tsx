import { pixelSizeHorizontal, pixelSizeVertical } from 'libs/helpers';
import { useThemedStyles } from 'libs/hooks/useThemedStyles';
import { Theme } from 'libs/themes/theme';
import React from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  ScrollViewProps,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

type AppLayoutProps = {
  children: React.ReactNode;
  withScrollView?: boolean;
  containerStyle?: ViewStyle;
} & ScrollViewProps;

export const AppLayout: React.FunctionComponent<AppLayoutProps> = ({
  children,
  style: scrollViewStyle,
  containerStyle,
  withScrollView = true,
  ...otherProps
}) => {
  const baseStyle = useThemedStyles(styles);

  if (withScrollView) {
    return (
      <SafeAreaView
        style={[baseStyle.container, containerStyle]}
        {...otherProps}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={[baseStyle.container, scrollViewStyle]}
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[baseStyle.container, containerStyle]}>
      <View style={baseStyle.container}>{children}</View>
    </SafeAreaView>
  );
};

const styles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.select({
        ios: pixelSizeVertical(12),
        android: pixelSizeVertical(28),
      }),
      paddingHorizontal: Platform.select({
        ios: pixelSizeHorizontal(20),
        android: pixelSizeHorizontal(12),
      }),
      backgroundColor: theme.colors.background,
    },
  });
};
