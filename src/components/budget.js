import React from 'react'
import { useContext } from 'react'
import { AppContext } from './context/AppContext'
import App from '../App'


const Budget = () => {
    const { budget } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span> Budget: $ {budget}</span>




        </div>
    )
}

export default Budget
