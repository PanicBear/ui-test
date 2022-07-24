import { Icon } from '@components/atoms';
import { Color, Layout } from '@styles/index';
import { ReactNode } from 'react';
import styled from 'styled-components';
import { SearchInput } from './input';

const HeaderMenuBar = styled.header`
  ${Layout.flexRowBetweenCenter}
  width: 100%;
  padding: 22px 20px;
  position: fixed;
  top: 0;
  background-color: ${Color.White};
  z-index: 2;

  gap: 12px;

  border-bottom: 1px solid ${Color.Slate};
`;

interface HeaderProps {
  isRootPage?: boolean;
  children?: ReactNode;
}

const HeaderMenu: (props: HeaderProps) => JSX.Element = ({ isRootPage = false, children }) => {
  return (
    <>
      <HeaderMenuBar>
        <Icon.Back style={{ marginLeft: '-4px' }} />
        <SearchInput handleSearchChange={() => {}} />
      </HeaderMenuBar>
    </>
  );
};

export default HeaderMenu;
