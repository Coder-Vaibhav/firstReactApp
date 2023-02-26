import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function InputForm(p_objProps) {
    const [text, setText] = useState("");
    const pvthandleOnUpcaseClick = () => {
        setText(text.toUpperCase());
        p_objProps.showAlert("Text changed to uppercasse!", "info");
    }
    const pvthandleOnLowcaseClick = () => {
        setText(text.toLowerCase());
        p_objProps.showAlert("Text changed to lowercase!", "info");
    }
    const pvthandleOnTextContentChange = (p_event) => {
        setText(p_event.target.value);
    }
    const pvtGetDisablecls = (p_event) => {
        return ( (text.length <= 0) ? "disabled" : "");
    }

    return (
        <div className={`container text-${p_objProps.darkMode ? 'light' : 'dark'}`}>
            <div className="my-2">
                <label htmlFor="myInputForm" className="form-label">{p_objProps.heading} :</label>
                <textarea className={`form-control bg-${p_objProps.darkMode ? 'dark' : 'light'} text-${p_objProps.darkMode ? 'light' : 'dark'}`} autoFocus onChange={pvthandleOnTextContentChange} id="myInputForm" value={text} rows="12" placeholder={p_objProps.emptyText}></textarea>
            </div>
            <button className={"btn btn-outline-primary " + pvtGetDisablecls()} onClick={pvthandleOnUpcaseClick} >Click to Uppercase</button>
            <button className={"btn btn-outline-primary mx-2 " + pvtGetDisablecls()} onClick={pvthandleOnLowcaseClick} >Click to Lowercase</button>
            <button className={"btn btn-outline-primary " + pvtGetDisablecls()} onClick={ ()=>{ setText(''); p_objProps.showAlert("Cleared All Text!", "danger"); } } >Clear All</button>
            <div className="my-4">
                <h3>Input Summery:</h3>
                { (text.length !== 0) ? text.trim().split(/\s+/).length : 0 } words and {text.length} characters

                <h3 className='text-success mt-4'>Preview:</h3>
                <code>{text}</code>
            </div>
        </div>
    )
}

InputForm.propTypes = {
    emptyText: PropTypes.string
}

InputForm.defaultProps = {
    emptyText: "Please enter here...",
    heading: ""
}