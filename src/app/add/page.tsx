import { SubmitButton } from "@/components/SubmitButton";
import { create } from "./actions";
import { getSession } from "@auth0/nextjs-auth0";

export default async function Add() {
    const session = await getSession();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <h1>Add a Recipe</h1>
            </div>

            <form action={create}>
                <input
                    className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
                    placeholder="Recipe Name"
                    type="text"
                    name="recipeName"
                />
                <input
                    className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
                    placeholder="Prep Time"
                    type="text"
                    name="prepTime"
                />
                <input
                    className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
                    placeholder="Cooking Time"
                    type="text"
                    name="cookTime"
                />
                <input
                    className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
                    placeholder="Description"
                    type="text"
                    name="description"
                />
                <input
                    className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
                    placeholder="Source"
                    type="text"
                    name="sourceType"
                />
                <input
                    className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
                    placeholder="Source URL"
                    type="text"
                    name="sourceUrl"
                />

                {/* Hidden Fields */}
                <input className="hidden" readOnly name="creatorUid" value={session?.user.sid} />
                <SubmitButton>Create Recipe</SubmitButton>
            </form>
        </main>
    );
}

// cookInstructions VARCHAR(255)[],
// ingredients VARCHAR(255)[],
// prepInstructions VARCHAR(255)[],
