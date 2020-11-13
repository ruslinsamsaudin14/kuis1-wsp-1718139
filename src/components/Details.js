import React from 'react';
import { v4 as uuidv4 } from 'uuid';


const Details = ({ ingredients }) => {
    return ingredients.map(ingredient => {
        return (
            <div class="Details">
                <ul key={uuidv4()} className="ingredient-list">
                    <li className="ingredient-text">{ingredient.text}</li>
                    <li className="ingredient-weight">{ingredient.weight}</li>
                </ul>
            </div>
        )
    });
}


export default Details
