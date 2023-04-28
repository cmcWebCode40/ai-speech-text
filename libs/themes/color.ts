const common = {
  primary: '#E53714',
  success: '#16a34a',
  error: '#dc2626',
  white: '#fff',
  black: '#000',
  gray100: '#F6F7F9',
  transparent: 'rgba(0, 0, 0, 0.42)',
  inActive: '#C4C4C4',
};

const light = {
  ...common,
  text: '#000',
  background: '#fff',
  textSecondary: '#4b5563',
};

const dark = {
  ...common,
  text: '#fff',
  background: '#023047',
  textSecondary: '#ccc',
};

export const colors = {
  light,
  dark,
};
