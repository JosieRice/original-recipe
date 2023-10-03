"use server";

import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";
import { z } from "zod";

const recipeSchema = z.object({
    recipeName: z.string(),
});

export async function create(formData: FormData) {
    console.log(formData);

    const parsed = recipeSchema.parse({
        recipeName: formData.get("recipeName"),
    });

    const { rows } = await sql`INSERT INTO RECIPES (recipeName) VALUES (${parsed.recipeName})`;
    // mutate data
    // revalidate cache
    redirect("/");
}

// id SERIAL PRIMARY KEY,
// cookInstructions VARCHAR(255)[],
// cookTime VARCHAR(255),
// creatorUid VARCHAR(255),
// dateUpdated FLOAT,
// description VARCHAR(255),
// displayName VARCHAR(255),
// imageUrl VARCHAR(255),
// ingredients VARCHAR(255)[],
// prepInstructions VARCHAR(255)[],
// prepTime VARCHAR(255),
// recipeName VARCHAR(255),
// sourceType VARCHAR(255),
// sourceUrl VARCHAR(255)
