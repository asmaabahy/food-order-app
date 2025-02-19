export function MealItem({ meal }) {
  return (
    <article>
      <img src={"http://localhost:3000/" + meal.image} alt={meal.name} />
      <div>
        <h3>{meal.name}</h3>
        <p className="meal-item-price">{meal.price}</p>
        <p className="meal-item-description">{meal.description}</p>
      </div>
      <p className="meal-item-actions">
        <button className="button">Add to cart</button>
      </p>
    </article>
  );
}
