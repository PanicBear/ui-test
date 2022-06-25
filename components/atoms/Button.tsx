import { MouseEvent, MouseEventHandler, ReactNode } from 'react';
import styled, { CSSProperties } from 'styled-components';

const StyledButton = styled.button<{ highlight?: boolean; width?: number }>`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  padding: 16px;
  background-color: ${({ highlight, theme }) => (highlight ? theme.Color.Point1 : theme.Color.SemiBlack)};
  opacity: ${({ highlight }) => (highlight ? 1 : 0.77)};
  color: white;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 19px;
  border-radius: 8px;
  border: none;
`;

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler;
  highlight?: boolean;
  width?: number;
}

const Button: (props: ButtonProps) => JSX.Element = ({ children, onClick = () => {}, highlight = true, width }) => {
  return (
    <StyledButton onClick={onClick} highlight={highlight} width={width}>
      {children}
    </StyledButton>
  );
};

export default Button;
