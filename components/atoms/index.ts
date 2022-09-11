import AlertModal from './AlertModal';

export { default as Button } from './Button';
export * as Icon from './Icon';
export { default as Portal } from './Portal';
export { default as Logo } from './Logo';
export { default as CheckBox } from './CheckBox';
export { default as ConnectForm } from './ConnectForm';
export { default as AlertModal } from './AlertModal';
export { default as RecoilModalManager } from './RecoilModalManager';

export interface AlertModalProps {
  message: string;
  confirmText?: string;
  handleClose?: (...arg: any[]) => any;
  handleConfirm?: (...arg: any[]) => any;
}

export const MODAL_TYPES = {
  // ConfirmModal: 'ConfirmModal',
  AlertModal: 'AlertModal',
} as const;

export const MODAL_COMPONENTS: any = {
  // [MODAL_TYPES.ConfirmModal]: ConfirmModal,
  [MODAL_TYPES.AlertModal]: AlertModal,
};
