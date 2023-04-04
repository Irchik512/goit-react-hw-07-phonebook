import { createPortal } from 'react-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const popUpRef = document.getElementById('poUp-root')

export default function Notification({ children }) {
  return createPortal( <ToastContainer
    position="bottom-center"
    autoClose={3000}
    hideProgressBar
    newestOnTop
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable={false}
    pauseOnHover={false}
    theme="colored"
  >{children}</ToastContainer>, 
  popUpRef    
  );
}


