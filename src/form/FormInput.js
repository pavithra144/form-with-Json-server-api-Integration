import React, { useState } from 'react';
import { Input, Button } from 'reactstrap'
import { getUser } from '../service/UserService';

const FormInput = () => {

    const [inputData, setInputData] = useState({ email: '', password: '' });
    const [isUserValid, setUserValid] = useState(null);

    const onChangeHandler = (e) => {
        const { name, value } = e.target
        setInputData(prevState => {
            return { ...prevState, [name]: value }
        })
    }

    const checkUser = async () => {
        const users = await getUser()
        const existingUsers = users && users.some(user => user?.email === inputData.email && inputData.password)
        setUserValid(existingUsers)
    }

    const submit = (e) => {
        e.preventDefault();
        checkUser()
    }

    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className='mt-4 p-4 col-lg-4'>
                <h1 className='p-2'>Login</h1>
                <Input className='p-2 m-2 border border-secondary-subtle' placeholder="username" type='email' name='email' value={inputData.email} onChange={onChangeHandler} />
                <Input className='p-2 m-2 border border-secondary-subtle' placeholder='password' type='password' name='password' value={inputData.password} onChange={onChangeHandler} />
                <Button color='dark m-2' block outline onClick={submit}>Submit</Button>
                {isUserValid !== null && (
                    <div className='mt-3'> {!isUserValid ? <p className='m-2 text-danger'>Not authenticated!</p> : <p className='text-primary'>logged in</p>} </div>)}
            </div>
        </div>
    )
}

export default FormInput