import React from 'react'
import PropTypes from 'prop-types'

export default function Button(p_objProps) {
    const pvthandleOnClick = () => {

    }
    return (
        <button className="btn btn-outline-primary" onClick={pvthandleOnClick()}>{p_objProps.name}</button>
    )
}

Button.propTypes = {
    name: PropTypes.string.isRequired
}
