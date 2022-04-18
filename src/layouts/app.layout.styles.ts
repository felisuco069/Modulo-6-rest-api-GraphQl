import { css } from 'emotion';

export const content = css`
  margin: 2rem;
`;

export const viewButton = css`
  display: flex;
  justify-content: flex-end;
  & button {
    background-color: burlywood;
    width: 4rem;
    margin-right: 2rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
    &:hover {
      background-color: beige;
    }
  }
`;

export const page = css`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;
