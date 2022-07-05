import Manager from '@components/atoms/Manager';
import Overlay from '@components/atoms/Overlay';
import { ModalType } from '@components/molecules';
import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface ModalState {
  isOpen: boolean;
  modalType: ModalType;
  [key: string]: any;
}

type ModalContextType = {
  showModal: (modalType: ModalType) => void;
  modalState: ModalState;
  updateModalState: (data: any) => void;
};

interface ModalContextProps {
  modals: any;
  children: ReactNode;
  [key: string]: any;
}

const ModalContext = createContext<ModalContextType>({
  showModal: () => {},
  modalState: { isOpen: false, modalType: 'WELCOME_MODAL' },
  updateModalState: () => {},
});

export const ModalProvider = ({ modals, children, ...attrs }: ModalContextProps) => {
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    modalType: 'WELCOME_MODAL',
  });

  if (typeof modals === 'undefined') {
    throw new Error('Pass rootModal as `modals` prop to ModalProvider');
  }

  if (!Object.keys(modals).length) {
    throw new Error('The `modals` object passed to ModalProvider is empty');
  }

  const showModal = (modalType: ModalType) => {
    setModalState((prev) => {
      return {
        ...prev,
        modalType,
        isOpen: true,
      };
    });
  };

  const updateModalState = (data: Record<string, any>) => {
    return setModalState((prev) => {
      return {
        ...prev,
        data,
      };
    });
  };

  return (
    <ModalContext.Provider value={{ showModal, modalState, updateModalState }} {...attrs}>
      {children}
      {modalState.isOpen && (
        <Overlay
          onClick={() => {
            setModalState((prev) => {
              return {
                ...prev,
                isOpen: false,
              };
            });
          }}
        >
          <Manager modalComps={modals} modalType={modalState.modalType} />
        </Overlay>
      )}
    </ModalContext.Provider>
  );
};

// Consumer
export const useModal = () => {
  const context = React.useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  return context;
};
