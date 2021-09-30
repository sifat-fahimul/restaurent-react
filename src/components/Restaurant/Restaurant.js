import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Restaurant = () => {
    const [meals, setMeals] = useState([]);
    const [searchText, setSearchText] = useState('');
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText]);


    const handleSearchField = e => {
        const searchTextValue = e.target.value;
        setSearchText(searchTextValue);
    }
    return (

        <div className='container text-center'>
            <input onChange={handleSearchField} className='w-75 border-2 rounded border-primary ' type="text" placeholder='search your food' />
            <div className='row'>

                {
                    meals.map(meal => <Meal
                        meal={meal}
                        key={meal.idMeal}
                    ></Meal>)
                }
            </div>

        </div>
    );
};

export default Restaurant;