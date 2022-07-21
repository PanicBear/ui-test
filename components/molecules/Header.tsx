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
  ${Layout.flexColCenterStart}
  padding: 16px 20px;
  width: 100%;
  gap: 24px;

  border-bottom: 1px solid slategray;
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
  gap: 16px;
`;
const SubMenuLinkItem = styled.li`
  text-align: left;
`;

interface HeaderProps {
  isRootPage?: boolean;
  children?: ReactNode;
}

type SidebarMenu = 'Jobs Info' | 'Talent Info' | 'Individual Service' | 'Company Service' | 'Customer Service';
const menuObj: Record<SidebarMenu, Record<string, string[]>> = {
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
  const [menu, setMenu] = useState<SidebarMenu>('Jobs Info');
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
            <MainMenuItem isActive={menu === 'Jobs Info'}>Jobs Info</MainMenuItem>
            <MainMenuItem isActive={menu === 'Talent Info'}>Talent Info</MainMenuItem>
            <MainMenuItem isActive={menu === 'Individual Service'}>Individual Service</MainMenuItem>
            <MainMenuItem isActive={menu === 'Company Service'}>Company Service</MainMenuItem>
            <MainMenuItem isActive={menu === 'Customer Service'}>Customer Service</MainMenuItem>
          </MainMenuArea>
          <SubMenuArea>
            {Object.keys(menuObj[menu]).map((subTitle, index) => {
              return (
                <SubMenuItem key={index}>
                  <SubMenuTitleBar>
                    <SubMenuTitle>{subTitle}</SubMenuTitle>
                    <Icon.Bookmark />
                  </SubMenuTitleBar>
                  <SubMenuLinkArea>
                    {menuObj[menu][subTitle].map((link, index) => {
                      return <SubMenuLinkItem key={index}>{link}</SubMenuLinkItem>;
                    })}
                  </SubMenuLinkArea>
                </SubMenuItem>
              );
            })}
          </SubMenuArea>
        </Sidebar>
      )}
    </>
  );
};

export default HeaderMenu;
