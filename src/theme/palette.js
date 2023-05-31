import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

// SETUP COLORS

const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
};

const PRIMARY = {
  lighter: '#EFF9E1',
  light: '#CAE0B7',
  main: '#AECC9B',
  dark: '#85AF71',
  darker: '#60924E',
  contrastText: '#fff',
};

const SECONDARY = {
  lighter: '#DDC764',
  light: '#BCA13B',
  main: '#90710D',
  dark: '#7B5D09',
  darker: '#674B06',
  contrastText: '#fff',
};

const INFO = {
  lighter: '#5BA0E5',
  light: '#3379CC',
  main: '#0047AB',
  dark: '#003693',
  darker: '#00287B',
  contrastText: '#fff',
};

const SUCCESS = {
  lighter: '#7CE5B4',
  light: '#57CCA0',
  main: '#29AB87',
  dark: '#1D937E',
  darker: '#147B72',
  contrastText: '#fff',
};

const WARNING = {
  lighter: '#FFD4C2',
  light: '#FF9D8D',
  main: '#FF7068',
  dark: '#DB4C50',
  darker: '#932137',
  contrastText: GREY[800],
};

const ERROR = {
  lighter: '#FDC0AA',
  light: '#FBA895',
  main: '#FA8072',
  dark: '#D75653',
  darker: '#B33940',
  contrastText: '#fff',
};

const COMMON = {
  common: { black: '#000', white: '#fff' },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.24),
  action: {
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default function palette(themeMode) {
  const light = {
    ...COMMON,
    mode: 'light',
    text: {
      primary: GREY[800],
      secondary: GREY[600],
      disabled: GREY[500],
    },
    background: { paper: '#fff', default: '#fff', neutral: GREY[200] },
    action: {
      ...COMMON.action,
      active: GREY[600],
    },
  };

  const dark = {
    ...COMMON,
    mode: 'dark',
    text: {
      primary: '#fff',
      secondary: GREY[500],
      disabled: GREY[600],
    },
    background: {
      paper: GREY[800],
      default: GREY[900],
      neutral: alpha(GREY[500], 0.16),
    },
    action: {
      ...COMMON.action,
      active: GREY[500],
    },
  };

  return themeMode === 'light' ? light : dark;
}
