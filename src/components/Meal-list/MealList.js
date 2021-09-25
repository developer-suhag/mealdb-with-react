import React from "react";
import "./MealList.css";

const MealList = (props) => {
  return (
    <div>
      <li className="list-item">{props.clist}</li>
    </div>
  );
};

export default MealList;
