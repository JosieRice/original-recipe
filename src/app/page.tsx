import { sql } from "@vercel/postgres";
import { getSession } from "@auth0/nextjs-auth0";
import Link from "next/link";

export default async function Home() {
    const { rows } = await sql`SELECT * from RECIPES LIMIT 10`;

    console.log({ rows });

    const session = await getSession();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <h1>Coming soon, recipes!</h1>
                <h2>{session?.user.name}</h2>

                {!session?.user && <a href="/api/auth/login">Login</a>}
                {session?.user && <a href="/api/auth/logout">Logout</a>}
            </div>
            <div>
                {rows.map((recipe) => {
                    return <div>{recipe.recipename}</div>;
                })}
            </div>
            <Link href={"/add"}>Add</Link>
        </main>
    );
}
