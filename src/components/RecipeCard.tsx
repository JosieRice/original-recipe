import Image from "next/image";

interface Props {
    description: string;
    recipeName: string;
}

export function RecipeCard({ description, recipeName }: Props) {
    return (
        <div className="card card-compact w-96 bg-base-200 shadow-xl mb-5 mt-5">
            <figure>
                <Image alt="recipe picture" height={100} src={"https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"} width={100} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{recipeName}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-secondary">Edit</button>
                    <button className="btn btn-secondary">Cook</button>
                    <button className="btn btn-secondary">Copy</button>
                </div>
            </div>
        </div>
    );
}
