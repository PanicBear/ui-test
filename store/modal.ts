import { AlertModalProps, MODAL_TYPES } from '@components/atoms';
import { atom } from 'recoil';

// export interface ConfirmModalType {
//   modalType: typeof MODAL_TYPES.ConfirmModal;
//   modalProps: ConfirmModalProps;
// }

export interface AlertModalType {
  modalType: typeof MODAL_TYPES.AlertModal;
  modalProps: AlertModalProps;
}

export type ModalType =
  // ConfirmModalType |
  AlertModalType;

export const modalState = atom<ModalType | null>({
  key: 'modalState',
  default: null,
});
