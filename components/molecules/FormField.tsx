import { CheckBox } from '@components/atoms';
import { MouseEventHandler } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

const SField = styled.div``;

type CheckBoxDispatcher = Record<'Activate' | 'Deactivate', MouseEventHandler>;

interface FormFieldProps {}

const FormField: (props: FormFieldProps) => JSX.Element = ({}) => {
  const { watch, resetField, setValue } = useFormContext();

  const fields = watch('field') ?? {};
  const checkedLength = Object.values(fields).filter(Boolean).length;
  const maxLength = 3;

  const allDispatcher: CheckBoxDispatcher = {
    Activate: () => resetField('field'),
    Deactivate: () => {},
  };

  const defaultDispatcher: CheckBoxDispatcher = {
    Activate: (e) => {
      const isReachedLimit = Boolean(maxLength <= checkedLength);

      if (isReachedLimit) {
        return e.preventDefault();
      }

      resetField('field.check1');
    },
    Deactivate: () => {},
  };

  return (
    <>
      <p>{checkedLength}</p>
      <SField>
        <CheckBox name="field.check1" label="check1" dispatcher={allDispatcher} />
        <CheckBox name="field.check2" label="check2" dispatcher={defaultDispatcher} />
        <CheckBox name="field.check3" label="check3" dispatcher={defaultDispatcher} />
        <CheckBox name="field.check4" label="check4" dispatcher={defaultDispatcher} />
        <CheckBox name="field.check5" label="check5" dispatcher={defaultDispatcher} />
        <CheckBox name="field.check6" label="check6" dispatcher={defaultDispatcher} />
      </SField>
    </>
  );
};

export default FormField;
