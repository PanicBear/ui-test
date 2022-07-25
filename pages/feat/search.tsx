import { Icon } from '@components/atoms';
import { SearchHeader } from '@components/molecules';
import { Color, Layout } from '@styles/index';
import styled from 'styled-components';

const NavBar = styled.ul`
  ${Layout.flexRowEvenlyCenter}
  margin-top: 83px;
  width: 100%;
  height: 48px;

  border-top: 1px solid ${Color.Slate};
  border-bottom: 1px solid ${Color.Slate};

  list-style: none;
`;
const NavItem = styled.li<{ highlight?: boolean }>`
  color: ${({ highlight }) => (highlight ? Color.Point1 : Color.Black)};
`;
const ContentArea = styled.div`
  background-color: ${Color.LightSlate};
`;
const FilterArea = styled.section`
  ${Layout.flexColStartCenter}
  padding-top: 6px;
`;
const FilterBar = styled.div`
  ${Layout.flexRowBetweenCenter}
  width: 100%;
  height: 54px;
  padding: 16px 20px;

  background-color: ${Color.White};
  border-top: 1px solid ${Color.Slate};
  border-bottom: 1px solid ${Color.Slate};
`;
const MainText = styled.div`
  ${Layout.flexRowCenter}

  gap: 8px;

  & > span {
    font-family: AppleSDGothicNeoB00;
    font-size: 17px;
    font-weight: 600;
    line-height: 21px;
    letter-spacing: -0.2px;
    text-align: left;
  }
`;
const SubText = styled.span`
  ${Layout.flexRowBetweenCenter}

  font-family: AppleSDGothicNeoM00;
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: -0.2px;
  text-align: left;
`;
const ListArea = styled.ul`
  ${Layout.flexColCenterStart}
`;
const ListItem = styled.li`
  ${Layout.flexColCenterStart}
  width: 100%;
  padding: 20px;
  background-color: ${Color.White};
  border-bottom: 1px solid ${Color.Slate};

  gap: 2px;
`;
const InfoRow = styled.div`
  ${Layout.flexRowBetweenStart}
  width: 100%;
  height: 24px;
`;
const CorpName = styled.span`
  color: ${({ theme }) => theme.Color.Point1};
  margin: 0;

  font-family: AppleSDGothicNeoM00;
  font-size: 12px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: left;
`;
const RegisterDate = styled.div`
  ${Layout.flexRowBetweenStart}

  gap: 12px;

  & > span {
    font-family: AppleSDGothicNeoM00;
    font-size: 12px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0px;
    text-align: left;
  }
`;
const AdTitle = styled.h4<{ maxLine: number }>`
  margin-right: 76px;

  max-height: ${({ maxLine }) => maxLine * 21 + 'px'};
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({ maxLine }) => maxLine};
  overflow: hidden;

  font-family: AppleSDGothicNeoB00;
  font-size: 17px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: -0.2px;
  text-align: left;
`;
const ConditionRow = styled.div`
  color: ${Color.SemiBlack};
  font-family: AppleSDGothicNeoM00;
  font-size: 12px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: -0.2px;
  text-align: left;

  & > span {
    height: 10px;
    padding: 0 8px;

    :first-child {
      padding-left: 0;
    }
    :not(:last-child) {
      border-right: 1px solid ${Color.SemiBlack};
    }
  }
`;
const PaginationArea = styled.section`
  ${Layout.flexRowCenter}
  padding: 24px;
  gap: 24px;

  & > span {
    font-family: AppleSDGothicNeoB00;
    font-size: 18px;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: -1px;
    text-align: left;
  }
`;

const Page = () => {
  return (
    <>
      <SearchHeader />
      <NavBar>
        <NavItem highlight>ALL</NavItem>
        <NavItem>Title</NavItem>
        <NavItem>Specialization</NavItem>
        <NavItem>Company name</NavItem>
      </NavBar>
      <ContentArea>
        <FilterArea>
          <FilterBar>
            <MainText>
              <span>Search</span>
              <Icon.Dropdown />
            </MainText>
            <SubText>Detail search</SubText>
          </FilterBar>
        </FilterArea>
        <FilterArea>
          <FilterBar>
            <MainText>
              <span>2938 jobs</span>
            </MainText>
            <SubText style={{ marginRight: '-8px' }}>
              Register Date
              <Icon.SmallDropdown />
            </SubText>
          </FilterBar>
        </FilterArea>
        <ListArea>
          <ListItem>
            <InfoRow>
              <CorpName>Amazon</CorpName>
              <RegisterDate>
                <span>3 hour</span>
                <Icon.Star />
              </RegisterDate>
            </InfoRow>
            <AdTitle maxLine={2}>
              We find a chef for our new brunch! We find a chef for our new brunch!We find a chef for our new brunch!
            </AdTitle>
            <ConditionRow>
              <span>3 Months / Afternoon / Monday ~ Friday</span>
            </ConditionRow>
            <ConditionRow>
              <span>Quezon City, Metro Manila</span>
              <span>Hotel</span>
              <span>500 ~ ₱ per a day</span>
            </ConditionRow>
          </ListItem>
          <ListItem>
            <InfoRow>
              <CorpName>Amazon</CorpName>
              <RegisterDate>
                <span>3 hour</span>
                <Icon.Star />
              </RegisterDate>
            </InfoRow>
            <AdTitle maxLine={2}>
              We find a chef for our new brunch! We find a chef for our new brunch!We find a chef for our new brunch!
            </AdTitle>
            <ConditionRow>
              <span>3 Months / Afternoon / Monday ~ Friday</span>
            </ConditionRow>
            <ConditionRow>
              <span>Quezon City, Metro Manila</span>
              <span>Hotel</span>
              <span>500 ~ ₱ per a day</span>
            </ConditionRow>
          </ListItem>
          <ListItem>
            <InfoRow>
              <CorpName>Amazon</CorpName>
              <RegisterDate>
                <span>3 hour</span>
                <Icon.Star />
              </RegisterDate>
            </InfoRow>
            <AdTitle maxLine={2}>
              We find a chef for our new brunch! We find a chef for our new brunch!We find a chef for our new brunch!
            </AdTitle>
            <ConditionRow>
              <span>3 Months / Afternoon / Monday ~ Friday</span>
            </ConditionRow>
            <ConditionRow>
              <span>Quezon City, Metro Manila</span>
              <span>Hotel</span>
              <span>500 ~ ₱ per a day</span>
            </ConditionRow>
          </ListItem>
        </ListArea>
        <PaginationArea>
          <Icon.Left />
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <Icon.Right />
        </PaginationArea>
      </ContentArea>
    </>
  );
};
export default Page;
