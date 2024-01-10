import React, { useMemo, useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import {
  NotificationType,
  useNotifyRefetch,
} from "../../api-query/useNotifications";
import Moment from "react-moment";
import { api } from "../../api";
import { USER_STATE } from "../../state";
import { useAtom } from "jotai";

type NotifyCardType = {
  setOpenNotification: any;
  openNotification: any;
  data?: NotificationType[];
};

const NotificationCard = ({
  setOpenNotification,
  openNotification,
  data,
}: NotifyCardType) => {
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
    <>
      <div className="py-[30px] px-[30px] ">
        <img
          onClick={() => setOpenNotification(!openNotification)}
          src="/icons/left-arrow.svg"
          alt=""
          className="mb-[20px] cursor-pointer sm:hidden"
        />
        <div className="flex justify-between">
          <h2 className="font-medium xl:font-semibold text-[16px] leading-[22.4px] xl:text-[32px] xl:leading-[43.84px] mb-[20px] sm:mb-[30px]">
            Notification
          </h2>
          <Link
            onClick={() => setOpenNotification(!openNotification)}
            href="/dashboard/notifications"
          >
            <h3 className="text-[16px] font-normal leading-[140%] text-[#18BA33] cursor-pointer">
              View all
            </h3>
          </Link>
        </div>

        <div className="flex gap-[20px] xl:gap-[48px]">
          <button
            onClick={() => setNotificationState("all")}
            className={classNames(
              "text-[#031B07] xl:text-[16px] xl:leading-[19.36px] text-[14px] leading-[19.6px] font-normal xl:font-semibold border-b-2 border-transparent  py-[3px]",
              notificationState !== "unread" ? " !border-primary" : ""
            )}
          >
            All <span className="font-normal">({data?.length || 0})</span>
          </button>
          <button
            onClick={() => setNotificationState("unread")}
            className={classNames(
              "text-[#626F63]  xl:text-[16px] xl:leading-[19.36px] text-[14px] leading-[19.6px] font-normal xl:font-semibold border-b-2 border-transparent  py-[3px]",
              notificationState === "unread" ? " !border-primary" : ""
            )}
          >
            Unread ({unreadNotify.length})
          </button>
        </div>

        <div className="flex flex-col gap-[30px] mt-[25px] overflow-y-auto modal-scrollbar h-[70vh] sm:max-h-[350px]">
          {newData ? (
            newData.map((item, i) => (
              <div
                key={"notify_" + i}
                className="flex items-start  gap-[16px] p-2"
                style={{
                  background: !item.isSeen ? "#f7fff9" : "#fff",
                  cursor: !item.isSeen ? "pointer" : "default",
                }}
                onClick={() => !item.isSeen && handleReadNotify(item._id)}
              >
                <img
                  src={
                    user && user.profile
                      ? user.profile
                      : "/images/profile.png"
                  }
                  alt=""
                  className="w-[42px] h-[42px] rounded-full"
                />
                <div className="flex flex-col">
                  <p className="font-normal text-[14px] leading-[19.6px] xl:text-[16px] xl:leading-[23.36px] text-[#3C403D]">
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
    </>
  );
};

export default NotificationCard;
