import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Recipe from "./Recipe";
import { useFetch } from "../hooks/useFetch";

const RecipeItem = () => {
  const { id } = useParams();

  const { data: recipe, loading, error } = useFetch(id);
  if (recipe.recipe) {
    console.log(recipe.recipe);
  }
  return <div>RecipeItem</div>;
};

export default RecipeItem;
