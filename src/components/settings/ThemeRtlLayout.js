import PropTypes from 'prop-types';
import { useEffect } from 'react';
// emotion
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
// @mui
import { useTheme } from '@mui/material/styles';

// ----------------------------------------------------------------------

ThemeRtlLayout.propTypes = {
  children: PropTypes.node,
};

export default function ThemeRtlLayout({ children }) {
  const theme = useTheme();

  useEffect(() => {
    document.dir = theme.direction;
  }, [theme.direction]);

  const cacheRtl = createCache({
    key: theme.direction === 'rtl' ? 'rtl' : 'css',
    stylisPlugins: [],
  });

  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
}
