import { SearchHeader } from '@components/molecules';
import { Color, Layout } from '@styles/index';
import styled from 'styled-components';

const FilterBar = styled.ul`
  ${Layout.flexRowEvenlyCenter}
  margin-top: 83px;
  width: 100%;
  height: 48px;
`;
const FilterItem = styled.li<{ highlight?: boolean }>`
  color: ${({ highlight }) => (highlight ? Color.Point1 : Color.Black)};
`;

const Page = () => {
  return (
    <>
      <SearchHeader />
      <FilterBar>
        <FilterItem highlight>ALL</FilterItem>
        <FilterItem>Title</FilterItem>
        <FilterItem>Specialization</FilterItem>
        <FilterItem>Company name</FilterItem>
      </FilterBar>
    </>
  );
};
export default Page;
