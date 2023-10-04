import { NavBar } from "@/components/NavBar";
import { getSession } from "@auth0/nextjs-auth0";
import Link from "next/link";

import { getAllRecipes } from "./actions";

export default async function Home() {
    const allRecipes = await getAllRecipes();
    const session = await getSession();

    return (
        <main className="container">
            <NavBar />
            <div>
                {allRecipes.map((recipe) => {
                    return <div key={recipe.id}>{recipe.recipename}</div>;
                })}
            </div>
            <Link className="btn" href={"/add"}>
                Add
            </Link>
        </main>
    );
}
