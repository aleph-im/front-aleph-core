import styled, { css } from 'styled-components'
import { StyledTableProps } from './types'

export const StyledTable = styled.table<StyledTableProps>`
  ${({ border }) => {
  const hasBorder = border !== 'none'
  console.log('hasBorder', hasBorder, border)
  return css`
    width: 100%;
    border-collapse: ${hasBorder ? 'separate' : 'collapse'};

    thead {
      text-transform: uppercase;
    }

    td,
    th {
      text-align: left;
      padding: 15px 0;

      ${hasBorder &&
      css`
        border-bottom: 1px ${border} #ffffff22;
      `}
    }

    th.sortable {
      cursor: pointer;
    }

    tr {
      ${hasBorder &&
      css`
        border-bottom: 1px ${border} #ffffff22;
      `}
    }
  `}
}
`
