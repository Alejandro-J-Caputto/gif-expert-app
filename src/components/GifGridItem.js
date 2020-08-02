import React from 'react'
import PropTypes from 'prop-types';


export const GifGridItem = ({ id, title, url }) => {

    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title} />
            <p key={id}>{title}</p>
        </div>
    )
}



GifGridItem.protoTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

/*

Enzyme
Enzyme to JSON

 */

