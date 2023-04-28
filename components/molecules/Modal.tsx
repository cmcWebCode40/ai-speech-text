import { screenHeight } from 'libs/helpers';
import { useThemedStyles } from 'libs/hooks';
import { Theme } from 'libs/themes';
import React from 'react';
import {
  Modal as RNModal,
  ModalProps as RNModalProps,
  Pressable,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

import { Icon, Typography } from 'components/atoms';

type ModalProps = {
  title?: string;
  visible: boolean;
  hiddenCloseIcon?: boolean;
  onClose?: () => void;
  contentStyles?: ViewStyle;
  children: React.ReactNode;
} & RNModalProps;

export const Modal = ({
  onClose,
  visible,
  children,
  title,
  hiddenCloseIcon = false,
  contentStyles,
  transparent = true,
  animationType = 'slide',
  ...rest
}: ModalProps) => {
  const style = useThemedStyles(styles);
  return (
    <RNModal
      {...rest}
      transparent={transparent}
      visible={visible}
      animationType={animationType}
      onRequestClose={onClose}
    >
      <View style={style.container}>
        <View style={style.spacer} />
        <View style={[style.centeredView, contentStyles]}>
          <View style={style.header}>
            {title && <Typography variant='h2'>{title}</Typography>}
            <View />
            {!hiddenCloseIcon && (
              <Pressable
                style={({ pressed }) => [
                  {
                    opacity: pressed ? 0.7 : 1,
                  },
                ]}
                onPress={onClose}
              >
                <Icon name='close' size={24} />
              </Pressable>
            )}
          </View>
          {title && <View style={style.divider} />}
          <View>{children}</View>
        </View>
      </View>
    </RNModal>
  );
};

const styles = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
      backgroundColor: theme.colors.transparent,
    },
    header: {
      padding: 16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    centeredView: {
      flex: 1,
      position: 'absolute',
      height: screenHeight - 120,
      bottom: 0,
      width: '100%',
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      opacity: 1,
      backgroundColor: theme.colors.background,
    },
    spacer: {
      marginTop: 64,
    },
    divider: {
      height: 0.4,
    },
  });
};
