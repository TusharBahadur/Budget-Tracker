import React, { useContext } from 'react'
import { AppContext } from './context/AppContext'
const Spent = () => {
    const { expenses } = useContext(AppContext);
    const totalexpenses = expenses.reduce((total, item) => {
        return (total += item.cost)
    }, 0)
    return (
        <div className='alert alert-primary'>
            <span>Spent so far : $ {totalexpenses}</span>

        </div>
    )
}

export default Spent
