import { Dropdown } from '@components/atoms/Icon';
import { useModal } from 'context';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import TextInput from './TextInput';

const Wrapper = styled.div`
  position: relative;
`;
const Label = styled.label`
  padding-left: 12px;
  margin-bottom: 4px;
  font-size: 15px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: left;
`;
const RequiredAsterisk = styled.span`
  color: ${({ theme }) => theme.Color.Warning};
  font-size: 15px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: left;
`;
const CustomSelectArea = styled.div`
  width: 100%;
  height: 50px;
  padding: 13px 12px;
  background-color: ${({ theme }) => theme.Color.White};
  border: 1px solid ${({ theme }) => theme.Color.Slate};
  border-radius: 8px;
  position: relative;
  user-select: none;

  ${({ theme }) => theme.Shadow.sm}
`;
const CustomSelectRow = styled.div`
  padding-bottom: 12px;
  background: ${(props) => props.theme.white};
  position: relative;
  cursor: pointer;
  color: ${(props) => props.theme.grey3};
`;
const CustomSelectTrigger = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;
const HiddenInput = styled.input`
  display: none;
`;

interface AddressProps {
  label: string;
  required?: boolean;
}

const Address = ({ label, required }: AddressProps) => {
  const {
    register,
    formState: {
      errors: { province, city, detail },
    },
    setValue,
  } = useFormContext();
  const {
    showModal,
    modalState: { data },
  } = useModal();

  const handleAreaSelect = () => {
    showModal('AREA_MODAL');
  };

  useEffect(() => {
    data?.province && setValue('province', data.province);
    data?.city && setValue('city', data.city);
  }, [data]);

  return (
    <Wrapper>
      <Label>{label}</Label>
      {required && <RequiredAsterisk>*</RequiredAsterisk>}
      <CustomSelectArea>
        <CustomSelectRow>
          <CustomSelectTrigger onClick={handleAreaSelect}>
            <span>
              {Boolean(data?.city) && `${data.city}, `}
              {Boolean(data?.province) && `${data.province}`}
            </span>
            <Dropdown />
          </CustomSelectTrigger>
        </CustomSelectRow>
      </CustomSelectArea>
      <HiddenInput
        {...register('province', { required: { value: true, message: 'Please select both province & city.' } })}
      />
      <HiddenInput
        {...register('city', { required: { value: true, message: 'Please select both province & city.' } })}
      />
      <TextInput
        register={register('detail', {
          required: {
            value: true,
            message: 'Please fill this field',
          },
        })}
        error={{
          showError: true,
          message: province?.message || city?.message || detail?.message,
        }}
        placeholder="Address Detail"
        style={{ marginTop: '4px' }}
      />
    </Wrapper>
  );
};

export default Address;
