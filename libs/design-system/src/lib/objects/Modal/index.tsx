import { ReactNode } from 'react';

import styles from './Modal.module.scss';

export type ModalProps = {
  children: ReactNode | ReactNode[];
};

function ModalContainer({ children }: ModalProps) {
  return <dialog className={styles.modal}>{children}</dialog>;
}

export type ModalHeaderProps = {
  closeButton?: boolean;
  title: string;
};

function ModalHeader({ title }: ModalHeaderProps) {
  return <div className={styles.modal__header}>{title}</div>;
}

export type ModalContentProps = {
  children: ReactNode | ReactNode[];
};

function ModalContent({ children }: ModalContentProps) {
  return <div className={styles.modal__content}>{children}</div>;
}

export type ModalFooterProps = {
  children: ReactNode | ReactNode[];
};

function ModalFooter({ children }: ModalFooterProps) {
  return <div className={styles.modal__footer}>{children}</div>;
}

export const Modal = Object.assign(ModalContainer, {
  Header: ModalHeader,
  Content: ModalContent,
  Footer: ModalFooter,
});
