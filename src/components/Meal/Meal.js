import React from 'react';
import { Link, useHistory } from 'react-router-dom';


const Meal = (props) => {
    const { strArea, strMeal, strMealThumb, strInstructions, idMeal } = props?.meal;

    const history = useHistory();
    const handleBtn = () => {

        history.push(`/meal/${idMeal}`)
    }
    return (
        <div className=' text-center rounded col-md-4 p-2 border border-secondary mt-2' >
            <img className='w-75' src={strMealThumb} alt="" />
            <p>Type of food : {strArea}</p>
            <h2>{strMeal}</h2>
            <h4>Description : {strInstructions.slice(0, 200)}</h4>
            <Link to={`/meal/${idMeal}`}>details</Link>
            <br />
            <button onClick={handleBtn}>meal details</button>
        </div >
    );
};

export default Meal;