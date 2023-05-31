// @mui
import { styled } from '@mui/material/styles';
import { ListItemButton, ListItemIcon } from '@mui/material';
// config
import { ICON } from '../../../config-global';

// ----------------------------------------------------------------------

export const StyledItem = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'active' && prop !== 'open',
})(({ active, disabled, theme }) => {
  const isLight = theme.palette.mode === 'light';

  const activeStyle = {
    color: theme.palette.primary.main,
    ...(!isLight && {
      color: theme.palette.primary.light,
    }),
  };

  const hoverStyle = {
    color: theme.palette.text.primary,
  };

  return {
    flexDirection: 'column',
    textTransform: 'capitalize',
    padding: theme.spacing(1, 0, 0.5, 0),
    color: theme.palette.text.secondary,
    borderRadius: theme.shape.borderRadius,
    '&:hover': hoverStyle,
   
    // Active item
    ...(active && {
      ...activeStyle,
    }),
  };
});

// ----------------------------------------------------------------------

export const StyledIcon = styled(ListItemIcon)({
  marginRight: 0,
  marginBottom: 4,
  width: ICON.NAV_ITEM_MINI,
  height: ICON.NAV_ITEM_MINI,
});


