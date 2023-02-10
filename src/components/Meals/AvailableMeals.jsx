import React, { useEffect, useState } from "react";
import styles from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

export default function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    const fetchMeals = async () => {
      const res = await fetch(
        "https://more-hooks-default-rtdb.firebaseio.com/meals.json"
      );
      const data = await res.json();

      const loadedMeals = [];

      for (const key in data) {
        const meal = {
          id: key,
          name: data[key].name,
          price: data[key].price,
          description: data[key].description,
        };
        loadedMeals.push(meal);
      }
      setMeals(loadedMeals);
      setIsloading(false);
    };
    fetchMeals();
  }, []);

  if (isLoading) {
    return (
      <section className={styles.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    >
      {meal.name}
    </MealItem>
  ));
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}
