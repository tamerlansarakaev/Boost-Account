/* eslint-disable react-hooks/exhaustive-deps */
// Global
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_MODAL_STATUS } from '../../../reducers/types';

// Styles
import './Modal.less';

function Modal({ children, onClick = () => {} }) {
  const state = useSelector((state) => state.site);
  const [status] = React.useState(true);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({ ...state, type: SET_MODAL_STATUS, modalStatus: status });

    if (status) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
  }, [status]);

  return (
    <div className="modal-wrapper">
      <div
        className="modal-background"
        onClick={() => {
          onClick();
        }}
      ></div>
      {children}
    </div>
  );
}

export default Modal;
