import React, { MouseEventHandler, ReactElement, ReactNode, useEffect, useRef } from 'react';

import Portal from './Portal';

import styled from 'styled-components';

const StyledOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

interface OverlayProps {
  onClick: () => void;
  children: ReactNode;
}

const Overlay = ({ onClick, children }: OverlayProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') onClick();
  };

  const handleClick: MouseEventHandler = (event) => {
    if (modalRef.current?.contains(event.target as Node)) return;
    onClick();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleClickKeyDown);

    return () => document.removeEventListener('keydown', handleClickKeyDown);
  });

  const enhancedModals = React.Children.map(children, (child, index) => {
    return React.cloneElement(child as ReactElement, {
      index,
      closeModal: onClick,
    });
  });

  return (
    <Portal>
      <StyledOverlay onClick={handleClick}>
        <div ref={modalRef}>{enhancedModals}</div>
      </StyledOverlay>
    </Portal>
  );
};

export default Overlay;
