interface Props {
    label: string;
    name: string;
}

export function Textarea({ label, name }: Props) {
    return (
        <div className="form-control">
            <label className="label">
                <span className="label-text">{label}</span>
            </label>
            <textarea className="textarea textarea-bordered h-24" name={name} placeholder="Type here" />
        </div>
    );
}
