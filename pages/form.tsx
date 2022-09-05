import { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled, { css } from 'styled-components';

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
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    name: yup.string().required(),
    pw: yup.string().min(7).max(10).required(),
    checkPw: yup
      .string()
      .oneOf([yup.ref('pw'), null])
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: async (data, context, options) => {
      console.log('formData', data);
      console.log('validation result', await yupResolver(schema)(data, context, options));
      return yupResolver(schema)(data, context, options);
    },
  });

  const submitForm = (data: any) => {
    console.log(data);
  };

  return (
    <SForm as="form" onSubmit={handleSubmit(submitForm)}>
      <SCol>
        <SCol>
          <label htmlFor="email">이메일</label>
          <input type="email" {...register('email')} />
          <span>{errors.email && '이메일 형식이 맞지 않습니다.'}</span>
        </SCol>
        <SCol>
          <label htmlFor="name">이름</label>
          <input type="text" {...register('name')} />
          <span>{errors.name && '이름 형식이 맞지 않습니다.'}</span>
        </SCol>
        <SCol>
          <label htmlFor="pw">비밀번호</label>
          <input type="text" {...register('pw')} />
          <span>{errors.pw && '비밀번호 형식이 맞지 않습니다.'}</span>
        </SCol>
        <SCol>
          <label htmlFor="checkPw">비밀번호 확인</label>
          <input type="text" {...register('checkPw')} />
          <span>{errors.checkPw && '비밀번호가 맞지 않습니다.'}</span>
        </SCol>
        <button type="submit">회원가입</button>
      </SCol>
    </SForm>
  );
};

export default Form;
