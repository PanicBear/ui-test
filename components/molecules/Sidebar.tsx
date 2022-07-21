import { MouseEventHandler, ReactNode } from 'react';
import styled from 'styled-components';

const ToggleButton = styled.button`
  width: 24px;
  height: 24px;
  padding: 0.5px;
  margin: 0;
  border: 0;
  background-color: transparent;
  box-sizing: content-box;
  cursor: pointer;
`;
const SidebarArea = styled.div`
  max-width: 425px;
  height: 100vh;
`;

interface ToggleProps {
  isToggled: boolean;
  openDispatch: () => any;
  closeDispatch: () => any;
  children: ReactNode;
}

const Toggle: (props: ToggleProps) => JSX.Element = ({ isToggled, openDispatch, closeDispatch, children }) => {
  return (
    <>
      {Boolean(isToggled) ? (
        <SidebarArea></SidebarArea>
      ) : (
        <ToggleButton onClick={openDispatch}>{children}</ToggleButton>
      )}
    </>
  );
};

export default Toggle;
