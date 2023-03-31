import { createContext, ReactNode, useContext, useState } from 'react';

function showModalStub<T>(_component: JSX.Element): T {
  throw new Error(
    'showModal is not define be sure that you have wrapped with ModalContextProvider'
  );
}

function confirmModalStub<T>(_value: T) {
  throw new Error(
    'confirmModal is not define be sure that you have wrapped with ModalContextProvider'
  );
}

function cancelModalStub<T>(_value: CancelReason<T>) {
  throw new Error(
    'cancelModal is not define be sure that you have wrapped with ModalContextProvider'
  );
}

const ModalContext = createContext<ModalContextProps>({
  showModal: showModalStub,
  confirmModal: confirmModalStub,
  cancelModal: cancelModalStub,
});

export type ModalContextProviderProps = {
  children: ReactNode | ReactNode[];
};

type CancelReason<T = unknown> = {
  message: string;
  value: T;
};

interface ModalContextProps {
  showModal<T>(component: JSX.Element): Promise<ModalResult<T>>;
  confirmModal<T>(value: T): void;
  cancelModal(value: CancelReason): void;
}

type ModalResult<T> = {
  isCanceled: boolean;
  result: T;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface PromiseInfo<T = any> {
  resolve: (value: T | PromiseLike<boolean>) => void;
}

export function ModalContextProvider({ children }: ModalContextProviderProps) {
  const [modal, setModal] = useState<JSX.Element | undefined>();
  const [promiseInfo, setPromiseInfo] = useState<PromiseInfo>();

  function showModal<T>(component: JSX.Element) {
    setModal(component);
    return new Promise<ModalResult<T>>((resolve) => {
      setPromiseInfo({ resolve });
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const confirmModal = (result: any) => {
    promiseInfo?.resolve({ result, isCanceled: false });
    setModal(undefined);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cancelModal = (result: any) => {
    promiseInfo?.resolve({ result, isCanceled: true });
    setModal(undefined);
  };

  return (
    <ModalContext.Provider
      value={{
        showModal,
        cancelModal,
        confirmModal,
      }}
    >
      {children}
      {modal}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const { showModal } = useContext(ModalContext);

  return { showModal };
}

export function useModalManager() {
  const { confirmModal, cancelModal } = useContext(ModalContext);

  return { confirmModal, cancelModal };
}
