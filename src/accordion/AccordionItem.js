import React, { useState } from 'react'
import data from './mock'
import Accordion from './Accordion'

const AccordionItem = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const handleItemClick = (index) => {
        setOpenIndex(openIndex === index ? null : index)
        //initially openIndex is null, and index is item.id which ll never be equal. and it sets openIndex with the item.id value
    }

    return (
        <div>
            {data.map((item, idx) => {
                return <div key={idx}>
                    <Accordion
                        title={item.title}
                        description={item.description}
                        handleClick={() => handleItemClick(item.id)}
                        isOpen={openIndex === item.id}
                    />
                </div>
            })}
        </div>
    )
}

export default AccordionItem