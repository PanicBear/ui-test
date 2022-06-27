import { SelectInput } from '@components/molecules';
import { CommonTemplate } from '@components/templates';
import { NextPage } from 'next';
import { useForm } from 'react-hook-form';

interface SelectForm {
  select: string;
}
const options = [
  { value: '1', label: 'Site searching' },
  { value: '2', label: 'From Facebook' },
  { value: '3', label: 'From other SNS' },
  { value: '4', label: 'Appstore searching' },
  { value: '5', label: 'Radio & TV Ad' },
  { value: '6', label: 'News(Newspager, internet news' },
  { value: '7', label: 'Mobile(Online) Ad banner' },
  { value: '8', label: 'Recommended from Friend and Family' },
  { value: '9', label: 'Internet community and article' },
  { value: '10', label: 'Theater AD' },
  { value: '11', label: 'Other(Bus AD, Metro AD, promotional item...)' },
];

const Page: NextPage = () => {
  const { register, handleSubmit, setValue } = useForm<SelectForm>();

  const onValid = (validForm: SelectForm) => {
    console.log(validForm);
  };

  return (
    <CommonTemplate title="Select">
      <form onSubmit={handleSubmit(onValid)}>
        <SelectInput
          setValue={setValue}
          register={register('select', {
            required: {
              value: true,
              message: 'Please select from below',
            },
          })}
          label="How did you find out about Lahatjob"
          options={options}
          name={'select'}
        />
        <button>submit</button>
      </form>
    </CommonTemplate>
  );
};
export default Page;
