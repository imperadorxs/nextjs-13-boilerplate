import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    width: 100vw;
    display: grid;
    place-items: center;

    h1 {
      font-size: 5rem;
      font-weight: 400;
    }
    background-color: ${theme.colors.black};
  `}
`;
