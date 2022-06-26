import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { MouseEventHandler } from 'react';

const Home: NextPage = () => {
  const router = useRouter();

  const toTooltip: MouseEventHandler = (e) => {
    e.preventDefault();
    router.push('/feat/tooltip');
  };
  const toVerifyInput: MouseEventHandler = (e) => {
    e.preventDefault();
    router.push('/feat/verify-input');
  };
  const toSelect: MouseEventHandler = (e) => {
    e.preventDefault();
    router.push('/feat/select');
  };

  return (
    <>
      <button onClick={toTooltip}>tooltip</button>
      <button onClick={toVerifyInput}>verify input</button>
      <button onClick={toSelect}>select</button>
    </>
  );
};

export default Home;
