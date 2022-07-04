import { CommonTemplate } from '@components/templates';
import { useModal } from 'context';
import { NextPage } from 'next';

const Page: NextPage = () => {
  const { showModal } = useModal();

  return (
    <CommonTemplate title="Select">
      <button onClick={() => showModal('WELCOME_MODAL')}>Welcome Modal</button>
      <button onClick={() => showModal('FAREWELL_MODAL')}>Farewell Modal</button>
    </CommonTemplate>
  );
};
export default Page;
