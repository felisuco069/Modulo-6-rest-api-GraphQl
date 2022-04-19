import { css } from 'emotion';
import { theme } from 'core/theme';

export const title = css`
  & > th {
    font-size: 2.5rem;
    color: coral;
  }
`;
export const tableBody = css`
  & > tr {
    :nth-child(even) {
      background-color: aliceblue;
    }
  }
`;
