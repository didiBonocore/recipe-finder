import React from "react";
import style from './recipe.module.css';

export default function Recipe({ title, calories, image, ingredients }) {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <p>Total calories: {Math.round(calories)}</p>
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <img src={image} alt="" className={style.image} />
    </div>
  );
}
