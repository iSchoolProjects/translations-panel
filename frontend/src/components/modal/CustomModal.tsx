import React, {SetStateAction} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import Icon from '../icon/Icon';

interface IModalProps {
  isModalOpened: boolean;
  setIsModalOpened: React.Dispatch<SetStateAction<boolean>>;
  title: string;
  body: JSX.Element;
  size?: 'lg' | 'sm' | 'md';
  saveHandler: () => void;
}

const CustomModal = ({isModalOpened, setIsModalOpened, title, body, size, saveHandler}: IModalProps) => {
  const handleCloseModal = () => {
    setIsModalOpened(false);
  };
  return (
    <Modal isOpen={isModalOpened} toggle={handleCloseModal} size={size}>
      <ModalHeader
        className="py-2"
        toggle={handleCloseModal}
        close={
          <button className="close" onClick={handleCloseModal}>
            <Icon name="cross" />
          </button>
        }
      >
        {title}
      </ModalHeader>
      <ModalBody>{body}</ModalBody>
      <ModalFooter className="bg-light py-1">
        <Button color="danger" onClick={handleCloseModal}>
          Cancel
        </Button>
        <Button color="primary" type="submit" onClick={saveHandler}>
          Save
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CustomModal;
