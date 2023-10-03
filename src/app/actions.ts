import { sql } from "@vercel/postgres";
import { cache } from "react";

export const revalidate = 3600; // revalidate the data at most every hour

export const getAllRecipes = cache(async () => {
    "use server";
    const { rows } = await sql`SELECT * from RECIPES LIMIT 10`;

    return rows;
});
