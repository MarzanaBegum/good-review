import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const servicedata = atomWithStorage("order-data", {
  serviceType: "",
  reviews: [],
});

type UserStoreType = {
  userId?: string;
  _id: string;
  notifications: any[];
  orders: any[];
  customerId: string;
};

export type UserStateType = {
  firstName: string;
  lastName: string;
  email: string;
  profile?: string;
  userStore: UserStoreType;
  googleAuth?: boolean;
  status?: string;
  _id: string;
};

export const USER_STATE = atom<UserStateType | undefined>(undefined);

export const TimeState = atomWithStorage<number | undefined>(
  "timer",
  undefined
);

export const CLIENT_SECRET = atomWithStorage<string | undefined>(
  "client_secret",
  undefined
);
