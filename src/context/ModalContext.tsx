import React, { createContext, useContext, useState } from "react";

interface ModalContextType {
  openModal: () => void;
  closeModal: () => void;
  isModalOpen: boolean;
}
const ModalContext = createContext<ModalContextType | undefined>(undefined);

const ModalContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal, isModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export default ModalContextProvider;
