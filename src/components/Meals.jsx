import { useEffect, useState } from "react";
import { MealItem } from "./MealItem";

export function Meals({}) {
  
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
        //...
      }

      const mealss = await response.json();

      setMeals(mealss);
    }

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <li key={meal.id} className="meal-item">
          <MealItem meal={meal} />
        </li>
      ))}
    </ul>
  );
}
