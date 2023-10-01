
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses, budget, currency, dispatch } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        //console.log('budget changed', event.target.value, budget, totalExpenses, typeof event.target.value, typeof budget, typeof totalExpenses);
        if(+event.target.value > 20000) {
            alert('The budget cannot exceed 20,000'); return; 
        } else if(+event.target.value < totalExpenses) {
            alert('The budget cannot be less than the total expenses'); return; 
        }
        setNewBudget(event.target.value);
        const _budget = parseInt(event.target.value);
        dispatch({
            type: 'SET_BUDGET',
            payload: _budget,
        });
    }
    return (
<div className='alert alert-secondary'>
    <span>Budget: {currency}{budget}</span><br />
    <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;