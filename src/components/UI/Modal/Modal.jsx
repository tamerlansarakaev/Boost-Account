// Global
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DATA_LOADED } from '../../../reducers/types';

// Styles
import './Modal.less';

function Modal({ children }) {
  const state = useSelector((state) => state);
  const [status, setStatus] = React.useState(true);
  const dispatch = useDispatch();

  function saveStatus() {
    if (state) {
      setStatus(!state.modalStatus);
      dispatch({ ...state, type: DATA_LOADED, modalStatus: status });
    } else {
      setStatus(false);
      dispatch({ ...state, type: DATA_LOADED, modalStatus: status });
    }
  }

  React.useEffect(() => {
    dispatch({ ...state, type: DATA_LOADED, modalStatus: status });

    if (status) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
  }, [status]);

  return (
    <div className="modal-wrapper">
      <div className="modal-background" onClick={() => saveStatus()}></div>
      <div className="modal-box">{children}</div>
    </div>
  );
}

export default Modal;
