import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Link } from '@mui/material';
import { StyledItem, StyledIcon } from './styles';

// ----------------------------------------------------------------------

const NavItem = forwardRef(({ item, active, isExternalLink, ...other }, ref) => {
  const { path, icon, disabled } = item;

  const renderContent = (
    <StyledItem ref={ref} active={active} disabled={disabled} {...other}>
      {icon && <StyledIcon>{icon}</StyledIcon>}
    </StyledItem>
  );

  const renderItem = () => {
    // ExternalLink
    if (isExternalLink)
      return (
        <Link href={path} target="_blank" rel="noopener" underline="none">
          {renderContent}
        </Link>
      );

    // Default
    return (
      <Link component={RouterLink} to={path} underline="none">
        {renderContent}
      </Link>
    );
  };

  return renderItem();
});

NavItem.propTypes = {
  active: PropTypes.bool,
  item: PropTypes.object,
  depth: PropTypes.number,
  isExternalLink: PropTypes.bool,
};

export default NavItem;
