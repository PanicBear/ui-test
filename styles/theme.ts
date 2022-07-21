import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
  ${reset}

  html, body {
    padding: 0;
    margin: 0;
    margin: auto;
    /* max-width: 960px; */
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export const Layout = {
  flexRowCenter: css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,
  flexRowStart: css`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
  `,
  flexRowStartCenter: css`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
  `,
  flexRowBetweenCenter: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  flexRowBetweenStart: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  `,
  flexRowEvenlyCenter: css`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  `,
  flexColCenter: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  flexColCenterEnd: css`
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
  `,
  flexColCenterStart: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  `,
  flexColStartCenter: css`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  `,
  flexColStart: css`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
  `,
  flexColCenterBetween: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `,
};

export const Shadow = {
  default: css`
    filter: drop-shadow(0px 4px 10px rgba(51, 51, 51, 0.15));
  `,
  sm: css`
    filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.1));
  `,
};
