import classNames from "classnames";
import React, { useMemo, useState } from "react";
import useNotifications, {
  useNotifyRefetch,
} from "../../api-query/useNotifications";
import Moment from "react-moment";
import { api } from "../../api";
import { useAtom } from "jotai";
import { USER_STATE } from "../../state";

const NotificationDetails = () => {
  const { data } = useNotifications();
  const [notificationState, setNotificationState] = useState("all");
  const unreadNotify = data?.filter((v) => !v.isSeen) || [];
  const [user] = useAtom(USER_STATE);

  const newData = useMemo(
    () => data?.filter((v) => (notificationState === "all" ? v : !v.isSeen)),
    [notificationState, data]
  );

  const notifyRefetch = useNotifyRefetch();

  const handleReadNotify = async (id: string) => {
    try {
      const {} = await api.put("/notify/" + id);
      await notifyRefetch();
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <div className="p-[16px] sm:px-[20px] sm:py-[30px] md:p-[30px] lg:px-[30px] lg:py-[40px] bg-[#FFFFFF] rounded-[10px]">
      <h1 className="text-[16px] font-semibold leading-[19px] text-[#031B07]">
        Notification
      </h1>
      <div className="pt-[24px]"></div>
      <div className="flex gap-[20px]">
        <button
          onClick={() => setNotificationState("all")}
          className={classNames(
            "text-[#031B07] text-[16px] 2xl:text-[18px] font-medium border-b-2 border-transparent px-[12px] py-[8px]",
            notificationState !== "unread" ? "border-b-2 !border-primary" : ""
          )}
        >
          All <span className="font-normal">({data?.length || 0})</span>
        </button>
        <button
          onClick={() => setNotificationState("unread")}
          className={classNames(
            "text-[#626F63] text-[16px] 2xl:text-[18px] font-medium border-b-2 border-transparent px-[12px] py-[8px]",
            notificationState === "unread" ? "border-b-2 !border-primary" : ""
          )}
        >
          Unread ({unreadNotify.length})
        </button>
      </div>
      <div className="flex flex-col gap-[16px] mt-[24px]">
        {newData ? (
          newData.map((item, i) => (
            <div
              key={"notify_" + i}
              className="flex items-start p-2 gap-[16px]"
              style={{
                background: !item.isSeen ? "#f7fff9" : "#fff",
                cursor: !item.isSeen ? "pointer" : "default",
              }}
              onClick={() => !item.isSeen && handleReadNotify(item._id)}
            >
              <img
                src={
                  user && user.profile ? user.profile : "/images/profile.png"
                }
                alt=""
                className="w-[42px] h-[42px] rounded-full"
              />
              <div className="flex flex-col">
                <p className="font-normal text-[14px] leading-[19.6px] lg:text-[16px] xl:leading-[23.36px] text-[#3C403D]">
                  {item.title}
                </p>
                <p className="text-[#626F63] font-normal text-[14px] leading-[20.44px] mt-[10px]">
                  <Moment fromNow>{item.createdAt}</Moment>
                </p>
              </div>
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default NotificationDetails;
