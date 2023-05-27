import React, { FC } from 'react';
import { Modal } from 'antd';
import styled from 'styled-components';

const InnerModal = styled.div`
  text-align: center;
`;

interface ModalProps {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const BasicModal: FC<ModalProps> = ({ title, isOpen, onClose, children }) => {
  return (
    <Modal className='modal' title={title} open={isOpen} onCancel={onClose}>
      <InnerModal>{children}</InnerModal>
    </Modal>
  );
};

export default BasicModal;
