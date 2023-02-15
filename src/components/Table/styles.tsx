import styled, { css } from "styled-components"

export const StyledTable = styled.table`
  ${() => css`
    width: 100%;
    border-spacing: 30px;

    thead {
      text-transform: uppercase;
    }

    td, th{ 
      text-align: left;
    }

    th.sortable{
      cursor: pointer;
    }
  `}
`