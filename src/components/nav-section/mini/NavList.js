import PropTypes from 'prop-types';
import { useRef } from 'react';
// hooks
import useActiveLink from '../../../hooks/useActiveLink';
//
import NavItem from './NavItem';

// ----------------------------------------------------------------------

NavList.propTypes = {
  data: PropTypes.object,
};

export default function NavList({ data }) {
  const navRef = useRef(null);

  const { active, isExternalLink } = useActiveLink(data.path);

  return <NavItem ref={navRef} item={data} active={active} isExternalLink={isExternalLink} />;
}
