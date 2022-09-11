import { modalState } from '@store/index';
import { useRecoilState } from 'recoil';
import { MODAL_COMPONENTS } from '.';

interface ModalManagerProps {}

const Manager: (props: ModalManagerProps) => JSX.Element | null = ({}) => {
  const { modalType, modalProps } = useRecoilState(modalState)[0] || {};

  if (!modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[modalType];
  return <SpecificModal {...modalProps} />;
};

export default Manager;
