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
  const toRegion: MouseEventHandler = (e) => {
    e.preventDefault();
    router.push('/feat/region');
  };
  const toModal: MouseEventHandler = (e) => {
    e.preventDefault();
    router.push('/feat/modal');
  };

  return (
    <>
      <button onClick={toTooltip}>tooltip</button>
      <button onClick={toVerifyInput}>verify input</button>
      <button onClick={toSelect}>select</button>
      <button onClick={toRegion}>region</button>
      <button onClick={toModal}>modal</button>
    </>
  );
};

export default Home;
