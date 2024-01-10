/* eslint-disable react/jsx-no-undef */
import { Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import TextAreaField from "../TextAreaField";
import OverflowModal from "./OverFlowModal";
import LoadingAnimation from "../Shared/LoadingAnimation/LoadingAnimation";
import { PhotoProvider, PhotoView } from "react-photo-view";
import {
    SupportData,
    useSupportRefetch,
} from "../../api-query/useSupportQuery";
import { api } from "../../api";
import AddImage from "../CustomIcons/AddImage";
import NewTextAreaField from "../Shared/NewTextAreaField";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    data: SupportData;
};

type TicketInitialType = {
    message: string;
};

const validateSchema = Yup.object({
    message: Yup.string().required().label("Message"),
});

function EditTicketModal({ isOpen, onClose, data }: ModalProps) {
    const supportRefetch = useSupportRefetch();

    const [files, setFiles] = useState<File[]>([]);

    const [buttonLoading, setButtonLoading] = useState(false);

    const initialTicket: TicketInitialType = {
        message: "",
    };

    const handleSubmit = async (value: TicketInitialType) => {
        if (buttonLoading) return;
        setButtonLoading(true);
        try {
            let formData = new FormData();
            formData.append("type", "message");
            formData.append("text", value.message);

            files?.forEach((v) => {
                formData.append("files", v);
            });

            await api.put("/ticket/" + data._id + "/user-chat", formData);

            await supportRefetch();
            onClose();
            setFiles([]);
            setButtonLoading(false);
        } catch (err: any) {
            const errMessage = err.response
                ? err.response.data.message
                : err.message;
            setButtonLoading(false);
            console.log(errMessage);
        }
    };

    const ticketSolvedStatus = async () => {
        if (buttonLoading) return;
        setButtonLoading(true);
        try {
            await api.put("/ticket/" + data._id + "/chat/status", {
                status: "solved",
            });

            await supportRefetch();
            setFiles([]);
            onClose();
            setButtonLoading(false);
        } catch (err: any) {
            const errMessage = err.response
                ? err.response.data.message
                : err.message;
            setButtonLoading(false);
            console.log(errMessage);
        }
    };

    const handleOnClose = () => {
        setFiles([]);
        onClose();
    };

    return (
        <OverflowModal
            isOpen={isOpen}
            onRequestClose={handleOnClose}
            className="w-[calc(100vw-40px)] max-w-[800px] bg-white px-[16px] py-[30px] sm:p-[40px] rounded-[10px]"
        >
            <div>
                <Formik
                    initialValues={initialTicket}
                    onSubmit={handleSubmit}
                    enableReinitialize
                    validationSchema={validateSchema}
                >
                    {({ values }) => (
                        <Form>
                            <div className="flex flex-col gap-[20px] sm:gap-[30px]">
                                <div className="flex flex-col sm:flex-row gap-[20px] sm:gap-[36px]">
                                    <div className="w-[100%] h-[100%] sm:w-[50%]">
                                        <div className="text-[16px] pb-1 label text-[#031B07] leading-[23.36px] font-semibold  flex gap-[10px]">
                                            Subject
                                        </div>

                                        <div>{data.subject}</div>
                                    </div>
                                    <div className="w-[100%] sm:w-[50%]">
                                        <div className="text-[16px] mb-1 label text-[#031B07] leading-[23.36px] font-semibold  flex gap-[10px]">
                                            Related Order
                                        </div>
                                        <div>{data.relatedOrder}</div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    {data.chats.map((v, i) => (
                                        <div key={"chats_" + i}>
                                            <div className="text-[16px] mb-1 label text-[#031B07] capitalize leading-[23.36px] font-semibold  flex gap-[10px]">
                                                {v.type == "reply"
                                                    ? "Reply - Good Reviews"
                                                    : v.type}
                                            </div>
                                            {/* <div>{v.text}</div> */}
                                            <p className="w-full whitespace-normal">
                                                {v.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <PhotoProvider>
                                        <div className="flex gap-2 w-full h-[100px]">
                                            {data?.files?.map((v, i) => (
                                                <PhotoView
                                                    key={"pic_" + i}
                                                    src={v}
                                                    height={100}
                                                    width={100}
                                                >
                                                    <img
                                                        src={v}
                                                        width={100}
                                                        height={100}
                                                        className="object-cover rounded cursor-pointer bg-[#fafafa]"
                                                        alt=""
                                                    />
                                                </PhotoView>
                                            ))}
                                            {files.map((v, i) => (
                                                <PhotoView
                                                    key={"files_" + i}
                                                    src={URL.createObjectURL(v)}
                                                    height={100}
                                                    width={100}
                                                >
                                                    <img
                                                        src={URL.createObjectURL(
                                                            v
                                                        )}
                                                        width={100}
                                                        height={100}
                                                        className="object-cover rounded cursor-pointer bg-[#fafafa]"
                                                        alt=""
                                                    />
                                                </PhotoView>
                                            ))}
                                            <label className="w-[100px] group cursor-pointer hover:bg-primary transition-all duration-200 flex items-center justify-center h-[100px] bg-[#fafafa] rounded">
                                                <AddImage
                                                    color="#333"
                                                    groupClassName="transition-all duration-200 group-hover:stroke-white"
                                                />
                                                <input
                                                    type="file"
                                                    name=""
                                                    id=""
                                                    className="hidden"
                                                    accept="image/*"
                                                    onChange={(e) => {
                                                        const file =
                                                            e?.target
                                                                ?.files?.[0];
                                                        file &&
                                                            setFiles((v) => [
                                                                ...v,
                                                                file,
                                                            ]);
                                                    }}
                                                    onClick={(e) => {
                                                        e.currentTarget.value =
                                                            "";
                                                    }}
                                                />
                                            </label>
                                        </div>
                                    </PhotoProvider>
                                </div>
                            </div>
                            {data.status !== "solved" && (
                                <>
                                    <div className="mt-5 lg:mt-[30px]">
                                        <NewTextAreaField
                                            inputClass="!h-[100px]"
                                            name="message"
                                            type="text"
                                            required
                                            label="New Message"
                                            placeholder="Text here your reply..."
                                        />
                                    </div>

                                    <div className="flex flex-col sm:flex-row mt-[30px] sm:mt-[36px] gap-[14px] sm:gap-[20px] xl:gap-[33px] justify-center sm:justify-end">
                                        <button
                                            onClick={handleOnClose}
                                            className="w-[100%] h-[48px] sm:w-[192px] xl:w-[186px] xl:h-[53px] text-[18px] border border-[#C5C7D0] bg-[#FFFFFF] rounded-[8px] text-[#031B07] font-medium cursor-pointer"
                                        >
                                            Cancel
                                        </button>
                                        {files.length || values.message ? (
                                            <button
                                                type="submit"
                                                className="w-[100%] h-[48px] sm:w-[192px] xl:w-[186px] xl:h-[53px] text-[18px] bg-[#17B532] rounded-[8px] justify-center items-center flex text-[#FFFFFF] font-medium cursor-pointer"
                                            >
                                                {buttonLoading ? (
                                                    <div className="flex items-center justify-center gap-2">
                                                        <LoadingAnimation color="#fff" />
                                                        <div className="text-sm">
                                                            Loading...
                                                        </div>
                                                    </div>
                                                ) : (
                                                    "Update"
                                                )}
                                            </button>
                                        ) : (
                                            <button
                                                type="button"
                                                onClick={ticketSolvedStatus}
                                                className="w-[100%] h-[48px] sm:w-[192px] xl:w-[186px] xl:h-[53px] text-[18px] bg-[#17B532] rounded-[8px] justify-center items-center flex text-[#FFFFFF] font-medium cursor-pointer"
                                            >
                                                {buttonLoading ? (
                                                    <div className="flex items-center justify-center gap-2">
                                                        <LoadingAnimation color="#fff" />
                                                        <div className="text-sm">
                                                            Loading...
                                                        </div>
                                                    </div>
                                                ) : (
                                                    "Mark as Solved"
                                                )}
                                            </button>
                                        )}
                                    </div>
                                </>
                            )}
                        </Form>
                    )}
                </Formik>
            </div>
        </OverflowModal>
    );
}

export default EditTicketModal;
