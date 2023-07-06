import React from 'react';
import { useSpring, animated } from 'react-spring';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }
  const fadeProps = useSpring({
    opacity: isOpen ? 1 : 0,
  });
  return (
    <animated.div style={fadeProps} className="modal">
      <animated.div style={fadeProps} className="modal-content">
        <animated.span style={fadeProps} className="close" onClick={onClose}>
          &times;
        </animated.span>
        {children}
      </animated.div>
    </animated.div>
  );
};

export default Modal;