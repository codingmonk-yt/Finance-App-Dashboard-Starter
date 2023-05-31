import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// hooks
import useActiveLink from '../../../hooks/useActiveLink';
//
import NavItem from './NavItem';

// ----------------------------------------------------------------------

NavList.propTypes = {
  data: PropTypes.object,
};

export default function NavList({ data }) {
  const { pathname } = useLocation();

  const { active, isExternalLink } = useActiveLink(data.path);

  const [open, setOpen] = useState(active);

  useEffect(() => {
    if (!active) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <NavItem
      item={data}
      open={open}
      active={active}
      isExternalLink={isExternalLink}
      onClick={handleToggle}
    />
  );
}
