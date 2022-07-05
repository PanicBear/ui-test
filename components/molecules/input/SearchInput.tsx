import { Icon } from '@components/atoms';
import styled from 'styled-components';

const SearchForm = styled.form`
  ${({ theme }) => theme.Layout.flexRowBetweenCenter}
  width: 100%;
`;
const SearchField = styled.input`
  width: 100%;
  height: 38px;
  padding: 0px 36px 0px 16px;
  background-color: #faf5e7;
  border: 1px solid ${({ theme }) => theme.Color.Point1};
  border-radius: 19px;
`;

interface SearchInputProps {
  placeholder?: string;
}

const SearchInput: (props: SearchInputProps) => JSX.Element = ({ placeholder }) => {
  return (
    <SearchForm>
      <SearchField placeholder={placeholder} />
      <Icon.Search style={{ position: 'absolute', right: '32px' }} />
    </SearchForm>
  );
};

export default SearchInput;
