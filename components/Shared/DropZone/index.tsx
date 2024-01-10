/* eslint-disable @next/next/no-img-element */
import React, { useMemo } from "react";
import { Accept, DropEvent, FileRejection, useDropzone } from "react-dropzone";
import classnames from "classnames";
import { ReactNode } from "react";

const dropzoneStyle = {
    width: "100%",
    borderWidth: "1px",
    borderStyle: "dashed",
    borderColor: "#C5C7D0",
    outline: "none",
    transition: "border .24s ease-in-out",
    borderRadius: "10px",
};

const acceptStyle = {
    borderColor: "rgb(0,230,118)",
    backgroundColor: "rgba(0,230,118,.1)",
};

const rejectStyle = {
    borderColor: "#ff1744",
    backgroundColor: "#ff174411",
};

type DropzoneType = {
    className?: string;
    children?: ReactNode;
    acceptClass?: string;
    rejectClass?: string;
    focusClass?: string;
    accept?: Accept;
    onDrop?:
        | (<T extends File>(
              acceptedFiles: T[],
              fileRejections: FileRejection[],
              event: DropEvent
          ) => void)
        | undefined;
};

function Dropzone({
    className,
    children,
    acceptClass,
    rejectClass,
    accept,
    onDrop,
}: DropzoneType) {
    const {
        acceptedFiles,
        isDragAccept,
        isDragReject,
        isDragActive,
        getRootProps,
        getInputProps,
    } = useDropzone({
        accept,
        maxFiles: 1,
        multiple: false,
        onDrop,
    });

    const style = useMemo(
        () => ({
            ...dropzoneStyle,
            ...(isDragAccept ? acceptStyle : {}),
            ...(isDragReject ? rejectStyle : {}),
        }),
        [isDragAccept, isDragReject]
    );

    const dropdownClasses = classnames(
        className,
        isDragAccept && acceptClass,
        isDragReject && rejectClass
    );

    return (
        <div {...getRootProps({ style, className: dropdownClasses })}>
            <input {...getInputProps()} />
            <div className="h-[125px] sm:h-[140px] md:h-[160px] xl:h-[168px] 2xl:h-[180px] 3xl:h-[239px] flex items-center justify-center">
                <div className="">
                    <img
                        src="/icons/file-plus 1.svg"
                        alt="file-plus"
                        className="w-[30px] h-[30px] sm:w-[45px] sm:h-[45px] mx-auto"
                    />
                    <h2 className="mt-[12px] text-[16px] leading-[140%] font-normal text-[#626F63]">
                        {isDragActive
                            ? "Drop file here....."
                            : "Attatch File Up to 10.00 MB"}
                    </h2>
                </div>
            </div>
        </div>
    );
}

Dropzone.defaultProps = {
    accept: { "image/*": [] },
};

export default Dropzone;
