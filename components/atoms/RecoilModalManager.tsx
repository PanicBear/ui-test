import useModal from '@hooks/useModal';
import { modalState } from '@store/index';
import { useRecoilState } from 'recoil';
import { MODAL_COMPONENTS } from '.';
import Overlay from './Overlay';

interface ModalManagerProps {}

const Manager: (props: ModalManagerProps) => JSX.Element | null = ({}) => {
  const { hideModal } = useModal();
  const { modalType, modalProps } = useRecoilState(modalState)[0] || {};

  if (!modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[modalType];
  return (
    <Overlay onClick={hideModal}>
      <SpecificModal {...modalProps} />
    </Overlay>
  );
};

export default Manager;
