import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

const Shop = () => {
    const dispatch = useDispatch();
    const {deposit, withdraw} = bindActionCreators(actionCreators, dispatch);

    return (
        <div className='text-center'>
            <h2>Redux:</h2>
            <button className="btn btn-primary mx-2" onClick={() => { deposit(100) }}>+</button>
            <button className="btn btn-primary mx-2" onClick={() => { withdraw(100) }}>-</button>
        </div>
    )
}

export default Shop
