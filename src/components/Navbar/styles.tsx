import styled, { css } from 'styled-components'
import { NavlinkProps, ResponsiveNavBarProps } from './types'

// Main container
export const StyledNavbarWrapper = styled.div`
    ${({ theme }) => {
        return css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          background-color: ${theme.color.base1};

          @media (max-width: 480px) {
            display: block;
            padding: 0;
          }
        `
    }}
`

// A wrapper for the logo and burger icon (heading in mobile)
export const StyledHeadingWrapper = styled.div<ResponsiveNavBarProps>`
  ${({ theme, isOpen}) => {
    return css`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 25px;
      background-color: ${isOpen ? '#07071366' : theme.color.base1};
    `
  }}
`

// A wrapper for the burger icon, that is hidden on desktop
export const StyledBurgerIconWrapper = styled.div`
  ${() => {
    return css`
      display: none;

      @media (max-width: 480px) {
        display: block;
      }
    `
  }}
`

// A <nav> element, wrapping the links (text and buttons)
export const StyledNavWrapper = styled.nav<ResponsiveNavBarProps>`
  ${({ isOpen }) => {
    return css`
      display: flex;
      align-items: center;
      margin: 0;

      @media (max-width: 480px) {
        display: ${isOpen ? 'block' : 'none'};
        padding-bottom: 25px;
      }
    `
  }}
`

// A <ul> element, wrapping the links (text and buttons)
export const StyledNavlinks = styled.ul`
    ${() => {
        return css`
          display: flex;
          align-items: center;
          list-style: none;
          padding: 0;
          margin: 0;

          @media (max-width: 480px) {
            display: list-item;
            list-style: none;
            padding: 0 25px;

            &::first-child {
              margin-top: 25px;
            }
          }
        `
    }}
`

// A <li> element, wrapping the links (text only), separated by a slash
export const StyledNavlink = styled.li<NavlinkProps>`
  ${({ withSlash }) => {
    return css`
      font-weight: 400;

      a,
      span {
        color: inherit;
        text-decoration: none;
      }

      ${withSlash
        ? css`
            &:not(:last-child)::after {
              content: '/';
              display: inline-block;
              padding: 0 1rem;
            }
          `
        : css`
            padding: 0 1rem;
          `}

      @media (max-width: 480px) {
        margin: 10px 0;

        &:not(:last-child)::after {
          content: '';
        }
        padding: 0;
      }
    `
  }}
`
