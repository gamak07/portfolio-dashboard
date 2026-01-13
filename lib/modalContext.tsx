"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type ModalType = "project" | "project-view" | "blog" | 'project-delete' | null;

interface ModalContextType {
  activeModal: ModalType;
  data: any | null; // Holds the project object when editing
  openModal: (type: ModalType, data?: any) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [data, setData] = useState<any | null>(null);

  const openModal = (type: ModalType, payload: any = null) => {
    setActiveModal(type);
    setData(payload);
  };

  const closeModal = () => {
    setActiveModal(null);
    setData(null);
  };

  return (
    <ModalContext.Provider value={{ activeModal, data, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
