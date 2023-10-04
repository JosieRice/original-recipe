import { RecipeCard } from "@/components/RecipeCard";
import Link from "next/link";

import { getAllRecipes } from "./actions";

export default async function Home() {
    const allRecipes = await getAllRecipes();

    return (
        <main className="container">
            <div className="flex flex-initial flex-wrap justify-around">
                {allRecipes.map((recipe) => {
                    return <RecipeCard description={recipe.description} key={recipe.id} recipeName={recipe.recipename} />;
                })}
            </div>
            <Link className="btn" href={"/add"}>
                Add
            </Link>
        </main>
    );
}
