import { Select } from '@components/molecules';
import { CommonTemplate } from '@components/templates';
import { NextPage } from 'next';
import { useForm } from 'react-hook-form';

const Page: NextPage = () => {
  const { register } = useForm();

  return (
    <CommonTemplate title="Select">
      <Select
        register={register('select', {
          required: {
            value: true,
            message: 'Please select from below',
          },
        })}
        label="How did you find out about Lahatjob"
      ></Select>
    </CommonTemplate>
  );
};
export default Page;
