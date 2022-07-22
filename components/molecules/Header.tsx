import { Icon, Logo } from '@components/atoms';
import Overlay from '@components/atoms/Overlay';
import { useOutSideClick } from '@hooks/index';
import { Color, Layout } from '@styles/index';
import { MouseEventHandler, ReactNode, useEffect, useRef, useState } from 'react';
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
  gap: 16px;
`;
const Sidebar = styled.div`
  ${Layout.flexRowCenter};
  margin-top: 68px;
  padding-top: 6px;
  max-width: 425px;
  max-height: 100vh;
  width: 100%;
  height: 572px;

  background-color: ${Color.Slate};
`;
const MainMenuArea = styled.ul`
  ${Layout.flexColStartCenter}
  height: 100%;
  flex: 1;
  background-color: ${Color.LightSlate};

  overflow-y: scroll;
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
  background-color: ${Color.White};

  overflow-y: scroll;
`;
const SubMenuItem = styled.li`
  ${Layout.flexColCenterStart}
  padding: 16px 20px;
  width: 100%;

  &:not(:last-child) {
    border: 0.5px solid #e6e6e6;
  }
`;
const SubMenuTitleBar = styled.div`
  ${Layout.flexRowBetweenCenter}
  width: 100%;
`;
const SubMenuTitle = styled.span`
  font-family: AppleSDGothicNeoB00;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.2px;
  text-align: left;
`;
const SubMenuLinkArea = styled.ul`
  ${Layout.flexColCenterStart}
  padding: 16px 12px;
  gap: 16px;
`;
const SubMenuLinkRow = styled.li`
  ${Layout.flexRowStartCenter}
  gap: 8px;
`;
const SubMenuCustomDisc = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: black;
`;
const SubMenuLinkItem = styled.a`
  text-align: left;
`;

interface HeaderProps {
  isRootPage?: boolean;
  children?: ReactNode;
}

type SidebarMenu = 'Jobs Info' | 'Talent Info' | 'Individual Service' | 'Company Service' | 'Customer Service';
const menu: Record<SidebarMenu, Record<string, string[]>> = {
  'Jobs Info': {
    'Job ads': ['All Jobs', 'Today Jobs', 'Safe Jobs'],
    Region: ['Jobs by Region', 'Job map', 'Job metro', 'Nearby the University'],
    Specialization: ['Jobs by specialization'],
    'By period': ['Jobs by period'],
    'By Salary& Welfare': ['Jobs by salary', 'Same-day payment', 'jobs by Welfare benefits'],
    'By theme': ['Preference', 'Beginner possible', 'Hot jobs', 'At Home', 'With Friend', 'Application Method'],
  },
  'Talent Info': {
    'Talent Home': ['All talent', 'Today Talent', 'Preference Talent'],
  },
  // 북마크한 서비스와 헷갈릴거 같아서 my service에서 개인 서비스로 대체
  'Individual Service': {
    Resume: ['Resume management', 'Porfolio management', 'Viewed Resume', 'Application Offer', 'Scrapped Resume'],
    Activity: ['Application status'],
    'Job Info': ['Scrapped Job ads', 'Company of interest'],
    'Member Info': ['Member info Settings'],
  },
  'Company Service': {
    'Job ad/Applicant': ['Job ad Register', 'Job ad management', 'Applicant Management'],
    Talent: ['Scrapped Talents', 'Application Offer'],
    'Member Info': ['Member info Settings'],
  },
  'Customer Service': {
    'Customer Service Home': ['Event', 'Notice', 'Q&A'],
  },
};

const HeaderMenu: (props: HeaderProps) => JSX.Element = ({ isRootPage = false, children }) => {
  const selectRef = useRef(null);
  const [isSidebarToggled, setSidebarToggled] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState<SidebarMenu>('Jobs Info');
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
  const handleMenuIconClick = () => {
    setSidebarToggled(true);
  };
  const handleOverlayClick = () => {
    setSidebarToggled(false);
  };
  const handleMenuClick = (clickedMenu: SidebarMenu) => {
    if (clickedMenu === selectedMenu) return;

    setSelectedMenu(clickedMenu);
  };

  useEffect(() => {
    console.log(selectedMenu);
  });

  return (
    <>
      <HeaderMenuBar>
        {Boolean(isRootPage && !isSidebarToggled) && <Icon.Menu onClick={handleMenuIconClick} />}
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
        <Overlay onClick={handleOverlayClick}>
          <Sidebar>
            <MainMenuArea>
              {Object.keys(menu).map((title, index) => {
                return (
                  <MainMenuItem
                    key={index}
                    isActive={selectedMenu === title}
                    onClick={() => handleMenuClick(title as SidebarMenu)}
                  >
                    {title}
                  </MainMenuItem>
                );
              })}
            </MainMenuArea>
            <SubMenuArea>
              {Object.keys(menu[selectedMenu]).map((subTitle, index) => {
                return (
                  <SubMenuItem key={index}>
                    <SubMenuTitleBar>
                      <SubMenuTitle>{subTitle}</SubMenuTitle>
                      <Icon.Bookmark />
                    </SubMenuTitleBar>
                    <SubMenuLinkArea>
                      {menu[selectedMenu][subTitle].map((link, index) => {
                        return (
                          <SubMenuLinkRow>
                            <SubMenuCustomDisc />
                            <SubMenuLinkItem key={index}>{link}</SubMenuLinkItem>
                          </SubMenuLinkRow>
                        );
                      })}
                    </SubMenuLinkArea>
                  </SubMenuItem>
                );
              })}
            </SubMenuArea>
          </Sidebar>
        </Overlay>
      )}
    </>
  );
};

export default HeaderMenu;
