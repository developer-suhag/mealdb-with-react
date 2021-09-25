import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Meal from "../Meal/Meal";
import "./Meals.css";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=a")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);

  // handle meal cart
  const [cart, setCart] = useState(0);
  const [meal, setMeal] = useState([]);
  const handleCart = (mealName) => {
    const count = cart + 1;
    setCart(count);
    // const newMeal = meal + mealName;
    const mealList = [...meal, mealName];
    setMeal(mealList);
  };

  const handleSearch = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <div className="search-box">
        <input
          type="search"
          name=""
          id=""
          onChange={handleSearch}
          className="search-field"
          placeholder="type here for search your meal"
        />
      </div>
      <div className="meals-container">
        <div className="meal-container">
          {meals.map((meal) => (
            <Meal meal={meal} handleCart={handleCart} key={meal.idMeal}></Meal>
          ))}
        </div>
        <div className="meal-cart">
          <Cart cart={cart} meal={meal}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Meals;
