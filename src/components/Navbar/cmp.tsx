import React, { useState } from 'react';
import Button from '../Button';
import Icon from '../Icon';
import Logo from '../Logo';
import {
  StyledBurgerIconWrapper,
  StyledHeadingWrapper,
  StyledNavbarWrapper,
  StyledNavlinks,
  StyledNavlink,
  StyledNavWrapper,
} from './styles'
import { NavbarProps } from './types';

const Navbar = ({
  withLabel = true,
  withLogo = true,
  navLinks = [],
  navButtons = [],
  ...rest
}: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <StyledNavbarWrapper {...{ ...rest }}>
      <StyledHeadingWrapper isOpen={isOpen}>
        {withLogo && <Logo text={withLabel} />}

        <StyledBurgerIconWrapper>
          <Button
            color={'main0'}
            variant={'secondary'}
            kind={'neon'}
            size={'regular'}
            onClick={toggleIsOpen}
          >
            <Icon name="bars" />
          </Button>
        </StyledBurgerIconWrapper>
      </StyledHeadingWrapper>

      <StyledNavWrapper isOpen={isOpen}>
        {navLinks && (
          <StyledNavlinks>
            {navLinks.map((el, index) => (
              <StyledNavlink key={index} withSlash>
                {el}
              </StyledNavlink>
            ))}
          </StyledNavlinks>
        )}

        {navButtons && (
          <StyledNavlinks>
            {navButtons.map((el, index) => (
              <StyledNavlink key={index}>{el}</StyledNavlink>
            ))}
          </StyledNavlinks>
        )}
      </StyledNavWrapper>
    </StyledNavbarWrapper>
  )
};

export default Navbar