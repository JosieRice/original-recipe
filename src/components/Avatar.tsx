import { getSession } from "@auth0/nextjs-auth0";
import Image from "next/image";

export async function Avatar() {
    const session = await getSession();

    const picture = session?.user.picture;

    return (
        <label className="btn btn-ghost btn-circle avatar" tabIndex={0}>
            <div className="w-10 rounded-full">
                <Image alt="user avatar" height={100} src={picture} width={100} />
            </div>
        </label>
    );
}
