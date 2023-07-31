import React, { useState, useContext } from 'react'
import { AppContext } from './context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = () => {
    const { dispatch } = useContext(AppContext);
    const [name, setname] = useState('');
    const [cost, setcost] = useState('');
    const onSubmmit = (event) => {
        event.preventDefault();
        setname(" ");
        setcost(" ");

        const expensess = {
            name: name,
            cost: parseInt(cost),
            id: uuidv4()

        }
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expensess,
        })
    };
    return (
        <form>
            <div className='row'>
                <div className='col-sm'>
                    <label for='name'>Name</label>
                    <input required='required'
                        type='text'
                        className='form-control'
                        value={name}
                        id='name'
                        onChange={(event) => setname(event.target.value)}
                    >
                    </input>
                </div>
                <div className='col-sm'>
                    <label for='cost'>Cost</label>
                    <input required='required'
                        type='text'
                        className='form-control'
                        id='cost'
                        value={cost}
                        onChange={(event) => setcost(event.target.value)}
                    >
                    </input>

                </div>
                <div className='col-sm mt-4'>
                    <button type='submit' className=' btn btn-dark rounded-0' onClick={onSubmmit}>Submit</button>
                </div>

            </div>
        </form >
    )
}

export default AddExpenseForm
