import { useNavigation } from '@react-navigation/native';
import { pixelSizeVertical } from 'libs/helpers';
import { useThemedStyles } from 'libs/hooks';
import { theme } from 'libs/themes';
import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import { Icon } from 'components/atoms';

export const HeaderNavigation: React.FunctionComponent = () => {
  const navigation = useNavigation();
  const style = useThemedStyles(styles);
  return (
    <View
      style={[
        style.container,
        Platform.select({
          ios: {
            borderBottomWidth: 1,
            borderBottomColor: theme.colors.gray100,
          },
          android: { elevation: 1 },
        }),
      ]}
    >
      {navigation.canGoBack() && (
        <Icon name='chevron-back' onPress={navigation.goBack} />
      )}
    </View>
  );
};

const styles = () => {
  return StyleSheet.create({
    container: {
      paddingVertical: pixelSizeVertical(8),
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
};
