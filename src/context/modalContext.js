import React, { createContext, useContext, useReducer } from 'react';

// Initial state for the modal
const initialState = {
  isAddModalOpen: false,
  isEditModalOpen: false,
  isViewModalOpen: false
};

// Define action types
export const OPEN_ADD_MODAL = 'OPEN_ADD_MODAL';
const CLOSE_ADD_MODAL = 'CLOSE_ADD_MODAL';
const OPEN_EDIT_MODAL = 'OPEN_EDIT_MODAL';
const CLOSE_EDIT_MODAL = 'CLOSE_EDIT_MODAL';
const OPEN_VIEW_MODAL = 'OPEN_VIEW_MODAL';
const CLOSE_VIEW_MODAL = 'CLOSE_VIEW_MODAL';

// Reducer function to handle actions
const modalReducer = (state, action) => {
  switch (action.type) {
    case OPEN_ADD_MODAL:
      return { ...state, isAddModalOpen: true };
    case CLOSE_ADD_MODAL:
      return { ...state, isAddModalOpen: false };
    case OPEN_EDIT_MODAL:
      return { ...state, isEditModalOpen: true };
    case CLOSE_EDIT_MODAL:
      return { ...state, isEditModalOpen: false };
    case OPEN_VIEW_MODAL:
      return { ...state, isViewModalOpen: true };
    case CLOSE_VIEW_MODAL:
      return { ...state, isViewModalOpen: false };
    default:
      return state;
  }
};

// Create the context
const ModalContext = createContext();

// ModalProvider component to wrap your app with
export const ModalProvider = ({ children }) => {
  const [modalState, dispatch] = useReducer(modalReducer, initialState);

  return <ModalContext.Provider value={{ modalState, dispatch }}>{children}</ModalContext.Provider>;
};

// Custom hook to use the modal context
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
