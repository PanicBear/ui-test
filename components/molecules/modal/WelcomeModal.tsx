import { useModal } from 'context';
import { MouseEventHandler } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { ModalProps } from '.';
import ModalLayout from './ModalLayout';

const StyledModal = styled(ModalLayout)`
  width: 300px;
  padding: 20px;
  margin: auto;
  background-color: #fff;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface ModalForm {
  modal: string;
}

const WelcomeModal = ({ closeModal }: ModalProps) => {
  const { register, handleSubmit } = useForm<ModalForm>();
  const { updateModalState } = useModal();

  const onValid = (modalForm: ModalForm) => {
    console.log(modalForm);
    updateModalState(modalForm);
    closeModal();
  };

  return (
    <StyledModal>
      <Header>
        <h1>Welcome Modal</h1>
        <button onClick={closeModal}>x</button>
      </Header>

      <hr />
      <form onSubmit={handleSubmit(onValid)}>
        <p>Hello World! Whats your name?</p>
        <input {...register('modal')} type="text" placeholder="Your name" />
        <button>close</button>
      </form>
    </StyledModal>
  );
};

export default WelcomeModal;
