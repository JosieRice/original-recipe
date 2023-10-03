"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const recipeSchema = z.object({
    cookTime: z.string(),
    creatorUid: z.string(),
    description: z.string(),
    prepTime: z.string(),
    recipeName: z.string(),
    sourceType: z.string(),
    sourceUrl: z.string(),
});

export async function create(formData: FormData) {
    const parsed = recipeSchema.parse({
        cookTime: formData.get("cookTime"),
        creatorUid: formData.get("creatorUid"),
        description: formData.get("description"),
        prepTime: formData.get("prepTime"),
        recipeName: formData.get("recipeName"),
        sourceType: formData.get("sourceType"),
        sourceUrl: formData.get("sourceUrl"),
    });

    await sql`INSERT INTO RECIPES 
        (
            cookTime, 
            creatorUid,
            dateCreated,
            dateUpdated,
            description,
            prepTime,
            recipeName,
            sourceType,
            sourceUrl
        ) 
            VALUES 
        (
            ${parsed.cookTime}, 
            ${parsed.creatorUid},
            ${new Date().toISOString()},
            ${new Date().toISOString()},
            ${parsed.description},
            ${parsed.prepTime}, 
            ${parsed.recipeName},
            ${parsed.sourceType},
            ${parsed.sourceUrl}
        )`;
    revalidatePath("/"); // Update cached posts
    redirect("/"); // Go back to homepage
}

// cookInstructions VARCHAR(255)[],
// description VARCHAR(255),
// displayName VARCHAR(255),
// imageUrl VARCHAR(255),
// ingredients VARCHAR(255)[],
// prepInstructions VARCHAR(255)[],
