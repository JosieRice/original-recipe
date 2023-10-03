"use server";

import { getArrayFromText } from "@/utils/getArrayFromText";
import { getPostgresArray } from "@/utils/getPostgresArray";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const recipeSchema = z.object({
    cookInstructions: z.string(),
    cookTime: z.string(),
    creatorUid: z.string(),
    description: z.string(),
    ingredients: z.string(),
    prepInstructins: z.string(),
    prepTime: z.string(),
    recipeName: z.string(),
    sourceType: z.string(),
    sourceUrl: z.string(),
});

export async function create(formData: FormData) {
    const parsed = recipeSchema.parse({
        cookInstructions: formData.get("cookInstructions"),
        cookTime: formData.get("cookTime"),
        creatorUid: formData.get("creatorUid"),
        description: formData.get("description"),
        ingredients: formData.get("ingredients"),
        prepInstructins: formData.get("prepInstructions"),
        prepTime: formData.get("prepTime"),
        recipeName: formData.get("recipeName"),
        sourceType: formData.get("sourceType"),
        sourceUrl: formData.get("sourceUrl"),
    });

    await sql`INSERT INTO RECIPES
        (
            cookInstructions,
            cookTime,
            creatorUid,
            dateCreated,
            dateUpdated,
            description,
            ingredients,
            prepInstructions,
            prepTime,
            recipeName,
            sourceType,
            sourceUrl
        )
            VALUES
        (
            ${getPostgresArray(getArrayFromText(parsed.cookInstructions))},
            ${parsed.cookTime},
            ${parsed.creatorUid},
            ${new Date().toISOString()},
            ${new Date().toISOString()},
            ${parsed.description},
            ${getPostgresArray(getArrayFromText(parsed.ingredients))},
            ${getPostgresArray(getArrayFromText(parsed.prepInstructins))},
            ${parsed.prepTime},
            ${parsed.recipeName},
            ${parsed.sourceType},
            ${parsed.sourceUrl}
        )`;
    revalidatePath("/"); // Update cached posts from home route
    redirect("/"); // Go back to homepage
}
