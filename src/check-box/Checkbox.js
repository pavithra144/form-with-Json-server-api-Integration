import React, { useState } from 'react'

const Checkbox = () => {

    const [parentCheckbox, setParentCheckbox] = useState([{ id: 1, label: 'parent checkbox', checked: false }])
    const [checkboxesList, setCheckboxList] = useState([
        {
            id: 1, label: 'CB1', checked: false
        }, {
            id: 2, label: 'CB2', checked: false
        },
        {
            id: 3, label: 'CB3', checked: false
        }, {
            id: 4, label: 'CB4', checked: false
        }]);

    const handleCheckbox = (id) => {
        setCheckboxList((prevCheckbox) => {
            return prevCheckbox.map((item) => {
                if (item.id === id) {
                    return { ...item, checked: !item.checked }
                }
                return item
            })

        })
    }
    const selectAllHandler = () => {

        const allChecked = !parentCheckbox[0].checked;
        setParentCheckbox((prevstate) =>
            prevstate.map((item) => ({ ...item, checked: allChecked }))
        );

        setCheckboxList((prevCheckbox) =>
            prevCheckbox.map((item) => ({ ...item, checked: allChecked }))
        );
    }
    console.log(parentCheckbox)
    return (
        <div>
            {parentCheckbox && parentCheckbox?.map(item => (
                <>
                    <input type='checkbox' checked={item.checked} onChange={selectAllHandler} />
                    <label>{item.label}</label>
                </>
            ))
            }

            {checkboxesList && checkboxesList.map((item) => (
                <div className='m-4'>
                    <input type='checkbox' checked={item.checked} onChange={() => handleCheckbox(item.id)} />
                    <label>{item.label}</label>
                </div>
            ))}

        </div>
    )
}

export default Checkbox