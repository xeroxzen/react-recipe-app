import React from 'react'


const Recipe = ({title, calories, image}) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{calories}</p>
            <img src={image} alt="" />
        </div>
    );
};

export default Recipe;