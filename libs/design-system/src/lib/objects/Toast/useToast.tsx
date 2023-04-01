import { toast, ToastPromiseParams, ToastOptions } from 'react-toastify';

const toastConfig: ToastOptions = {
  position: toast.POSITION.TOP_RIGHT,
  theme: 'dark',
  autoClose: 2000,
}

export function useToast() {
  const success = (message: string) => {
    toast.success(message, toastConfig);
  };
  const warning = (message: string) => {
    toast.warning(message, toastConfig);
  };
  const error = (message: string) => {
    toast.error(message, toastConfig);
  };

  function promise<T>(promise: Promise<T>, toastPromiseParams: ToastPromiseParams<T>) {
    return toast.promise(promise, toastPromiseParams, toastConfig);
  };

  return {
    success,
    warning,
    error,
    promise
  };
}
