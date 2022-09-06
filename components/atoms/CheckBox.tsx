import { MouseEventHandler, useCallback, useEffect, useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import styled, { css } from 'styled-components';
import { v4 as uuid } from 'uuid';

const SLabel = styled.label<{ isChecked?: boolean }>`
  ${({ theme, isChecked }) => css`
    ${theme.Layout.flexRowBetweenCenter};

    ${isChecked
      ? css`
          background-color: ${theme.Color.Point2};
          border: 1px solid ${theme.Color.Point1};

          & > div {
            ${theme.Layout.flexColCenter};
            border: 1px solid ${theme.Color.Point1};

            & > div {
              background-color: ${theme.Color.Point1};
            }
          }
        `
      : css`
          background-color: ${theme.Color.LightSlate};
          border: 1px solid ${theme.Color.Slate};

          & > div {
            background-color: ${theme.Color.White};
            border: 1px solid ${theme.Color.DarkSlate};
          }
        `}
  `}

  min-width: 144px;
  height: 50px;
  padding: 8px 17px;
  border-radius: 8px;
  overflow-y: none;

  & > h3 {
    max-width: 70px;
    text-align: start;
  }
  & > div {
    width: 24px;
    height: 24px;
    border-radius: 50%;

    & > div {
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }
  }
`;
const SInput = styled.input`
  /* display: none; */
`;

interface CheckBoxProps {
  name: string;
  label: string;
  dispatcher: Record<'Activate' | 'Deactivate', MouseEventHandler>;
}

const CheckBox: (props: CheckBoxProps) => JSX.Element = ({ name, label, dispatcher: { Activate, Deactivate } }) => {
  const [id, setId] = useState<string>();
  const { control, watch } = useFormContext();
  const { field } = useController({ control, name });
  const isChecked = watch(name) ?? false;

  useEffect(() => {
    setId(uuid());
  }, []);

  const handleClick: MouseEventHandler = (e) => (isChecked ? Deactivate(e) : Activate(e));

  return (
    <>
      <SLabel htmlFor={id} isChecked={isChecked} onClick={handleClick}>
        {label}
      </SLabel>
      <SInput type="checkbox" {...field} id={id} checked={isChecked} />
    </>
  );
};

export default CheckBox;
