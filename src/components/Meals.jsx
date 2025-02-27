import { MealItem } from "./MealItem";
import useHttp from "../hooks/useHTTP";
import ErrorCatch from "./ErrorCatch";

const requestedConfig = {};

export function Meals() {
  const { data, isLoading, error } = useHttp(
    "http://localhost:3000/meals",
    requestedConfig,
    []
  );

  if (isLoading) {
    return <p className="center">Fetching data ...</p>;
  }
  if (error) {
    return <ErrorCatch title="Failed to fetch meals." message={error} />;
  }

  if (!data) {
    return <p>No meals found.</p>;
  }

  console.log(data);

  return (
    <ul id="meals">
      {data.map((meal) => (
        <li key={meal.id} className="meal-item">
          <MealItem meal={meal} />
        </li>
      ))}
    </ul>
  );
}
