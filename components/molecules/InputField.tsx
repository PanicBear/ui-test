import { Layout } from '@styles/theme';
import styled from 'styled-components';
import Tooltip, { TooltipProps } from './Tooltip';

const InputFieldArea = styled.div`
  width: 100%;
  padding: 20px;
`;
const Label = styled.label`
  padding-left: 12px;
  font-size: 15px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: left;
`;
const InputRow = styled.div`
  ${Layout.flexRowCenter}
`;
const Input = styled.input<{ highlight?: boolean; hasTooltip?: boolean }>`
  width: 100%;
  height: 50px;
  padding: 16px 12px;
  margin-right: ${({ hasTooltip }) => (hasTooltip ? '-20px' : 0)};
  background-color: ${({ highlight, theme }) => (highlight ? theme.Color.Point2 : theme.Color.White)};
  border: 1px solid ${({ highlight, theme }) => (highlight ? theme.Color.Point1 : theme.Color.Slate)};
  border-radius: 8px;
`;
interface InputFieldProps {
  label: string;
  tooltip?: TooltipProps;
}

const InputField: (props: InputFieldProps) => JSX.Element = ({ label, tooltip }) => {
  return (
    <InputFieldArea>
      <Label>{label}</Label>
      <InputRow>
        <Input hasTooltip={Boolean(tooltip)} />
        {tooltip && <Tooltip hoverText={tooltip.hoverText} />}
      </InputRow>
    </InputFieldArea>
  );
};

export default InputField;
