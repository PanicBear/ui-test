import { Dropdown } from '@components/atoms/Icon';
import useOutsideClick from '@hooks/useOutSideClick';
import { useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import TextInput from './TextInput';

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
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
const InvisibleSelect = styled.select`
  display: none;
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
const CustomOptionArea = styled.div<{ isOpen: boolean }>`
  margin: 0 -13px;
  position: absolute;
  display: block;
  top: 100%;
  left: 0;
  right: 0;
  background: ${(props) => props.theme.white};
  transition: all 0.5s;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 2;
  padding: 8px;
  /* max-height: 200px; */
  overflow-y: auto;
  border: 1px solid black;
  background-color: white;

  ${({ isOpen }) =>
    isOpen &&
    `opacity: 1;
    visibility: visible;
    pointer-events: all;
    margin-top: 8px;
    box-shadow: -1px 1px 2px rgba(67, 70, 74, 0.0001), -2px 2px 5px rgba(67, 86, 100, 0.123689);
    border-radius: 8px;`}
`;
const Input = styled.input<{ highlight?: boolean; hasTooltip?: boolean }>`
  width: 100%;
  height: 50px;
  padding: 16px 12px;
  margin-top: 8px;
  margin-right: ${({ hasTooltip }) => (hasTooltip ? '-20px' : 0)};
  background-color: ${({ highlight, theme }) => (highlight ? theme.Color.Point2 : theme.Color.White)};
  border: 1px solid ${({ highlight, theme }) => (highlight ? theme.Color.Point1 : theme.Color.Slate)};
  border-radius: 8px;

  ${({ theme }) => theme.Shadow.sm}
`;

interface SelectProps {
  label: string;
  required?: boolean;
}

const Address = ({ label }: SelectProps) => {
  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState<string>('');
  const selectRef = useRef(null);
  const { register } = useFormContext();

  useOutsideClick(selectRef, () => {
    setOpen(false);
  });

  return (
    <Wrapper>
      <Label>{label}</Label>
      <CustomSelectArea
        ref={selectRef}
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        <CustomSelectRow>
          <CustomSelectTrigger>
            {/* <span>{options.find((item) => item.value === selected)?.label || 'Select'}</span> */}
            <span></span>
            <Dropdown />
          </CustomSelectTrigger>
        </CustomSelectRow>
      </CustomSelectArea>
      <Input placeholder="Address Detail" />
    </Wrapper>
  );
};

export default Address;
