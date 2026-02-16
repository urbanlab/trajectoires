import { ReactNode, createContext, useState } from 'react';

import { Modal } from 'antd';

export type ModalContextType = {
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
};

export const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<ReactNode>(null);
  const [open, setOpen] = useState(false);

  const openModal = (content: ReactNode) => {
    setContent(content);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setContent(null);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      <Modal
        centered
        open={open}
        onCancel={closeModal}
        footer={null}
        width={'auto'}
        styles={{
          body: {
            padding: '1rem',
          },
        }}
      >
        {content}
      </Modal>
    </ModalContext.Provider>
  );
}
