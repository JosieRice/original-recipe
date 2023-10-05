"use client";

import type { PutBlobResult } from "@vercel/blob";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useRef } from "react";

export default function UploadImage() {
    const inputFileRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    // Get a new searchParams string by merging the current
    // searchParams with a provided key/value pair
    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams);
            params.set(name, value);

            return params.toString();
        },
        [searchParams]
    );

    return (
        <>
            <h1>Upload Your Recipe Photo</h1>

            <form
                onSubmit={async (event) => {
                    event.preventDefault();

                    if (!inputFileRef.current?.files) {
                        throw new Error("No file selected");
                    }

                    const file = inputFileRef.current.files[0];

                    const response = await fetch(`/api/recipePhoto/upload?filename=${file.name}`, {
                        body: file,
                        method: "POST",
                    });

                    const newBlob = (await response.json()) as PutBlobResult;
                    console.log(newBlob.url);

                    router.push(pathname + "?" + createQueryString("image", newBlob.url));
                    // const params = new URLSearchParams(searchParams);
                    // params.set("image", newBlob.url);
                }}
            >
                <input name="file" ref={inputFileRef} required type="file" />
                <button type="submit">Upload</button>
            </form>
        </>
    );
}
