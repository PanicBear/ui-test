import { FormField } from '@components/molecules';
import { yupResolver } from '@hookform/resolvers/yup';
import { NextPage } from 'next';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import styled, { css } from 'styled-components';
import * as yup from 'yup';

const SForm = styled.form`
  & > * {
    gap: 8px;
  }
`;
const SCol = styled.div`
  ${({ theme }) => css`
    ${theme.Layout.flexColStart};
  `}
`;

const Form: NextPage = () => {
  const schema = yup.object({
    field: yup.object({
      check1: yup.boolean().default(false),
      check2: yup.boolean().default(false),
      check3: yup.boolean().default(false),
      check4: yup.boolean().default(false),
      check5: yup.boolean().default(false),
      check6: yup.boolean().default(false),
    }),
  });

  const methods = useForm({
    resolver: async (data, context, options) => {
      console.log('validation result', await yupResolver(schema)(data, context, options));
      return yupResolver(schema)(data, context, options);
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const submitForm = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <SForm onSubmit={handleSubmit(submitForm)}>
        <SCol>
          <SCol>
            <FormField />
          </SCol>
          <button type="submit">회원가입</button>
        </SCol>
      </SForm>
    </FormProvider>
  );
};

export default Form;
