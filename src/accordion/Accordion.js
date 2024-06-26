import React, { useState } from 'react'


const Accordion = ({ title, description, handleClick, isOpen }) => {

    return (
        <div className='m-4'>
            <p onClick={handleClick}>{title} <span>{isOpen ? '-' : '+'}</span></p>
            {isOpen && <p>{description}</p>}
        </div>
    )
}

export default Accordion