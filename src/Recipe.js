import React from 'react';
import style from './recipes.module.css';


const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div className={style.recipe}>
            <h3>{title}</h3>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Amount of calories per 100g: {calories}</p>
            <img className={style.image} src={image} alt="Image" />
        </div>
    );
};

export default Recipe;