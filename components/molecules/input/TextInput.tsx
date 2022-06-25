import { Layout } from '@styles/theme';
import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styled from 'styled-components';
import Tooltip, { TooltipProps } from '../Tooltip';

const InputFieldArea = styled.div`
  width: 100%;
  gap: 4px;
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
const InputRow = styled.div`
  ${Layout.flexRowCenter}
  padding-top: 4px;
`;
const Input = styled.input<{ highlight?: boolean; hasTooltip?: boolean }>`
  width: 100%;
  height: 50px;
  padding: 16px 12px;
  margin-right: ${({ hasTooltip }) => (hasTooltip ? '-20px' : 0)};
  background-color: ${({ highlight, theme }) => (highlight ? theme.Color.Point2 : theme.Color.White)};
  border: 1px solid ${({ highlight, theme }) => (highlight ? theme.Color.Point1 : theme.Color.Slate)};
  border-radius: 8px;

  ${({ theme }) => theme.Shadow.sm}
`;
const ErrorMessageField = styled.p<{ message: boolean }>`
  color: ${({ theme, message }) => (message ? theme.Color.Warning : 'transparent')};
  margin: 0;
  padding: 0;
  margin-top: 8px;
  padding-left: 12px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.2px;
  text-align: left;
`;
interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn;
  label?: string;
  highlight?: boolean;
  tooltip?: TooltipProps;
  error?: { showError: boolean; message?: string };
}

const TextInput: (props: InputFieldProps) => JSX.Element = ({
  register,
  label,
  highlight,
  tooltip,
  error,
  ...inputAttrs
}) => {
  return (
    <InputFieldArea>
      <Label>{label}</Label>
      {inputAttrs.required && <RequiredAsterisk>*</RequiredAsterisk>}
      <InputRow>
        <Input {...register} hasTooltip={Boolean(tooltip)} highlight={highlight} {...inputAttrs} />
        {tooltip && <Tooltip hoverText={tooltip.hoverText} />}
      </InputRow>
      {error?.showError && (
        <ErrorMessageField message={Boolean(error.message)}>{error.message ? error.message : 'none'}</ErrorMessageField>
      )}
    </InputFieldArea>
  );
};

export default TextInput;
