import { ReactNode } from 'react';
import styled from 'styled-components';

const TooltipWindow = styled.div`
  position: relative;
  right: 16px;
  display: inline-block;

  &:hover > span {
    visibility: visible;
    opacity: 1;
  }
`;
const TooltipText = styled.span`
  visibility: hidden;
  width: 222px;
  padding: 24px 16px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 250%;
  margin-left: -242px;
  background-color: ${({ theme }) => theme.Color.White};
  border: 1px solid ${({ theme }) => theme.Color.Point1};
  border-radius: 6px;
  opacity: 0;
  transition: opacity 0.7s;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -1px;
`;
const TooltipChildren = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.Color.Point1};
  border-radius: 50%;
`;

export interface TooltipProps {
  hoverText: string;
  children?: ReactNode;
}

const Tooltip: (props: TooltipProps) => JSX.Element = ({ children, hoverText }) => {
  return (
    <>
      <TooltipWindow>
        {children ?? <TooltipChildren />}
        <TooltipText>{hoverText}</TooltipText>
      </TooltipWindow>
    </>
  );
};

export default Tooltip;
