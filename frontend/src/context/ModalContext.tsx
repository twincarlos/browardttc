"use client";
import { createContext, useState, useContext } from 'react';

export const ModalContext = createContext<{
    modalContent: React.ReactNode | null;
    setModalContent: (content: React.ReactNode) => void;
}>({
    modalContent: null,
    setModalContent: () => {},
});

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [modalContent, setModalContent] = useState<React.ReactNode | null>(null);

    return (
        <ModalContext.Provider value={{ modalContent, setModalContent }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);