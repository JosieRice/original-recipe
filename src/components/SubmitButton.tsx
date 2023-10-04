"use client";

import { PropsWithChildren } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

interface Props extends PropsWithChildren {}

export function SubmitButton({ children }: Props) {
    const { pending } = useFormStatus();

    return (
        <button aria-disabled={pending} className="btn btn-primary" type="submit">
            {children}
        </button>
    );
}
