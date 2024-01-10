import React, { useCallback } from "react";
import InputField from "../../InputField";
import SelectField from "../../Shared/SelectField";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import TextAreaField from "../../TextAreaField";
import Dropzone from "../../Shared/DropZone";

const options = [
  {
    value: "test1",
    label: "Test1",
  },
  {
    value: "test2",
    label: "Test2",
  },
];

const validationSchema = Yup.object().shape({
  send_to: Yup.string().required().label("Send To"),
  subject: Yup.string().required().label("Subject"),
  message: Yup.string().required().label("Message"),
});

function CreateTicketForm() {
  const initialValues = {};

  const fileUpload = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    console.log("file.....", file);
  }, []);

  return (
    <div className="px-[16px] py-[30px] sm:p-[40px] max-w-[1385px] bg-[#FFFFFF] rounded-[10px]">
      <Formik
        initialValues={initialValues}
        // All field will store here on value
        onSubmit={(value) => console.log(value)}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            <div className="flex flex-col gap-[20px] sm:gap-[30px]">
              <div className="flex flex-col sm:flex-row gap-[20px] sm:gap-[36px]">
                <div className="w-[100%] h-[100%] sm:w-[50%]">
                  <SelectField
                    name="send_to"
                    options={options}
                    label="Send To"
                    placeholder="Select"
                    className="md:!h-[50px]"
                  />
                </div>
                <div className="w-[100%] sm:w-[50%]">
                  <InputField
                    placeholder="Type Subject"
                    label="Subject"
                    height="50px"
                    name="subject"
                  />
                </div>
              </div>
              <div>
                <TextAreaField
                  inputClass="!h-[155px]"
                  name="message"
                  type="text"
                  required
                  label="Message"
                  placeholder="Text here your message..."
                />
              </div>
              <Dropzone onDrop={fileUpload} />
            </div>
            <div className="flex flex-col sm:flex-row mt-[30px] sm:mt-[50px] gap-[14px] sm:gap-[20px] xl:gap-[33px] justify-center xl:justify-end">
              <button className="w-[100%] h-[48px] sm:w-[192px] xl:w-[186px] xl:h-[53px] text-[18px] border border-[#C5C7D0] bg-[#FFFFFF] rounded-[8px] text-[#031B07] font-medium cursor-pointer">
                Cancel
              </button>
              <button className="w-[100%] h-[48px] sm:w-[192px] xl:w-[186px] xl:h-[53px] text-[18px] bg-[#17B532] rounded-[8px] text-[#FFFFFF] font-medium cursor-pointer">
                Submit ticket
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CreateTicketForm;
