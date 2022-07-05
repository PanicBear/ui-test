import { useModal } from 'context';
import { useEffect } from 'react';
import CommonTemplate from './CommonTemplate';

const ModalTemplate = () => {
  const {
    showModal,
    modalState: { data },
  } = useModal();

  useEffect(() => {
    console.log(data);
  });

  return (
    <CommonTemplate title="Select">
      <button onClick={() => showModal('WELCOME_MODAL')}>Welcome Modal</button>
      <button onClick={() => showModal('FAREWELL_MODAL')}>Farewell Modal</button>
      <button onClick={() => showModal('AREA_MODAL')}>Area Modal</button>
    </CommonTemplate>
  );
};

export default ModalTemplate;
