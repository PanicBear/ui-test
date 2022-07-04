import { useBlockScroll } from '@hooks/useBlockScroll';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
}

const Portal = ({ children }: PortalProps) => {
  useBlockScroll();
  return createPortal(children, document.body);
};

export default Portal;
