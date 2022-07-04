import { ModalProps, ModalType } from '@components/molecules';
import React from 'react';

interface ModalManagerProps {
  modalComps: Record<ModalType, (props: ModalProps) => JSX.Element>;
  modalType: ModalType;
  [key: string]: any;
}

const Manager = ({ modalComps, modalType, ...attrs }: ModalManagerProps) => {
  if (!modalType) {
    return null;
  }

  const SpecificModal = modalComps[modalType];
  return <SpecificModal {...attrs} />;
};

export default Manager;
