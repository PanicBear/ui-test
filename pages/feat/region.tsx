import { AddressInput, ModalList } from '@components/molecules';
import { CommonTemplate } from '@components/templates';
import type { City, Province } from '@constants/region';
import { ModalProvider } from 'context';
import { NextPage } from 'next';
import { FormProvider, useForm } from 'react-hook-form';

interface AddressForm {
  province: Province;
  city: City;
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
      <ModalProvider modals={ModalList}>
        <CommonTemplate title="Select">
          <form onSubmit={handleSubmit(onValid)}>
            <AddressInput label={'Address'} required />
            <button>submit</button>
          </form>
        </CommonTemplate>
      </ModalProvider>
    </FormProvider>
  );
};
export default Page;
