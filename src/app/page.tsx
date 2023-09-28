import { sql } from "@vercel/postgres";

export default async function Home() {
  const { rows } = await sql`SELECT * from RECIPES LIMIT 10`;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>Coming soon, recipes! {rows[0].recipename}</h1>
      </div>
    </main>
  );
}
