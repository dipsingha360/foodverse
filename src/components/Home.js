import Recipe from "./Recipe";

const Home = ({ recipes, loading, error }) => {
  return (
    <div className="home container mx-auto py-10 flex flex-wrap gap-10 justify-center">
      {!loading && recipes.length === 0 && !error ? (
        <p className=" text-2xl lg:text-4xl font-bold text-rose-300">
          Nothing to show please search something !
        </p>
      ) : null}

      {loading && <p>{error ? error : "Loading..."}</p>}

      {recipes.length > 0 &&
        recipes.map((recipe) => (
          <Recipe recipe={recipe} key={recipe.recipe_id} />
        ))}
    </div>
  );
};

export default Home;
