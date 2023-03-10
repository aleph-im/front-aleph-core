import styled, { css } from 'styled-components'
import Icon from '../../Icon'

export const StyledCheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`

export const StyledInputContainer = styled.div`
  flex: 0 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  margin-right: 1.125rem;
  border-radius: 8px;
  box-shadow: 0px 4px 24px #00000040;
`

export const StyledInput = styled.input`
  ${({ theme }) => {
    return css`
      position: absolute;
      inset: 0;
      appearance: none;
      outline: 0;
      cursor: pointer;
      border: 1px solid #FFFFFF4D;
      background: #FFFFFF0F;
      border-radius: 8px;
      width: 100%;
      height: 100%;
      margin: 0;

      &:checked {
        box-shadow: 
          3px 6px 20px -3px rgba(0, 255, 189, 0.18), 
          0px -2px 30px rgba(0, 255, 189, 0.18),
          inset 0px 98px 100px -88px rgba(0, 255, 189, 0.06),
          inset 0px 4px 11px rgba(146, 210, 175, 0.1),
          inset 0px 7px 11px -4px rgba(255, 255, 255, 0.8),
          inset 0px -82px 68px -64px rgba(68, 98, 144, 0.2);
      }

      &:focus {
        border-color: ${theme.color.base0};
      }

      &:disabled {
        box-shadow: none;
        border-color: #FFFFFF4D;
        cursor: not-allowed;
      }
  `}}
`

export const StyledCheckIcon = styled(Icon).attrs(props => {
  return {
    ...props,
    name: 'check',
  }
})`
  display: none;
  pointer-events: none;
  content: '';
  width: 65%;
  height: 65%;
  background-color: transparent;
  color: #5CFFB1;
  border-radius: 8px;
  z-index: 1;

  ${StyledInput}:checked + & {
    display: block;
  }

  ${StyledInput}:disabled + & {
    color: #FFFFFF4D;
    cursor: not-allowed;
  }
`

export const StyledLabel = styled.label`
  cursor: pointer;
`