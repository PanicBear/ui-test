import FarewellModal from './FarewellModal';
import WelcomeModal from './WelcomeModal';
import AreaModal from './AreaModal';

export type ModalType = 'WELCOME_MODAL' | 'FAREWELL_MODAL' | 'AREA_MODAL';

export interface ModalProps {
  [key: string]: any;
}

export const ModalList: Record<ModalType, (props: ModalProps) => JSX.Element> = {
  WELCOME_MODAL: WelcomeModal,
  FAREWELL_MODAL: FarewellModal,
  AREA_MODAL: AreaModal,
};
