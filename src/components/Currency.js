import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);

    const handleChangeCurrency = (event) => {
        setNewCurrency(event.target.value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    }
    return (
        <div className='alert alert-success'>
            <label className="input-group-text">Currency {currency}</label>
            <select className="form-select" aria-label="Default select example" value={newCurrency} onChange={handleChangeCurrency}>
                <option value="£">£ Pound</option>
                <option value="$">$ Dollar</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>

    );
};
export default Currency;


