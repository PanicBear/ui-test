import { AddressInput } from '@components/molecules';
import { CommonTemplate } from '@components/templates';
import { NextPage } from 'next';
import { FormProvider, useForm } from 'react-hook-form';

interface AddressForm {
  main: string;
  detail: string;
}

const Page: NextPage = () => {
  const methods = useForm<AddressForm>();
  const { handleSubmit } = methods;

  const onValid = (validForm: AddressForm) => {
    console.log(validForm);
  };

  return (
    <FormProvider {...methods}>
      <CommonTemplate title="Select">
        <form onSubmit={handleSubmit(onValid)}>
          <AddressInput label={'Address'} required />
          <button>submit</button>
        </form>
      </CommonTemplate>
    </FormProvider>
  );
};
export default Page;
