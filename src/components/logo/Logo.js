import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Link, Stack, Typography } from '@mui/material';
import { useSettingsContext } from '../settings';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  const { themeLayout } = useSettingsContext();

  const isNavMini = themeLayout === 'mini';

  const logo = (
    <Stack
      ref={ref}
      direction="row"
      justifyContent="center"
      sx={{
        width: 1,
        ...sx,
      }}
      {...other}
    >
      <Typography variant="h5">{isNavMini ? 'Cash' : 'Cashify'}</Typography>
    </Stack>
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} to="/" sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  sx: PropTypes.object,
  disabledLink: PropTypes.bool,
};

export default Logo;
