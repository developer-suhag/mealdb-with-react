import React from "react";
import MealList from "../Meal-list/MealList";
import "./Cart.css";

const Cart = (props) => {
  const { meal } = props;
  console.log(meal);
  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <h5>Items added: {props.cart}</h5>
      <div className="order-melas">
        <h4>Order meals: </h4>
        <ol className="meal-list">
          {meal.map((clist) => (
            <MealList clist={clist}></MealList>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Cart;
