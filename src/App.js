import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/budget';
import Remaining from './components/Remaining';
import Spent from './components/Spent';
import ExpenseList from './components/ExpenseList';
import { AppProvider } from './components/context/AppContext';
import AddExpenseForm from './components/AddExpenseForm';
import Edit from './components/Edit';


const App = () => {
  return (
    <AppProvider>
      <div className='container'>
        <h1 className='mt-3'>Budget Tracker</h1>
        <div className='row mt-3'>

          <div className='col-sm'>
            <Budget />
            <Edit />
          </div>
          <div className='col-sm'>
            <Remaining />
          </div>
          <div className='col-sm'>
            <Spent />
          </div>


        </div>
        <h3 className='mt-5'>Expenses</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <ExpenseList />
          </div>
        </div>
        <div>
          <h3 className='mt-5'>Add Expense</h3>
          <div className=' row mt-3'>
            <div className='col-sm'>
              <AddExpenseForm />
            </div>
          </div>
        </div>


      </div>


    </AppProvider>

  )
}

export default App
