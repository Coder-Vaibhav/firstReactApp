import React from 'react'

function Alert(p_objProps) {
    const LMessage = p_objProps.alert.msg;
    if(LMessage === undefined){
        return; 
    }

    const capitalize = (string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

  return (
    <div className={`alert alert-${p_objProps.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(p_objProps.alert.type)}: </strong> {LMessage}
        <button type="button" className="btn-close" id='error' data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert
