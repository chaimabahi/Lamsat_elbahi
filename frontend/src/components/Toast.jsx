import { useEffect } from 'react';
import { useCart } from '../context/CartContext';
import './Toast.css';

const Toast = () => {
  const { toasts } = useCart();

  return (
    <div className="toast-container">
      {toasts.map(toast => (
        <div key={toast.id} className={`toast toast--${toast.type}`}>
          <span className="toast__icon">
            {toast.type === 'success' ? '✓' : 'ℹ'}
          </span>
          <span className="toast__message">{toast.message}</span>
        </div>
      ))}
    </div>
  );
};

export default Toast;
