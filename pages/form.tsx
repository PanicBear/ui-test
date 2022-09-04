import { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const Form:NextPage = () => {

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
    resolver: yupResolver(schema),
  });


  const submitForm = (data:any) => {
    console.log(data);
  }; 

  return <div>
    <form onSubmit={handleSubmit(submitForm)}> 
      <label htmlFor="email">이메일</label>
      <input type="email" {...register('email')}/>
	    <span>{errors.email && '이메일 형식이 맞지 않습니다.'}</span>
      <label htmlFor="name">이름</label>
      <input type="text" {...register('name')}/>
      <span>{errors.name && '이름 형식이 맞지 않습니다.'}</span>
      <label htmlFor="pw">비밀번호</label>
      <input type="text" {...register('pw')}/>
      <span>{errors.pw && '비밀번호 형식이 맞지 않습니다.'}</span>
      <label htmlFor="checkPw">비밀번호 확인</label>
      <input type="text" {...register('checkPw')}/>
      <span>{errors.checkPw && '비밀번호가 맞지 않습니다.'}</span>
      <button type="submit">회원가입</button>
    </form>
  </div>

}

export default Form;