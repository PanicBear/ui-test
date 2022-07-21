import { MouseEvent, MouseEventHandler, ReactNode } from 'react';
import styled, { css } from 'styled-components';

const DropdownArea = styled.button`
  width: 24px;
  height: 24px;
  padding: 0.5px;
  margin: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;
const DropdownList = styled.ul<{ isOpen: boolean }>`
  width: 122px;

  position: absolute;
  right: 16px;
  background: ${(props) => props.theme.White};
  opacity: 0;
  visibility: hidden;
  z-index: 2;
  overflow-y: auto;
  background-color: white;

  ${({ isOpen, theme }) =>
    isOpen &&
    css`
      opacity: 1;
      visibility: visible;
      pointer-events: all;
      margin-top: 4px;
      border-radius: 8px;
      ${theme.Shadow.default}
    `}

  &>li {
    font-family: AppleSDGothicNeoM00;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.4px;
    text-align: left;
  }
`;
const DropdownItem = styled.li`
  ${({ theme }) => theme.Layout.flexColCenter}
  padding: 10px 8px;
  transition: all 0.5s;
  border-radius: 6px;
  overflow-x: hidden;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.Color.Point1};
    color: ${({ theme }) => theme.Color.White};
  }
`;

interface DropdownProps {
  isOpen: boolean;
  itemList: string[];
  selectDispatch: Record<string, () => void>;
  openDispatch?: () => void;
  closeDispatch: () => void;
  selectRef: any;
  children: ReactNode;
}

const Dropdown: (props: DropdownProps) => JSX.Element = ({
  isOpen,
  itemList,
  selectDispatch,
  openDispatch,
  closeDispatch,
  selectRef,
  children,
}) => {
  const handleDropdownBtnClick: MouseEventHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isOpen && openDispatch) return openDispatch();
    if (!isOpen) return closeDispatch();
  };
  const handleDropdownItemClick = (e: MouseEvent, item: string) => {
    e.preventDefault();
    e.stopPropagation();

    const selectedDispatcher: () => void = selectDispatch[item];

    selectedDispatcher();
    closeDispatch();
  };

  return (
    <DropdownArea ref={selectRef} onClick={handleDropdownBtnClick}>
      {children}
      <DropdownList isOpen={isOpen}>
        {itemList.map((item, index) => (
          <DropdownItem key={index} onClick={(e) => handleDropdownItemClick(e, item)}>
            {item}
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownArea>
  );
};

export default Dropdown;
