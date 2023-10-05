"use client";

import type { PutBlobResult } from "@vercel/blob";

import { ImageEditor } from "@/components/ImageEditor";
import { useRef, useState } from "react";

export default function RecipePhotoUploadPage() {
    const inputFileRef = useRef<HTMLInputElement>(null);
    const [blob, setBlob] = useState<PutBlobResult | null>(null);

    // console.log({ inputFileRef });
    return (
        <>
            <h1>Upload Your Recipe Photo</h1>

            <ImageEditor />

            {/* <form
                onSubmit={async (event) => {
                    event.preventDefault();

                    if (!inputFileRef.current?.files) {
                        throw new Error("No file selected");
                    }

                    const file = inputFileRef.current.files[0];

                    // const response = await fetch(`/api/recipePhoto/upload?filename=${file.name}`, {
                    //     body: file,
                    //     method: "POST",
                    // });

                    // const newBlob = (await response.json()) as PutBlobResult;

                    // setBlob(newBlob);
                }}
            >
                <input name="file" ref={inputFileRef} required type="file" />
                <button type="submit">Upload</button>
            </form>
            {blob && (
                <div>
                    Blob url: <a href={blob.url}>{blob.url}</a>
                </div>
            )} */}
        </>
    );
}
