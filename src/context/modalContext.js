// ModalContext.js
import React, { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }) => {
  const [isCreateUserModalOpen, setCreateUserModalOpen] = useState(false);
  const [isEditUserModalOpen, setEditUserModalOpen] = useState(false);

  const openCreateUserModal = () => {
    setCreateUserModalOpen(true);
  };

  const closeCreateUserModal = () => {
    setCreateUserModalOpen(false);
  };

  const openEditUserModal = () => {
    setEditUserModalOpen(true);
  };

  const closeEditUserModal = () => {
    setEditUserModalOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isCreateUserModalOpen,
        openCreateUserModal,
        closeCreateUserModal,
        isEditUserModalOpen,
        openEditUserModal,
        closeEditUserModal
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
