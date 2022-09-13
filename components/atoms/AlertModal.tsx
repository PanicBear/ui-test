import { ModalLayout } from '@components/molecules';
import useModal from '@hooks/useModal';
import styled from 'styled-components';
import { AlertModalProps } from '.';

const StyledModal = styled(ModalLayout)`
  width: 320px;
  margin: auto;
`;

const AlertModal = ({ message, confirmText = 'Ok', handleClose, handleConfirm }: AlertModalProps) => {
  const { hideModal } = useModal();

  const onClose = () => {
    if (handleClose) {
      handleClose();
    }
    hideModal();
  };

  const onConfirm = async () => {
    if (handleConfirm) {
      await handleConfirm();
    }
    hideModal();
  };

  return (
    <StyledModal>
      <p style={{ backgroundColor: 'white' }}>test</p>
    </StyledModal>
  );
};

export default AlertModal;
