import React from 'react';
import PropTypes from 'prop-types';

function Paragraph({ text }) {
    return (
        <p className='text-blue-title text-base leading-5 font-normal lowercase '>
            {text}
        </p>
    )
}

export default Paragraph;

Paragraph.propTypes = {
    text: PropTypes.string,
}