import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import HomeCard from "@components/HomeCard";
import SNavigationHome from "./style";

export default function NavigationHome() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/categories").then(({ data }) => {
      setCategories(data);
    });
  }, []);

  return (
    <SNavigationHome>
      {categories.map((categorie) => {
        return (
          <Link to={categorie.link} key={categorie.id}>
            <HomeCard
              key={categorie.id}
              label={categorie.label}
              picture={categorie.picture}
            />
          </Link>
        );
      })}
    </SNavigationHome>
  );
}
