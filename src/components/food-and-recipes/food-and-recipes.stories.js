import "./food-and-recipes.css";
import foodAndRecipesFood from "./food-and-recipes-food.html";
import foodAndRecipesSwitch from "./food-and-recipes-switch.html";

export default {
  title: "Components/Food and Recipes",
  parameters: { layout: "centered" },
};

export const filterFood = () => foodAndRecipesFood;
export const filterSwitch = () => foodAndRecipesSwitch;
