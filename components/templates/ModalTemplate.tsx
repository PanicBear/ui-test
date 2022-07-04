import { useModal } from 'context';
import { useEffect } from 'react';
import CommonTemplate from './CommonTemplate';

const ModalTemplate = () => {
  const { showModal, modalState } = useModal();

  useEffect(() => {
    console.log(modalState);
  }, [modalState]);

  return (
    <CommonTemplate title="Select">
      <button onClick={() => showModal('WELCOME_MODAL')}>Welcome Modal</button>
      <button onClick={() => showModal('FAREWELL_MODAL')}>Farewell Modal</button>
    </CommonTemplate>
  );
};

export default ModalTemplate;
