// Styles
import './ModalAlerts.less';

function ModalAlerts({ title, color, className }) {
  return (
    <div className="modal-alert-list">
      <div className={`modal-alerts${className ? ' ' + className : ''}`}>
        <p className="modal-alerts-title" style={{ color: color }}>
          {title}
        </p>
      </div>
    </div>
  );
}

export default ModalAlerts;
