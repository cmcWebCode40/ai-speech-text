import Toast, { ToastData, ToastOptions } from 'react-native-toast-message';

type ToastType = 'info' | 'error' | 'success';

type NotificationToaster = {
  type: ToastType;
  options: Omit<ToastOptions & ToastData, 'type'>;
};

// Toast library defined ToastType type as a string so this fix is for a better DX
export const notificationToaster = ({ type, options }: NotificationToaster) => {
  Toast.show({
    type,
    ...options,
  });
};
