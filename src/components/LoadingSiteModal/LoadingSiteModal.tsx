import React from 'react';

// Styles
import './LoadingSiteModal.less';

function LoadingSiteModal() {
  return (
    <div className="loading-screen">
      <div className="background"></div>
      <p>Loading site...</p>
    </div>
  );
}

export default LoadingSiteModal;
