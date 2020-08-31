import React from 'react';

import Aux from '../../../hoc/Aux';

const orderSumary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}> 
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>);
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicius burguer with the following ingredients: </p>

            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue with checkout</p>
        </Aux>
    );
}

export default orderSumary;