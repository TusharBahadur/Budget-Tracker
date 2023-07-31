import React, { useContext } from 'react'
import { AppContext } from './context/AppContext';
import { TiDelete } from 'react-icons/ti'
const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);
    const handleDelete = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id

        })
    }
    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            {props.name}
            <div>
                <span className='badge rounded-pill bg-dark rounded-0  mr-3'>
                    $ {props.cost}

                </span>
                <TiDelete size='1.5em' onClick={handleDelete}></TiDelete>
            </div>
        </li>
    );
};

export default ExpenseItem
