import { useState, useEffect } from "react";
import axios from "axios";
import Restaurant from "@components/Restaurant";

export default function Pages() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/restaurants").then(({ data }) => {
      setRestaurants(data);
    });
  }, []);
  return (
    <main>
      {restaurants.map((restaurant) => {
        return (
          <Restaurant
            key={restaurant.id}
            title={restaurant.title}
            description={restaurant.description}
            location={restaurant.location}
            phonenumber={restaurant.phonenumber}
            pic1={restaurant.pic1}
            pic2={restaurant.pic2}
            pic3={restaurant.pic3}
          />
        );
      })}
    </main>
  );
}
