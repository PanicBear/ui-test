import Manager from '@components/atoms/Manager';
import Overlay from '@components/atoms/Overlay';
import { ModalType } from '@components/molecules';
import React, { createContext, ReactNode, useState } from 'react';

type ModalContextType = {
  showModal: (modalType: ModalType) => void;
};

interface ModalContextProps {
  modals: any;
  children: ReactNode;
  [key: string]: any;
}

const ModalContext = createContext<ModalContextType>({ showModal: () => {} });

const ModalProvider = ({ modals, children, ...attrs }: ModalContextProps) => {
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>();

  if (typeof modals === 'undefined') {
    throw new Error('Pass rootModal as `modals` prop to ModalProvider');
  }

  if (!Object.keys(modals).length) {
    throw new Error('The `modals` object passed to ModalProvider is empty');
  }

  const showModal = (modalType: ModalType) => {
    setModalType(modalType);
    setOpen(true);
  };

  return (
    <ModalContext.Provider value={{ showModal }} {...attrs}>
      {children}
      {open && (
        <Overlay
          onClick={() => {
            console.log('test');
            setOpen(false);
          }}
        >
          <Manager modalComps={modals} modalType={modalType!} />
        </Overlay>
      )}
    </ModalContext.Provider>
  );
};

// Consumer
const useModal = () => {
  const context = React.useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  const { showModal } = context;
  return {
    showModal,
  };
};

export { Overlay, ModalProvider, useModal };
