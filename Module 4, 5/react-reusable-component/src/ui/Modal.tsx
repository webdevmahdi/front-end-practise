import React, { ReactNode, createContext, useContext, useRef } from "react";
import cn from "../utils/cn";
import { createPortal } from "react-dom";

const ModalContext = createContext<TModalContext | null>(null);

type TModal = {
    isOpen: boolean;
    onClose: ()=> void;
    children: ReactNode;
}
type TModalContext = {
    onClose : ()=> void
}
type TCloseButton = {
    children?: ReactNode;
}
type THeader = TCloseButton;


const Modal = ({ isOpen, onClose, children } : TModal) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const handleOutsideEvent = (e: MouseEvent) => {

    if (!containerRef.current?.contains(e.target as Node)) {
      onClose();
    }

  };

  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <div
        className={cn(
          "fixed inset-0 flex justify-center items-center bg-gray-500/70 invisible z-[999]",
          {
            visible: isOpen,
          }
        )}
        onClick={()=>handleOutsideEvent}
      >
        <div ref={containerRef} className=" p-4 mb-3 bg-white w-full max-w-sm rounded-md">
          {children}
        </div>
      </div>
      
    </ModalContext.Provider>,
    document.getElementById("portal") as Element
  );
};

const CloseButton = ({ children } : TCloseButton) => {
  const { onClose } = useContext(ModalContext) as TModalContext;
  return (
    <button onClick={onClose}>
      {children ? (
        children
      ) : (
        <svg
          className="size-6 bg-red-500 rounded-md text-white p-0.5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      )}
    </button>
  );
};

const Header = ({children} : THeader) => {
    return <div className="flex justify-between items-center w-full">{children}</div>
}

Modal.Header = Header;
Modal.CloseButton = CloseButton;
export default Modal;
