import { ReactNode } from 'react';
import FocusLock from 'react-focus-lock';
import styled from 'styled-components';

const Layout = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

interface ModalLayoutProps {
  className?: string;
  children: ReactNode;
}
const ModalLayout = ({ className, children }: ModalLayoutProps) => {
  return (
    <Layout className={className}>
      <FocusLock>{children}</FocusLock>
    </Layout>
  );
};

export default ModalLayout;
