import { ModalList } from '@components/molecules';
import ModalTemplate from '@components/templates/ModalTemplate';
import { ModalProvider } from 'context';
import { NextPage } from 'next';

const Page: NextPage = () => {
  return (
    <ModalProvider modals={ModalList}>
      <ModalTemplate />
    </ModalProvider>
  );
};
export default Page;
