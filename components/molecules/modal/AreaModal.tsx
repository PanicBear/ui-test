import { Icon } from '@components/atoms';
import { City, Province, regions } from '@constants/index';
import { Color, Layout } from '@styles/index';
import { useModal } from 'context';
import { useEffect } from 'react';
import styled from 'styled-components';
import { ModalProps } from '.';
import { SearchInput } from '../input';
import ModalLayout from './ModalLayout';

const StyledModal = styled(ModalLayout)`
  width: 320px;
  margin: auto;
`;
const SearchArea = styled.div`
  width: 100%;
  padding: 10px 16px;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 8px;
`;
const RegionArea = styled.div`
  ${Layout.flexRowBetweenStart}
  width: 100%;
  height: 320px;
  background-color: #fff;
  border-radius: 8px;
`;
const ProvinceArea = styled.section`
  width: 136px;
  height: 100%;
  background-color: #f5f5f5;
  border-radius: 8px 0 0 8px;
`;
const ProvinceList = styled.ul`
  max-height: 320px;
  padding: 4px 16px;
  margin: 0;
  list-style: none;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
const ProvinceItem = styled.li<{ isSelected?: boolean }>`
  ${Layout.flexColCenterStart}
  width: 100%;
  height: 36px;
  font-size: 15px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: -0.4px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: ${({ theme, isSelected }) => (isSelected ? theme.Color.Point1 : theme.Color.SemiBlack)};
`;
const CityList = styled.ul`
  width: 184px;
  max-height: 280px;
  padding: 4px 0;
  margin: 0;
  list-style: none;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
const CityItem = styled.li`
  ${Layout.flexRowBetweenCenter}
  height: 40px;
  padding: 0 16px;
  font-size: 15px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: -0.4px;
  text-align: left;
  border-bottom: 1px solid #e6e6e6;
`;
const ModalCloser = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 8px;
`;
const EmptyList = styled.i<{ areaHeight: number }>`
  ${Layout.flexColCenter}
  height:${({ areaHeight }) => areaHeight + 'px'};
  color: ${Color.DarkSlate};
  box-sizing: border-box;
`;

interface ModalForm {
  modal: string;
}

const AreaModal = ({ closeModal }: ModalProps) => {
  const {
    updateModalState,
    modalState: { data },
  } = useModal();

  useEffect(() => {
    data && updateModalState(undefined);
  }, []);

  let filteredRegions = Object.keys(regions).filter((el) =>
    el
      .replace(' ', '')
      .toLowerCase()
      .match(data?.query ?? ''),
  ) as Province[];

  const handleSearchChange = (query?: string) => {
    updateModalState({ query });
  };
  const handleProvinceClick = (province: Province) => {
    data?.province !== province && updateModalState({ ...data, province, city: undefined });
  };
  const handleCityClick = (city: City) => {
    data?.city !== city && updateModalState({ ...data, city });
  };

  return (
    <StyledModal>
      <SearchArea>
        <SearchInput placeholder={'Province Search'} handleSearchChange={handleSearchChange} />
      </SearchArea>
      <RegionArea>
        <ProvinceArea>
          <ProvinceList>
            {Boolean(filteredRegions.length) ? (
              filteredRegions.map((province, index) => (
                <ProvinceItem
                  key={index}
                  onClick={() => handleProvinceClick(province)}
                  isSelected={Boolean(data?.province === province)}
                >
                  {province}
                </ProvinceItem>
              ))
            ) : (
              <EmptyList areaHeight={320}>No result.</EmptyList>
            )}
          </ProvinceList>
        </ProvinceArea>
        <CityList>
          {Boolean(data?.province) ? (
            regions[data.province as Province].map((city, index) => (
              <CityItem key={index} onClick={() => handleCityClick(city)}>
                {city}
                {Boolean(data?.city === city) && <Icon.Check />}
              </CityItem>
            ))
          ) : (
            <EmptyList areaHeight={272}>Select province first.</EmptyList>
          )}
        </CityList>
        <ModalCloser>
          <Icon.Close onClick={closeModal} />
        </ModalCloser>
      </RegionArea>
    </StyledModal>
  );
};

export default AreaModal;
