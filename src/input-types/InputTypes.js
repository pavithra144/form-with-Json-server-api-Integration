import React, { useState } from 'react'

export const InputTypes = () => {

    const [firstname, setFirstName] = useState('')
    const [radiobox, setRadioBox] = useState([
        { id: 1, label: 'Female', checked: false },
        { id: 2, label: 'Male', checked: false }]);
    const [checkboxInput, setCheckboxInput] = useState([
        { id: 1, label: 'CB1', checked: false },
        { id: 2, label: 'CB2', checked: false },
        { id: 3, label: 'CB3', checked: false },
        { id: 4, label: 'CB4', checked: false }])
    const [dropdownBox, setDropdownBox] = useState([
        { id: 1, label: 'DB1' },
        { id: 2, label: 'DB2' },
        { id: 3, label: 'DB3' },
        { id: 4, label: 'DB4' }]);
    const [fileupload, setFileupload] = useState('')

    const onChangeHandler = (e) => {
        const { type, name, value, files } = e.target
        if (type == 'text') {
            setFirstName(value)
        }
        if (type == 'radio') {
            setRadioBox(prevState => {
                return prevState.map(item => {
                    return { ...item, checked: item.label === value }
                })
            })
        }
        if (type == 'checkbox') {
            setCheckboxInput(prevState => {
                return prevState.map(item => {
                    if (item.label === value) {
                        return { ...item, checked: !item.checked };
                    }
                    return item;
                })
            })
        }
        if (name == 'dropdown-option') {
            setDropdownBox(value)
        }
        if (type == 'file') {
            setFileupload(files[0])
        }

    }

    return (
        <div className='m-4'>
            <div className='m-2'>
                <h4>text</h4>
                <input type='text' value={firstname} onChange={onChangeHandler} />
            </div>
            <div className='m-2'>
                <h4>radio</h4>
                {radiobox && radiobox.map(item => (
                    <>
                        <input type='radio' checked={item.checked} onChange={onChangeHandler} value={item.label} />
                        <label className='m-2'>{item.label}</label>
                    </>
                ))}
            </div>
            <div className='m-2'>
                <h4>checkbox</h4>
                {checkboxInput && checkboxInput.map(item => (
                    <>
                        <input type='checkbox' checked={item.checked} onChange={onChangeHandler} value={item.label} />
                        <label className='m-2'>{item.label}</label>
                    </>
                ))}
            </div>
            <div className='m-2'>
                <h4>dropdown</h4>
                <select name='dropdown-option' value={dropdownBox} onChange={() => onChangeHandler}>
                    {dropdownBox.map(item => (
                        <>
                            <option value={item.label}>{item.label}</option>
                        </>
                    ))}
                </select>

            </div>
            <div className='m-2'>
                <h4>File Upload</h4>
                <input type='file' value={fileupload} onChange={() => onChangeHandler} />
            </div>
            <p>{JSON.stringify(firstname)}</p>

            <p>{JSON.stringify(radiobox)}</p>
            <p>{JSON.stringify(checkboxInput)}</p>
            <p>{JSON.stringify(dropdownBox)}</p>
            <p>{JSON.stringify(fileupload)}</p>
            <p>{JSON.stringify(firstname)}</p>
        </div>
    )
}
