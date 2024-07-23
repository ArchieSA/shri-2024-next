"use client";

import { UserContext } from "@/contexts/user/context";
import { useMemo, useState } from "react";

export function UserContextProvider({ children }) {
  const [user, setUser] = useState();

  const contextValue = useMemo(
    () => ({ user, login: setUser, logout: () => setUser(null) }),
    [user]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
