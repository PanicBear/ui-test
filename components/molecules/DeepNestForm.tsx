import { CheckBox, ConnectForm } from '@components/atoms';
import { Control, FieldValues } from 'react-hook-form';

interface DeepNestFormProps {}

const DeepNestForm: (props: DeepNestFormProps) => JSX.Element = ({}) => {
  return (
    <ConnectForm>
      {/* {({ control }) => <CheckBox control={control} name="nested.test1" label="test1"></CheckBox>} */}
      {({ register }) => <input type={'text'} name="nested.text" {...register}></input>}
    </ConnectForm>
  );
};

export default DeepNestForm;
