import React, { useReducer } from 'react'
import { initialState, reducer } from './reducers';

const InputTypesReducer = () => {
    //create initial state.
    // create reducer
    //dispatch the states

    const [inputTypes, dispatch] = useReducer(reducer, initialState);
    const onChangeHandler = (e) => {
        const { name, type, value, checked, files } = e.target;
        if (type === 'text') {
            return dispatch({ type: 'SET_TEXT', payload: value })
        }
        if (type === 'checkbox') {
            return dispatch({ type: 'SET_CHECKBOX', payload: value })
        }
        if (type === 'radio') {
            return dispatch({ type: 'SET_RADIO', payload: value })
        }
        if (name === 'drop-down') {
            return dispatch({ type: 'SET_DROPDOWN', payload: value })
        }
        if (type === 'file') {
            return dispatch({ type: 'SET_FILEUPLOAD', payload: files[0] })
        }
    }

    return (
        <div className='m-2'>
            <h1>Checkbox</h1>
            {inputTypes && inputTypes?.checkBoxArr.map((item) => {
                return <>
                    <label>{item.label}</label>
                    <input type='checkbox' value={item.label} checked={item.checked} onChange={onChangeHandler} /></>
            })}
            <h1>RadioBox</h1>
            {inputTypes.radioArr.map((item) => {
                return <>
                    <input type='radio' value={item.label} onChange={onChangeHandler} checked={item.checked} />
                    <label>{item.label}</label>
                </>
            })}
            <h1>Text</h1>
            <input type='text' value={inputTypes?.nameText} onChange={onChangeHandler} />
            <h1>Dropdown</h1>
            <select name='drop-down' onChange={onChangeHandler} value={inputTypes.dropdownArr.find(item => item.isSelected)?.label || ''}>
                {inputTypes.dropdownArr.map((item) => {
                    return <option value={item?.label} selected={item?.isSelected}>{item?.label}</option>
                })}
            </select>

            <h1>File upload</h1>
            <input type='file' name='file-upload' onChange={onChangeHandler} />

            <p>{JSON.stringify(inputTypes.checkBoxArr.map(item => item.checked))}</p>
            <p>{JSON.stringify(inputTypes.radioArr.map(item => item))}</p>
            <p>{JSON.stringify(inputTypes.nameText)}</p>
            <p>{JSON.stringify(inputTypes.dropdownArr)}</p>
            <p>{JSON.stringify(inputTypes.fileUpload?.name)}</p>
        </div>
    )
}

export default InputTypesReducer;