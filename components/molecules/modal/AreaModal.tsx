import { Icon } from '@components/atoms';
import { regions } from '@constants/region';
import { Layout } from '@styles/theme';
import { useModal } from 'context';
import { useForm } from 'react-hook-form';
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
const ProvinceList = styled.ul`
  width: 136px;
  max-height: 320px;
  padding: 4px 16px;
  margin: 0;
  background-color: #f5f5f5;
  list-style: none;
  overflow-y: scroll;
  border-radius: 8px 0 0 8px;
`;
const ProvinceItem = styled.li`
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
`;
const CityList = styled.ul`
  width: 184px;
  max-height: 280px;
  padding: 4px 0;
  margin: 0;
  list-style: none;
  overflow-y: scroll;
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

interface ModalForm {
  modal: string;
}

const WelcomeModal = ({ closeModal }: ModalProps) => {
  const { register, handleSubmit } = useForm<ModalForm>();
  const { updateModalState } = useModal();

  const onValid = (modalForm: ModalForm) => {
    console.log(modalForm);
    updateModalState(modalForm);
    closeModal();
  };

  return (
    <StyledModal>
      <SearchArea>
        <SearchInput placeholder={'Province Search'} />
      </SearchArea>
      <RegionArea>
        <ProvinceList>
          {Object.keys(regions).map((province, index) => (
            <ProvinceItem key={index}>{province}</ProvinceItem>
          ))}
        </ProvinceList>
        <CityList>
          {regions.Abra.map((city, index) => (
            <CityItem key={index}>
              {city} <Icon.Check />
            </CityItem>
          ))}
        </CityList>
        <ModalCloser>
          <Icon.Close onClick={() => console.log('test')} />
        </ModalCloser>
      </RegionArea>
    </StyledModal>
  );
};

export default WelcomeModal;
