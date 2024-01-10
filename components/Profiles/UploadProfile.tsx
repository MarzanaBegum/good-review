import { useAtom } from "jotai";
import React, { useEffect, useState } from "react";
import { api } from "../../api";
import { USER_STATE } from "../../state";
import LoadingAnimation from "../Shared/LoadingAnimation/LoadingAnimation";
import DeleteIcon from "./../CustomIcons/DeleteIcon";

const UploadProfile = () => {
    const [user, setUser] = useAtom(USER_STATE);
    const [isLoadng, setIsLoading] = useState(false);

    const handleUploadProfile = async (e: File) => {
        const formData = new FormData();
        formData.append("file", e);
        // console.log(e, "e...");
        setIsLoading(true);

        const { data } = await api.post("/bucket-store/upload", formData);
        if (data && user !== undefined) {
            localStorage.setItem("profile-key", data.key);
            const { data: userData } = await api.put(`/user/${user._id}`, {
                profile: data.location,
            });
            setIsLoading(false);
            setUser({ ...user, profile: data.location });
        }
    };

    const [permission, setPermission] = useState(Notification.permission);

    const notifyPermission = async () => {
        if (Notification.permission !== "granted") {
            Notification.requestPermission();
        }
    };

    useEffect(() => {
        setPermission(Notification.permission);
    }, [Notification.permission]);
    console.log(permission, "permission__))")
    return (
        <div className="w-[100%] flex justify-between items-center">
            <div className="flex gap-[12px] sm:gap-[30px] items-center">
                <img
                    src={user && user?.profile ? user.profile : "/images/profile.png"}
                    alt="profile"
                    className="sm:w-[112px] sm:h-[112px] w-[72px] h-[72px] rounded-full"
                />
                <div className=" rounded-[10px] w-[122px] h-[40px] bg-primary hover:bg-[#179c2d]  transition duration-700 ease-in-out">
                    <label className=" cursor-pointer w-[100%] flex justify-center items-center h-[100%]">
                        <input
                            type="file"
                            id="upload"
                            name="file"
                            hidden
                            onChange={(e: any) =>
                                handleUploadProfile(e.target.files[0])
                            }
                        />
                        {isLoadng ? (
                            <div>
                                <LoadingAnimation color="white" />
                            </div>
                        ) : (
                            <h2 className="text-[#FFFFFF] text-[14px] font-normal">
                                Upload Photo
                            </h2>
                        )}
                    </label>
                </div>
                {/* <button className="w-[130px] h-[38px] rounded-[10px] border border-[#DBDCDA] text-[#626F63] font-normal leading-[22px] text-[16px] hidden xl:block">
                    Delete Photo
                </button>

                <div className="hidden sm:flex xl:hidden w-[40px] h-[40px] rounded-[10px] border border-[#C1C4C0]  justify-center items-center cursor-pointer">
                    <DeleteIcon width={16} height={19} stroke="#031B07" />
                </div> */}
            </div>

            <div
                onClick={notifyPermission}
                aria-checked={permission === "default" ? true : false}
                aria-selected={permission === "granted" ? true : false}
                aria-disabled={permission === "denied" ? true : false}
                className=" aria-checked:hover:bg-green-500 group aria-selected:bg-green-500 aria-disabled:bg-red-500 rounded-[10px] border border-[#C1C4C0] px-[8px] xl:px-[18px] py-[8px] xl:py-[10px] sm:flex gap-[16px] items-center cursor-pointer min-w-[40px] flex  justify-center"
            >
                <svg
                    width="18"
                    height="22"
                    viewBox="0 0 18 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.00024 0.889648C9.41445 0.889648 9.75024 1.22543 9.75024 1.63965V2.89714C11.4704 3.04437 13.0916 3.7936 14.3218 5.0238C15.7007 6.40262 16.4753 8.27271 16.4753 10.2227C16.4753 13.2766 16.8011 15.0098 17.1004 15.9531C17.2494 16.4226 17.3894 16.6889 17.4738 16.8226C17.514 16.8863 17.5414 16.9198 17.5512 16.9311C17.7724 17.1328 17.8536 17.4487 17.7532 17.734C17.6476 18.0343 17.364 18.2352 17.0457 18.2352H12.5854C12.623 18.3669 12.6251 18.5105 12.5837 18.6516C12.3649 19.3982 11.9106 20.054 11.2884 20.5207C10.6662 20.9873 9.90967 21.2396 9.13208 21.2396C8.3545 21.2396 7.59798 20.9873 6.97577 20.5207C6.35359 20.054 5.89924 19.3982 5.68046 18.6516C5.6391 18.5105 5.64116 18.3669 5.67881 18.2352H1.2002C0.913322 18.2352 0.651575 18.0715 0.525943 17.8136C0.40213 17.5595 0.431899 17.2576 0.60206 17.0327L0.6021 17.0327L0.608139 17.0248L0.614187 17.0147C0.61685 17.0107 0.619901 17.0059 0.623325 17.0005C0.635315 16.9816 0.6519 16.9543 0.672331 16.9181L3.16959 12.7668C3.04342 14.255 2.81536 15.3588 2.57976 16.1572C2.51656 16.3713 2.45282 16.5635 2.39037 16.7352H15.7829C15.7453 16.6331 15.7078 16.5238 15.6706 16.4068C15.3097 15.2694 14.9753 13.3714 14.9753 10.2227C14.9753 8.67053 14.3587 7.18197 13.2612 6.08446C12.1636 4.98694 10.6751 4.37036 9.12296 4.37036C8.803 4.37036 8.48573 4.39656 8.17404 4.44777L8.40069 4.07101C8.40067 4.07098 8.40065 4.07096 8.40063 4.07093L8.17388 4.4478C6.97363 4.64506 5.85599 5.21322 4.98476 6.08446C3.88724 7.18197 3.27066 8.67053 3.27066 10.2227C3.27066 11.1737 3.23304 12.0178 3.16974 12.7651L0.687882 16.8901C0.7027 16.863 0.719141 16.8319 0.736984 16.7966C0.839229 16.594 0.988045 16.2512 1.1411 15.7326C1.44736 14.6948 1.77066 12.9523 1.77066 10.2227C1.77066 8.27271 2.54528 6.40262 3.9241 5.0238C5.09562 3.85228 6.62177 3.11694 8.25024 2.92231V1.63965C8.25024 1.22543 8.58603 0.889648 9.00024 0.889648ZM3.16974 12.7651C3.16969 12.7656 3.16964 12.7662 3.16959 12.7668L8.17404 4.44777C8.17399 4.44778 8.17393 4.44779 8.17388 4.4478L3.16974 12.7651ZM0.687882 16.8901L0.6021 17.0327C0.603841 17.0302 0.607945 17.0243 0.614187 17.0147L0.672331 16.9181C0.677291 16.9093 0.682479 16.9 0.687882 16.8901ZM7.12152 18.2352C7.24991 18.6691 7.51449 19.0497 7.87577 19.3207C8.23852 19.5927 8.67928 19.7396 9.13208 19.7396C9.58488 19.7396 10.0257 19.5927 10.3884 19.3207C10.7497 19.0497 11.0143 18.6691 11.1426 18.2352H7.12152Z"
                        className="group-aria-checked:group-hover:!fill-[#fff] group-aria-selected:fill-[#fff] group-aria-disabled:fill-[#fff]"
                        fill="#676879"
                    />
                </svg>

                <p className="text-[#031B07] group-aria-selected:text-[#fff] group-aria-disabled:text-[#fff] group-aria-checked:group-hover:!text-[#fff] font-normal text-[16px] leading-[23.36px] hidden xl:block">
                    {permission === "granted"
                        ? "Allowed"
                        : permission === "denied"
                            ? "Denied"
                            : "Allow Desktop Notification"}
                </p>
            </div>
        </div>
    );
};

export default UploadProfile;
