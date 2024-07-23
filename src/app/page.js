import { HeadphoneDetails } from "@/components/headphoneDetails";
import { UserContext } from "@/contexts/user/context";
import { UserContextProvider } from "@/contexts/user/provider";
import React from "react";

export default function Home() {
  return (
    <UserContextProvider>
      <main>Home</main>
      <HeadphoneDetails />
    </UserContextProvider>
  );
}
