import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import "./Meal.css";

const Meal = (props) => {
  // console.log(props);
  const { strMeal, strInstructions, strMealThumb } = props.meal;
  return (
    <div className="meal">
      <img src={strMealThumb} alt="" />
      <h3>{strMeal}</h3>
      <p>{strInstructions.slice(0, 200)}</p>
      <button onClick={() => props.handleCart(strMeal)} className="meal-btn">
        {" "}
        <span className="icon">
          <FontAwesomeIcon icon={faClipboard} />
        </span>
        Add to menu
      </button>
    </div>
  );
};

export default Meal;
