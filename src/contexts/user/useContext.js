import { UserContext } from "@/contexts/user/context";
import { useContext } from "react";

export const useUserContext = () => {
  return useContext(UserContext);
};
