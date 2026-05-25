export interface IModalProps {
  modalBtn?: React.ReactNode;
  mainContent: React.ReactNode;
  modalTitle?: string;
  modalDescription?: string;
  closeBtn?: React.ReactNode;
  contentClassName?: string;
  width?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}