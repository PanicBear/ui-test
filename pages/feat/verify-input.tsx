import { Button } from '@components/atoms';
import { ButtonInput, TextInput } from '@components/molecules/input';
import { CommonTemplate } from '@components/templates';
import { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const Form = styled.form`
  ${({ theme }) => theme.Layout.flexColStart}
  gap: 16px;
`;

interface VerifyInputForm {
  email: string;
  code: string;
}

const Page: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors: { email, code },
    },
  } = useForm<VerifyInputForm>();

  const onValid = (validForm: VerifyInputForm) => {
    console.log(validForm);
  };

  return (
    <CommonTemplate title={'VerifyInput'}>
      <Form onSubmit={handleSubmit(onValid)}>
        <ButtonInput
          register={register('email', {
            minLength: {
              value: 4,
              message: 'email test ',
            },
          })}
          label={'Email'}
          error={{ showError: true, message: email?.message }}
          button={{ children: 'Get code', width: 116, onButtonClick: () => console.log('click') }}
          required
        />
        <ButtonInput
          register={register('code', {
            minLength: {
              value: 4,
              message: 'code test',
            },
          })}
          label={'Code'}
          button={{ children: 'Verify', width: 116, onButtonClick: () => console.log('click') }}
          error={{ showError: true, message: code?.message }}
          required
        />
        <Button>Submit</Button>
      </Form>
    </CommonTemplate>
  );
};

export default Page;
