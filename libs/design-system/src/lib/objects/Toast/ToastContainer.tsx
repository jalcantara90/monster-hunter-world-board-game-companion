import { ToastContainer as ReactToastContainer } from 'react-toastify';

import './ToastContainer.scss';

export function ToastContainer() {
  return <ReactToastContainer
    draggablePercent={40}
  />
}
