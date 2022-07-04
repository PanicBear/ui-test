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

const WelcomeModal = ({ closeModal }: ModalProps) => {
  return (
    <StyledModal>
      <Header>
        <h1>Welcome Modal</h1>
        <button onClick={closeModal}>x</button>
      </Header>

      <hr />
      <p>Hello World! Whats your name?</p>
      <input type="text" placeholder="Your name" />
      <button onClick={closeModal}>close</button>
    </StyledModal>
  );
};

export default WelcomeModal;
