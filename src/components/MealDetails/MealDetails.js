import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const MealDetails = () => {
    const { mealId } = useParams();
    const [mealDetails, setMealDetails] = useState([]);
    const { strArea, strMeal, strMealThumb, strInstructions } = mealDetails;
    // console.log(mealDetails)
    useEffect(() => {
        fetch(` https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            .then(res => res.json())
            .then(data => setMealDetails(data.meals[0]))
    }, [mealId])
    return (
        <div className='text-center mb-5 pb-5'>
            <h2>meal details number : {mealId}</h2>
            <img src={strMealThumb} alt="" />
            <h1>{strMeal}</h1>
            <h2>{strArea}</h2>
            <p>{strInstructions}</p>
            <Link to='/meal'> <button>Go back</button></Link>
        </div>
    );
};

export default MealDetails;