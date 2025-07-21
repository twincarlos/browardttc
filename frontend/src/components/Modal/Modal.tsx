'use client';
import './Modal.css';
import { useModal } from '@/context/ModalContext';

export default function Modal() {
  const { modalContent, setModalContent } = useModal();

  if (!modalContent) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-wrapper f fd-c ai-fs jc-fs">
        <button
          className="modal-close-button"
          onClick={() => setModalContent(null)}
        >
          X
        </button>
        <div className="modal-content">{modalContent}</div>
      </div>
    </div>
  );
}
