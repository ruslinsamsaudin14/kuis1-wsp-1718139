import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Details from './Details';



const Recipe = ({ recipe }) => {
    const [show, setShow] = useState(false);
    const { label, image, url, ingredients } = recipe.recipe;
    return (
        <div className="recipe">
            <h2>{label}</h2>
            <img src={image} alt={label} />
            < a href={url} target="_blank" rel="nooper noreferrer">
                LINK
            </a>
            <button onClick={() => setShow(!show)}>komposisi</button>
            {show && <Details ingredients={ingredients} />}
        </div>
    );
}

export default Recipe;
