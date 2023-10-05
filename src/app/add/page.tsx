import { InputWithLabel } from "@/components/InputWithLabel";
import { SubmitButton } from "@/components/SubmitButton";
import { Textarea } from "@/components/TextareaWithLabel";
import UploadImage from "@/components/UploadImage";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

import { create } from "./actions";

export default withPageAuthRequired(
    async function Add() {
        return (
            <main className="container">
                <h1>Add a Recipe</h1>

                <UploadImage />
                <form action={create}>
                    <InputWithLabel label="Recipe Name" name="recipeName" />
                    <InputWithLabel label="Preparation Time" name="prepTime" />
                    <InputWithLabel label="Cook Time" name="cookTime" />
                    <InputWithLabel label="Description" name="description" />
                    <Textarea label="Ingredients" name="ingredients" />
                    <Textarea label="Preparation Instruction" name="prepInstructions" />
                    <Textarea label="Cooking Instruction" name="cookInstructions" />
                    <InputWithLabel label="Source Type" name="sourceType" />
                    <InputWithLabel label="Source URL" name="sourceUrl" />
                    <SubmitButton>Create Recipe</SubmitButton>
                </form>
            </main>
        );
    },
    { returnTo: "/api/auth/login" }
);
