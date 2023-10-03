import { SubmitButton } from "@/components/SubmitButton";
import { getSession } from "@auth0/nextjs-auth0";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

import { create } from "./actions";

export default withPageAuthRequired(
    async function Add() {
        const session = await getSession();

        return (
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                    <h1>Add a Recipe</h1>
                </div>

                <form action={create}>
                    <input
                        className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
                        name="recipeName"
                        placeholder="Recipe Name"
                        type="text"
                    />
                    <input
                        className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
                        name="prepTime"
                        placeholder="Prep Time"
                        type="text"
                    />
                    <input
                        className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
                        name="cookTime"
                        placeholder="Cooking Time"
                        type="text"
                    />
                    <input
                        className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
                        name="description"
                        placeholder="Description"
                        type="text"
                    />
                    <input
                        className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
                        name="sourceType"
                        placeholder="Source"
                        type="text"
                    />
                    <input
                        className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
                        name="sourceUrl"
                        placeholder="Source URL"
                        type="text"
                    />
                    <textarea
                        className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
                        name="cookInstructions"
                        placeholder="Cooking Instructions"
                        rows={6}
                    />
                    <textarea
                        className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
                        name="prepInstructions"
                        placeholder="Prep Instructions"
                        rows={6}
                    />
                    <textarea
                        className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
                        name="ingredients"
                        placeholder="Ingredients"
                        rows={6}
                    />

                    {/* Hidden Fields */}
                    <input className="hidden" name="creatorUid" readOnly value={session?.user.sid} />
                    <SubmitButton>Create Recipe</SubmitButton>
                </form>
            </main>
        );
    },
    { returnTo: "/api/auth/login" }
);
