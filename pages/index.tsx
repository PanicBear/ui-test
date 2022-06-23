import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { MouseEventHandler } from 'react';

const Home: NextPage = () => {
  const router = useRouter();

  const toTooltip: MouseEventHandler = (e) => {
    e.preventDefault();
    router.push('/feat/tooltip');
  };

  return (
    <>
      <button onClick={toTooltip}>tooltip</button>
    </>
  );
};

export default Home;
