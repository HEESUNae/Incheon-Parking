import React from 'react';
import { StyledHeader } from './style';
import { ImageStore } from '../../constants/image';

const Header = () => {
  return (
    <StyledHeader>
      <div className="logo">
        <img src={ImageStore.logo} alt="인천광역시" />
      </div>
    </StyledHeader>
  );
};

export default Header;
