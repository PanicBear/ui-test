import { ModalList } from '@components/molecules';
import { RecoilModalTemplate } from '@components/templates';
import { ModalProvider } from 'context';
import { NextPage } from 'next';

const Modal: NextPage = () => {
  return (
    <ModalProvider modals={ModalList}>
      <RecoilModalTemplate />
    </ModalProvider>
  );
};

export default Modal;
