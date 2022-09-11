import useModal from '@hooks/useModal';
import CommonTemplate from './CommonTemplate';

const ModalTemplate = () => {
  const { showModal } = useModal();

  return (
    <CommonTemplate title="Select">
      <button
        onClick={() =>
          showModal({
            modalType: 'AlertModal',
            modalProps: {
              message: 'Success!',
            },
          })
        }
      >
        Area Modal
      </button>
    </CommonTemplate>
  );
};

export default ModalTemplate;
