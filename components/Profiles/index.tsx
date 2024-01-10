import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import InputField from "../InputField";
import classNames from "classnames";
import SelectField from "../Shared/SelectField";
import { useAtom } from "jotai";
import { USER_STATE } from "../../state";
import { api } from "../../api";
import { toast } from "react-toastify";
import LoadingAnimation from "../Shared/LoadingAnimation/LoadingAnimation";
import { useQuery } from "react-query";
import { countries } from "../../utils/country";
import { timeZoneData } from "../../utils/timeZone";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().label("First Name"),
  lastName: Yup.string().label("Last Name"),
  email: Yup.string().email().label("Email"),
  password: Yup.string().label("Password"),
  new_password: Yup.string().matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
  ),
  confirm_password: Yup.string().oneOf(
    [Yup.ref("new_password")],
    "Passwords does not match"
  ),
  country: Yup.string().label("Country"),
  state: Yup.string().label("State"),
  city: Yup.string().label("City"),
  zipCode: Yup.number().label("Post Code/ zip Code"),
  address: Yup.string().label("Address"),
  phone: Yup.number().label("Phone"),
  timeZone: Yup.string().label("Time zone"),
});
const Profile = () => {
  const [countryField, setCountryField] = useState<any>();
  const [timeZone, setTimeZone] = useState<any>();
  const [user] = useAtom(USER_STATE);
  const userId = user && user._id;
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { data, refetch } = useQuery(
    ["GET_USER", userId],
    () => api.get(`/user/${userId}`),
    {
      enabled: !!userId,
      onSuccess: (data) => {
        setChecked(data.data.CompanyPurchase);
        setCountryField(data.data.country);
        setTimeZone(data.data.timeZone);
      },
    }
  );
  const initialValues = {
    firstName: data ? data.data.firstName : "",
    lastName: data ? data.data.lastName : "",
    email: data ? data.data.email : "",
    password: "",
    new_password: "",
    confirm_password: "",
    country: data ? data.data?.country : "",
    state: data ? data.data?.state : "",
    city: data ? data.data?.city : "",
    zipCode: data ? data.data?.zipCode : "",
    address: data ? data.data?.address : "",
    phone: data ? data.data?.phone : "",
    timeZone: data ? data.data?.timeZone : "",
  };

  const handleSubmit = async (e: any) => {
    setIsLoading(true);
    let updateObj = Object.fromEntries(
      Object.entries(e).filter(([_, v]) => v != "")
    );
    let { confirm_password, new_password, ...mics } = updateObj;
    const pushObject =
      e.password === ""
        ? { ...mics, CompanyPurchase: checked }
        : {
          ...mics,
          confirmPassword: e.new_password,
          CompanyPurchase: checked,
        };

    try {
      const { data } = await api.put(`/user/${userId}`, pushObject);
      refetch();
      toast.success("User updated successfully!");
      setError("");
      setIsLoading(false);
    } catch (err: any) {
      const errMessage = err.response ? err.response.data.message : err.message;
      setError(errMessage);
      setIsLoading(false);
    }
  };
  return (
    <div>
      <h3 className="text-[#031B07] font-medium lg:text-[20px] leading-[22px] text-[16px] lg:leading-[20px] mt-[20px] sm:mt-[50px] mb-[20px] ">
        Edit your Profile
      </h3>
      {error && (
        <div className="w-[100%] mt-[10px] flex items-center pl-[15px] pr-[14px] rounded-[4px] min-h-[48px] bg-[#FFE5E7]">
          <img
            src="/icons/alert-icon.svg"
            alt="alert icon"
            className="w-[18.33px] h-[18.33px] mr-[9px]"
          />
          <h3 className="text-[13px] font-normal leading-[18px] text-[#252C48]">
            {error}
          </h3>
        </div>
      )}
      {/* form section  */}
      <div className="w-[100%] mt-[20px]">
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          // All field will store here on value
          onSubmit={(value, { resetForm }) => {
            handleSubmit(value), resetForm();
          }}
          validationSchema={validationSchema}
        >
          {({ setFieldValue }) => (
            <Form>
              <div className="bg-white rounded-[10px]">
                <div className="sm:px-[30px] sm:py-[30px] px-[16px] py-[16px]">
                  <div className="flex gap-[20px] ">
                    <div className="w-[50%]">
                      <InputField
                        className="!w-[100%]"
                        inputClass=" !h-[48px] !w-full border-none !bg-[#FAFAFA] text-[#626F63] placeholder:text-[#626F63] font-normal text-[14px] rounded-[10px]"
                        placeholder="Type here"
                        name="firstName"
                        type="text"
                        label="First Name"
                        labelClass="text-[#031B07] font-normal text-[16px] leading-[23.36px]"
                      />
                    </div>
                    <div className="w-[50%]">
                      <InputField
                        className="!w-[100%]"
                        inputClass=" !h-[48px] !w-full border-none !bg-[#FAFAFA] text-[#626F63] placeholder:text-[#626F63] font-normal text-[14px] rounded-[10px]"
                        placeholder="Type here"
                        name="lastName"
                        type="text"
                        label="Last Name"
                        labelClass="text-[#031B07] font-normal text-[16px] leading-[23.36px]"
                      />
                    </div>
                  </div>

                  <InputField
                    readOnly
                    className="!w-[100%]"
                    inputClass=" !h-[48px] !w-full border-none !bg-[#FAFAFA] text-[#626F63] placeholder:text-[#626F63] font-normal text-[14px] rounded-[10px]"
                    placeholder="Type here"
                    name="email"
                    type="email"
                    label="Email"
                    labelClass="text-[#031B07] font-normal text-[16px] leading-[23.36px] mt-[20px]"
                  />
                  <div
                    className={classNames(
                      (data && data.data.googleAuth === true) ||
                        (data && data.data.facebookId)
                        ? "hidden"
                        : "block",
                      "flex flex-col sm:flex-row gap-[20px]"
                    )}
                  >
                    <InputField
                      className="!w-[100%]"
                      inputClass=" !h-[48px] !w-full border-none !bg-[#FAFAFA] text-[#626F63] placeholder:text-[#626F63] font-normal text-[14px] rounded-[10px]"
                      placeholder="Type here"
                      name="password"
                      type="password"
                      label="Current Password"
                      labelClass="text-[#031B07] font-normal text-[16px] leading-[23.36px] mt-[20px]"
                      isPassword={true}
                    />
                  </div>

                  <div
                    className={classNames(
                      (data && data.data.googleAuth === true) ||
                        (data && data.data.facebookId)
                        ? "hidden"
                        : "block",
                      "flex flex-col sm:flex-row gap-[20px]"
                    )}
                  >
                    <div className="w-[100%] sm:w-[50%]">
                      <InputField
                        className="!w-[100%]"
                        inputClass=" !h-[48px] !w-full border-none !bg-[#FAFAFA] text-[#626F63] placeholder:text-[#626F63] font-normal text-[14px] rounded-[10px]"
                        placeholder="Type here"
                        name="new_password"
                        type="password"
                        label="New Password"
                        labelClass="text-[#031B07] font-normal text-[16px] leading-[23.36px] mt-[20px]"
                        isPassword={true}
                      />
                    </div>
                    <div className="w-[100%] sm:w-[50%]">
                      <InputField
                        className="!w-[100%]"
                        inputClass=" !h-[48px] !w-full border-none !bg-[#FAFAFA] text-[#626F63] placeholder:text-[#626F63] font-normal text-[14px] rounded-[10px]"
                        placeholder="Type here"
                        name="confirm_password"
                        type="password"
                        label="Confirm New Password"
                        labelClass="text-[#031B07] font-normal text-[16px] leading-[23.36px] mt-[20px]"
                        isPassword={true}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[10px] mt-[50px]">
                <div className="sm:px-[30px] sm:py-[30px] px-[16px] py-[16px]">
                  <SelectField
                    name="country"
                    options={countries}
                    value={
                      countryField
                        ? {
                          label:
                            countryField !== undefined ? countryField : "",
                          value:
                            countryField !== undefined ? countryField : "",
                        }
                        : ("" as any)
                    }
                    label="Country"
                    placeholder="Select a country"
                    onChange={(e: any) => {
                      setFieldValue("country", e.value);
                      setCountryField(e.value);
                    }}
                  />

                  <div className="flex gap-[20px]">
                    <div className="w-[50%]">
                      <InputField
                        className="!w-[100%]"
                        inputClass=" !h-[48px] !w-full border-none !bg-[#FAFAFA] text-[#626F63] placeholder:text-[#626F63] font-normal text-[14px] rounded-[10px]"
                        placeholder="Type here"
                        name="state"
                        type="text"
                        label="State"
                        labelClass="text-[#031B07] font-normal text-[16px] leading-[23.36px] mt-[20px]"
                      />
                    </div>
                    <div className="w-[50%]">
                      <InputField
                        className="!w-[100%]"
                        inputClass=" !h-[48px] !w-full border-none !bg-[#FAFAFA] text-[#626F63] placeholder:text-[#626F63] font-normal text-[14px] rounded-[10px]"
                        placeholder="Type here"
                        name="city"
                        type="text"
                        label="City"
                        labelClass="text-[#031B07] font-normal text-[16px] leading-[23.36px] mt-[20px]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-[20px]">
                    <div className="w-[100%] sm:w-[50%]">
                      <InputField
                        className="!w-[100%]"
                        inputClass=" !h-[48px] !w-full border-none !bg-[#FAFAFA] text-[#626F63] placeholder:text-[#626F63] font-normal text-[14px] rounded-[10px]"
                        placeholder="Type here"
                        name="zipCode"
                        type="number"
                        label="Post Code/ Zip Code"
                        labelClass="text-[#031B07] font-normal text-[16px] leading-[23.36px] mt-[20px]"
                      />
                    </div>
                    <div className="w-[100%] sm:w-[50%]">
                      <InputField
                        className="!w-[100%]"
                        inputClass=" !h-[48px] !w-full border-none !bg-[#FAFAFA] text-[#626F63] placeholder:text-[#626F63] font-normal text-[14px] rounded-[10px]"
                        placeholder="Type here"
                        name="address"
                        type="text"
                        label="Address"
                        labelClass="text-[#031B07] font-normal text-[16px] leading-[23.36px] mt-[20px]"
                      />
                    </div>
                  </div>

                  {/* check box  */}
                  <div className="flex gap-[12px] items-center  cursor-pointer mt-[30px]">
                    <div
                      onClick={() => setChecked(!checked)}
                      className={classNames(
                        " w-[16px] h-[16px] rounded-[4px]  flex items-center justify-center",
                        checked
                          ? "bg-primary border border-primary"
                          : "bg-white border border-[#C1C4C0]"
                      )}
                    >
                      {checked && (
                        <p
                          className={classNames(
                            checked ? "text-white text-[14px]" : ""
                          )}
                        >
                          ✔
                        </p>
                      )}
                    </div>
                    <p className="font-normal text-[14px] leading-[20.44px] text-[#031B07]">
                      I’m purchasing for a company
                    </p>
                  </div>

                  <div className="mt-[30px] flex flex-col items-center sm:flex-row gap-[20px]">
                    <div className="w-[100%] sm:w-[50%]">
                      <InputField
                        className="!w-[100%]"
                        inputClass=" !h-[48px] !w-full border-none !bg-[#FAFAFA] text-[#626F63] placeholder:text-[#626F63] font-normal text-[14px] rounded-[10px]"
                        placeholder="Type here"
                        name="phone"
                        type="number"
                        label="Phone (Optional)"
                        labelClass="text-[#031B07] font-normal text-[16px] leading-[23.36px] mt-[20px]"
                      />
                    </div>
                    <div className="w-[100%] sm:w-[50%]">
                      <SelectField
                        value={
                          timeZone
                            ? {
                              label: timeZone !== undefined ? timeZone : "",
                              value: timeZone !== undefined ? timeZone : "",
                            }
                            : ("" as any)
                        }
                        name="timeZone"
                        options={timeZoneData}
                        label="Time Zone"
                        placeholder="Select a time zone"
                        onChange={(e: any) => {
                          setFieldValue("timeZone", e.label);
                          setTimeZone(e.label);
                        }}
                        className="sm:mt-[6px]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="w-[100%] sm:w-[300px] h-[48px] 4xl:h-[56px] bg-[#17B532] hover:bg-[#109126] transition-all duration-700 ease-in-out mt-[50px] rounded-[10px]  text-[white] font-medium text-[18px] leading-[25.2px]"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <LoadingAnimation color="white" />
                    </div>
                  ) : (
                    "Save"
                  )}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Profile;
