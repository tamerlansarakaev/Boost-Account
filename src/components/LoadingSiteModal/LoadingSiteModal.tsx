import React from 'react';
import { useSelector } from 'react-redux';

// Styles
import './LoadingSiteModal.less';

interface IModalReducerObject {
  statusMessage?: String;
}

interface ILoadingSiteModal {
  state: object;
  modalReducer: IModalReducerObject;
  stateModal: object;
}

function LoadingSiteModal() {
  const stateModal = useSelector(
    (state: ILoadingSiteModal) => state.modalReducer
  );
  return (
    <div className="loading-screen">
      <div className="background"></div>
      <p>Loading site...</p>
    </div>
  );
}

export default LoadingSiteModal;
