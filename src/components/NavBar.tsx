import { getSession } from "@auth0/nextjs-auth0";
import Link from "next/link";

import { Avatar } from "./Avatar";

export async function NavBar() {
    const session = await getSession();

    return (
        <nav className="navbar bg-base-300 sticky top-0 z-50">
            <div className="flex-1">
                <Link className="btn btn-ghost normal-case text-xl" href="/">
                    Original Recipe
                </Link>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input className="input input-bordered w-24 md:w-auto" placeholder="Search" type="text" />
                </div>
                {!session?.user && (
                    <a className="btn" href="/api/auth/login">
                        Login
                    </a>
                )}
                {session?.user && (
                    <div className="dropdown dropdown-end">
                        <Avatar />
                        <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52" tabIndex={0}>
                            <li>
                                {session?.user && <a href="/api/auth/logout">Logout</a>}
                                {!session?.user && <a href="/api/auth/login">Login</a>}
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}
