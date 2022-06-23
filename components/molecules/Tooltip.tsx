import { ReactNode } from 'react';
import styled from 'styled-components';
import styles from './tooltip.module.css';

const TooltipArea = styled.div`
  text-align: center;
  margin: 10%;
`;
const TooltipWindow = styled.div`
  position: relative;
  display: inline-block;
  visibility: hidden;
  width: 120px;
  background-color: gray;
  color: #fff;
  text-align: center;
  border-radius: 1px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.7s;

  ::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: gray transparent transparent transparent;
  }

  :hover {
    visibility: visible;
    opacity: 1;
  }
`;
const TooltipText = styled.span``;

interface TooltipProps {
  hoverText: string;
  children: ReactNode;
}

const Tooltip: (props: TooltipProps) => JSX.Element = ({ children, hoverText }) => {
  return (
    <TooltipArea>
      <span className={styles['test-class']}>test</span>
      <div className={styles['custom-tooltip']}>
        {children}
        <span className={styles['custom-tooltip-text']}>{hoverText}</span>
      </div>
      <span
        style={{
          display: 'block',
          marginTop: 20,
          color: 'blue',
        }}
      >
        https://reactcodes.blogspot.com/
      </span>
    </TooltipArea>
  );
};

export default Tooltip;
