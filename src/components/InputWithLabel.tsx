interface Props {
    label: string;
    name: string;
}

export function InputWithLabel({ label, name }: Props) {
    return (
        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">{label}</span>
            </label>
            <input className="input input-bordered w-full max-w-xs" name={name} placeholder="Type here" type="text" />
        </div>
    );
}
