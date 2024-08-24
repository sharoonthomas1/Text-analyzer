import React from 'react';

function Alert(props) {
  const getAlertClass = (type) => {
    switch(type) {
      case 'success':
        return 'alert-success'; 
      case 'error':
        return 'alert-danger';
      case 'info':
        return 'alert-info';
      case 'warning':
        return 'alert-warning';
      default:
        return 'alert-secondary'; 
    }
  };

  return (
    <div style={{ height: '50px' }}>
      {props.alert && 
        <div className={`alert ${getAlertClass(props.alert.type)} alert-dismissible fade show `} role="alert">
          <strong>{props.alert.type}</strong>: {props.alert.msg}
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      }
    </div>
  );
}

export default Alert;

