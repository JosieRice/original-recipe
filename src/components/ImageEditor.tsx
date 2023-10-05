import { PutBlobResult } from "@vercel/blob";
import { useRef, useState } from "react";
import AvatarEditor from "react-avatar-editor";
import Dropzone from "react-dropzone";

export function ImageEditor() {
    const [image, setImage] = useState<File | undefined>();
    const [scale, setScale] = useState(1);

    const editor = useRef(null);

    // const getImageUrl = async () => {
    //     const dataUrl = editor.getImage().toDataURL();
    //     const res = await fetch(dataUrl);
    //     const blob = await res.blob();

    //     return window.URL.createObjectURL(blob);
    // };

    return (
        <>
            <Dropzone noClick noKeyboard onDrop={(dropped) => setImage(dropped[0])}>
                {({ getInputProps, getRootProps }) => (
                    <div {...getRootProps()}>
                        {!image && <div style={{ backgroundColor: "hotpink", height: 240, width: 340 }}>Drop Picture Here.</div>}
                        {image && <AvatarEditor height={200} image={image} ref={editor} scale={scale} width={300} />}
                        <input {...getInputProps()} />
                    </div>
                )}
            </Dropzone>
            {image && (
                <>
                    <input
                        className="ml-[25px] w-[300px] range range-xs"
                        max={2}
                        min={1}
                        onChange={(e) => setScale(Number(e.target.value))}
                        step={0.02}
                        type="range"
                        value={scale}
                    />
                    <button
                        onClick={async () => {
                            if (editor.current) {
                                const canvasScaled = editor.current.getImageScaledToCanvas();

                                // console.log({ canvasScaled });

                                canvasScaled.toBlob(async (blob: Blob) => {
                                    // Now you have the edited image as a Blob, you can save it or do further processing.
                                    // For example, you can create a FormData object and send it to your server.
                                    const formData = new FormData();
                                    formData.append("avatar", blob, "edited-image.png");

                                    const response = await fetch(`/api/recipePhoto/upload?filename=filename`, {
                                        body: formData,
                                        method: "POST",
                                    });

                                    const newBlob = (await response.json()) as PutBlobResult;

                                    console.log({ newBlob });
                                });

                                // const img = editor.getImage().toDataURL();
                                // console.log({ img });
                                // img.toBlob((blob) => {
                                //     if (blob) {
                                //         this.setState({
                                //             file: URL.createObjectURL(blob), //create object url to show the edited image
                                //         });
                                //         this.props.value(blob); //return value as file
                                //     }
                                // });
                            }
                            // Usage
                            // const imageURL = await getImageUrl();
                            // console.log("imageUrl");
                            // if (!editor.current) return;
                            // console.log(editor.current.getImageScaledToCanvas().toBlob());
                        }}
                    >
                        Save
                    </button>
                </>
            )}
        </>
    );
}
