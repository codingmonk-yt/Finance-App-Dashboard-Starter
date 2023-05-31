import PropTypes from 'prop-types';
// @mui
import { List, Stack } from '@mui/material';
import NavList from './NavList';

// ----------------------------------------------------------------------

NavSectionVertical.propTypes = {
  sx: PropTypes.object,
  data: PropTypes.array,
};

export default function NavSectionVertical({ data, sx, ...other }) {

  return (
    <Stack sx={sx} {...other}>
      {data.map((group) => {
        const key = group.items[0].title;

        return (
          <List key={key} disablePadding sx={{ px: 2 }}>
            {group.items.map((list) => (
              <NavList
                key={list.title + list.path}
                data={list}
              />
            ))}
          </List>
        );
      })}
    </Stack>
  );
}
