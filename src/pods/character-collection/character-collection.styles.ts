import { css } from 'emotion';
import { theme } from 'core/theme';

export const root = css`
  & > :nth-child(n + 2) {
    margin-top: 2rem;
  }
`;

export const chooseCollection = css`
  display: flex;
  justify-content: flex-end;
  & button {
    background-color: blanchedalmond;
    width: 5rem;
  }
`;

export const search = css`
  display: flex;
  & > div {
    margin-top: 1rem;
    margin-bottom: 1rem;
    background-color: aliceblue;
    & input {
      color: darkblue;
    }
  }
`;

export const list = css`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: ${theme.breakpoints.values.sm}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${theme.breakpoints.values.md}px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
