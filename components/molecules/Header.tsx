import { Icon, Logo } from '@components/atoms';
import { useOutSideClick } from '@hooks/index';
import { Color, Layout } from '@styles/index';
import { MouseEventHandler, ReactNode, useRef, useState } from 'react';
import styled from 'styled-components';
import Dropdown from './Dropdown';

const HeaderMenuBar = styled.header`
  ${Layout.flexRowBetweenCenter}
  width: 100%;
  padding: 22px 20px;
  position: fixed;
  top: 0;
  background-color: ${Color.White};
  z-index: 2;
`;
const ButtonArea = styled.div`
  ${Layout.flexRowCenter}
  gap: 32px;
`;
const Sidebar = styled.div`
  ${Layout.flexRowCenter};
  position: fixed;
  max-width: 425px;
  max-height: 100vh;
  width: 100%;
  height: 640px;

  background-color: slategray;
`;
const MainMenuArea = styled.ul`
  ${Layout.flexColStartCenter}
  height: 100%;
  flex: 1;
  background-color: ${Color.LightSlate};
`;
const MainMenuItem = styled.li<{ isActive?: boolean }>`
  width: 100%;
  padding: 20px;

  color: ${({ isActive, theme }) => (isActive ? theme.Color.Point1 : theme.Color.Black)};

  font-family: AppleSDGothicNeoB00;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.2px;
  text-align: left;
`;
const SubMenuArea = styled.ul`
  ${Layout.flexColStartCenter}
  flex: 2;
  height: 100%;
`;
const SubMenuItem = styled.li`
  padding: 16px 24px;
`;
const SubMenuTitle = styled.span`
  font-family: AppleSDGothicNeoB00;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.2px;
  text-align: left;
`;

interface HeaderProps {
  isRootPage?: boolean;
  children?: ReactNode;
}

const HeaderMenu: (props: HeaderProps) => JSX.Element = ({ isRootPage = false, children }) => {
  const selectRef = useRef(null);
  const [isSidebarToggled, setSidebarToggled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useOutSideClick(selectRef, () => {
    setIsOpen(false);
  });

  const dropdownMenu: Record<string, () => void> = {
    'My page': () => {},
    'Job info': () => {},
    'Talent info': () => {},
    Login: () => {},
  };

  const handleUserIconClick: MouseEventHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();

    setIsOpen((prev) => !prev);
  };
  const handleSidebarToggle = () => {
    setSidebarToggled(false);
  };

  return (
    <>
      <HeaderMenuBar>
        {Boolean(isRootPage && !isSidebarToggled) && <Icon.Menu onClick={() => setSidebarToggled(true)} />}
        <Logo />
        <ButtonArea>
          {isRootPage && (
            <Dropdown
              isOpen={isOpen}
              itemList={Object.keys(dropdownMenu)}
              selectRef={selectRef}
              selectDispatch={dropdownMenu}
              openDispatch={() => setIsOpen(true)}
              closeDispatch={() => setIsOpen(false)}
            >
              <Icon.User onClick={handleUserIconClick} />
            </Dropdown>
          )}
          {Boolean(isRootPage && isSidebarToggled) && <Icon.Close onClick={() => setSidebarToggled(false)} />}
        </ButtonArea>
      </HeaderMenuBar>
      {isSidebarToggled && (
        <Sidebar>
          <MainMenuArea>
            <MainMenuItem>Jobs Info</MainMenuItem>
            <MainMenuItem>Talent Info</MainMenuItem>
            <MainMenuItem>My Service</MainMenuItem>
            <MainMenuItem>Customer Service</MainMenuItem>
          </MainMenuArea>
          <SubMenuArea>
            <SubMenuItem></SubMenuItem>
          </SubMenuArea>
        </Sidebar>
      )}
    </>
  );
};

export default HeaderMenu;
