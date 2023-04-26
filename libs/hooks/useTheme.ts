import { ThemeContext } from 'libs/context';
import { useContext } from 'react';

export const useTheme = () => {
  return useContext(ThemeContext);
};
