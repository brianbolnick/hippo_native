import { useQuery } from "@apollo/react-hooks";
import { get } from "lodash";
import GET_RECIPE_QUERY from "../apollo/getRecipeQuery";

const useRecipeQuery = variables => {
  const { data, error, loading } = useQuery(GET_RECIPE_QUERY, {
    variables
  });

  const recipe = get(data, "recipeQuery", {});

  return {
    data: recipe,
    error,
    loading
  };
};

export default useRecipeQuery;
