import { NextPage } from 'next';

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


  return <div>
    <form>
      <label htmlFor="email">이메일</label>
      <input type="email" name="email" />
      <label htmlFor="name">이름</label>
      <input type="text" name="name" />
      <label htmlFor="pw">비밀번호</label>
      <input type="text" name="pw" />
      <label htmlFor="checkPw">비밀번호 확인</label>
      <input type="text" name="checkPw" />
      <button type="submit">회원가입</button>
    </form>
  </div>
}

export default Form;