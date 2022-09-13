import { useModal } from '@hooks/index';
import { useEffect } from 'react';
import CommonTemplate from './CommonTemplate';

const ModalTemplate = () => {
  const { showModal } = useModal();

  const handleAlertModal = () =>
    showModal({
      modalType: 'AlertModal',
      modalProps: {
        message: 'test',
      },
    });

  return (
    <CommonTemplate title="Select">
      {/* <button onClick={() => showModal('WELCOME_MODAL')}>Welcome Modal</button> */}
      {/* <button onClick={() => showModal('FAREWELL_MODAL')}>Farewell Modal</button> */}
      {/* <button onClick={() => showModal('AREA_MODAL')}>Area Modal</button> */}
      <button onClick={handleAlertModal}>alertModal</button>
    </CommonTemplate>
  );
};

export default ModalTemplate;
