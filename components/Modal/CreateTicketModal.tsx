/* eslint-disable react/jsx-no-undef */
import { Form, Formik } from "formik";
import React, { useCallback, useState } from "react";
import * as Yup from "yup";
import InputField from "../InputField";
import Dropzone from "../Shared/DropZone";
import SelectField from "../Shared/SelectField";
import TextAreaField from "../TextAreaField";
import OverflowModal from "./OverFlowModal";
import PlusIcon from "../CustomIcons/PlusIcon";
import { api } from "../../api";
import LoadingAnimation from "../Shared/LoadingAnimation/LoadingAnimation";
import { useAtom } from "jotai";
import { USER_STATE } from "../../state";
import { useSupportRefetch } from "../../api-query/useSupportQuery";
import NewTextAreaField from "../Shared/NewTextAreaField";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    data?: any;
};

type TicketInitialType = {
    subject: string;
    relatedOrder: string;
    message: string;
};

const initialTicket: TicketInitialType = {
    subject: "",
    relatedOrder: "",
    message: "",
};

const validateSchema = Yup.object({
    subject: Yup.string().required().label("Subject"),
    relatedOrder: Yup.string().label("RelatedOrder"),
    message: Yup.string().required().label("Message"),
});

function CreateTicketModal({ isOpen, onClose }: ModalProps) {
    const [user] = useAtom(USER_STATE);

    const [files, setFiles] = useState<File[]>([]);

    const supportRefetch = useSupportRefetch();

    const fileUpload = useCallback(async (acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        setFiles((v) => [...v, file]);
    }, []);

    const [buttonLoading, setButtonLoading] = useState(false);

    const handleSubmit = async (value: TicketInitialType) => {
        if (buttonLoading) return;
        setButtonLoading(true);
        try {
            let formData = new FormData();

            Object.entries(value).forEach(([k, v]) => {
                formData.append(k, v);
            });
            files.forEach((v) => {
                formData.append("files", v);
            });

            formData.append("userId", user?._id || "");

            const { data } = await api.post("/ticket", formData);

            await supportRefetch();

            onClose();

            setButtonLoading(false);
        } catch (err: any) {
            const errMessage = err.response
                ? err.response.data.message
                : err.message;
            setButtonLoading(false);
            console.log(err);
        }
    };

    return (
        <OverflowModal
            isOpen={isOpen}
            onRequestClose={onClose}
            className="w-[calc(100vw-40px)] max-w-[800px] bg-white px-[16px] py-[30px] sm:p-[40px] rounded-[10px]"
        >
            <div>
                <Formik
                    initialValues={initialTicket}
                    // All field will store here on value
                    onSubmit={handleSubmit}
                    validationSchema={validateSchema}
                >
                    {() => (
                        <Form>
                            <div className="flex flex-col gap-[20px] sm:gap-[30px]">
                                <div className="flex flex-col sm:flex-row gap-[20px] sm:gap-[36px]">
                                    <div className="w-[100%] h-[100%] sm:w-[50%]">
                                        <InputField
                                            placeholder="Type here"
                                            label="Subject"
                                            height="50px"
                                            name="subject"
                                        />
                                    </div>
                                    <div className="w-[100%] sm:w-[50%]">
                                        <InputField
                                            placeholder="Type here"
                                            label="Related Order (optional)"
                                            height="50px"
                                            name="relatedOrder"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <NewTextAreaField
                                        inputClass="!h-[155px]"
                                        name="message"
                                        type="text"
                                        required
                                        label="Message"
                                        placeholder="Text here your message..."
                                    />
                                </div>

                                {files.length ? (
                                    <>
                                        <div>
                                            <div className=" rounded-[10px] w-[211px] h-[48px] border-dashed border border-primary">
                                                <label className="text-primary cursor-pointer  transition duration-700 ease-in-out text-[16px] w-[100%] flex justify-center items-center h-[100%] font-normal leading-[23.36px] gap-[6px]">
                                                    <input
                                                        type="file"
                                                        id="upload"
                                                        hidden
                                                        accept="image/*"
                                                        onChange={(e) => {
                                                            const iFiles =
                                                                e.target.files;
                                                            if (
                                                                iFiles?.length
                                                            ) {
                                                                setFiles(
                                                                    (v) => [
                                                                        ...v,
                                                                        iFiles[0],
                                                                    ]
                                                                );
                                                            }
                                                        }}
                                                        onClick={(e) => {
                                                            e.currentTarget.value =
                                                                "";
                                                        }}
                                                    />
                                                    <PlusIcon
                                                        stroke="#18BA33"
                                                        width={12}
                                                        height={12}
                                                    />
                                                    Upload another file
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-5">
                                            {files.map((v, i) => (
                                                <div
                                                    key={"paramoy_" + i}
                                                    className="p-[10px] pr-[20px] border-[.1px] rounded-[7px] border-[#C1C4C0] relative"
                                                >
                                                    <div className="text-xs leading-[17.5px]">
                                                        {v.name}
                                                    </div>
                                                    <img
                                                        src="/icons/close-icon.svg"
                                                        alt=""
                                                        width={24}
                                                        onClick={() => {
                                                            setFiles((v) =>
                                                                v.filter(
                                                                    (g, j) =>
                                                                        j !== i
                                                                )
                                                            );
                                                        }}
                                                        height={24}
                                                        className="absolute cursor-pointer top-0 bottom-0 my-auto -right-[10px]"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <Dropzone onDrop={fileUpload} />
                                )}
                            </div>
                            <div className="flex flex-col sm:flex-row mt-[30px] sm:mt-[50px] gap-[14px] sm:gap-[20px] xl:gap-[33px] justify-center sm:justify-end">
                                <button
                                    onClick={onClose}
                                    className="w-[100%] h-[48px] sm:w-[192px] xl:w-[186px] xl:h-[53px] text-[18px] border border-[#C5C7D0] bg-[#FFFFFF] rounded-[8px] text-[#031B07] font-medium cursor-pointer"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="w-[100%] h-[48px] sm:w-[192px] xl:w-[186px] xl:h-[53px] text-[18px] bg-[#17B532] rounded-[8px] justify-center items-center flex text-[#FFFFFF] font-medium cursor-pointer"
                                >
                                    {buttonLoading ? (
                                        <div className="flex items-center gap-2 justify-center">
                                            <LoadingAnimation color="#fff" />
                                            <div className="text-sm">
                                                Loading...
                                            </div>
                                        </div>
                                    ) : (
                                        "Submit ticket"
                                    )}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </OverflowModal>
    );
}

export default CreateTicketModal;
