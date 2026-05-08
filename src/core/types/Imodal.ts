import { ReactNode } from "react";

export interface IModalProps {
    modalBtn: ReactNode;
    mainContent: ReactNode;
    modalDescription?: ReactNode;
    modalTitle?: ReactNode;
    closeBtn?: ReactNode;
  }