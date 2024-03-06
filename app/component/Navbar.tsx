"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { signOut } from "aws-amplify/auth";
import { useRouter } from "next/navigation";
import { Hub } from "aws-amplify/utils";
import { useTransition } from "react";

export default function Navbar({ isSignedIn }: { isSignedIn: boolean }) {
  const [authCheck, setAuthCheck] = useState(isSignedIn);
  const [isPending, startTransition] = useTransition();

  const router = useRouter();
  useEffect(() => {
    const hubListenerCancel = Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case "signedIn":
          setAuthCheck(true);
          startTransition(() => router.push("/todos"));
          startTransition(() => router.refresh());
          break;
        case "signedOut":
          setAuthCheck(false);

          startTransition(() => router.push("/"));
          startTransition(() => router.refresh());
          break;
      }
    });

    return () => hubListenerCancel();
  }, [router]);

  const signOutSignIn = async () => {
    if (authCheck) {
      await signOut();
      router.push("/");
    } else {
      router.push("/");
    }
  };

  return (
    <div className="fullShadow  fixed top-0 left-0 right-0 pl-4 pr-4 w-full h-[64px] flex justify-between items-center bg-white">
      <div className=" max500:flex-col flex items-center max500:gap-[2px] gap-4">
        <p className=" text-xl font-extrabold text-text ">TODO-APP</p>
        <div className=" flex gap-2">
          <Link href={"/create"} className=" text-text underline">
            Create Todo
          </Link>
          <Link href={"/todos"} className=" text-text underline">
            See Todos
          </Link>
        </div>
      </div>
      <div
        onClick={signOutSignIn}
        className=" cursor-pointer pl-4 pr-4 p-2 bg-const border-2 rounded-2xl font-bold flex justify-center items-center text-text"
      >
        {authCheck ? "Sign Out" : "Sign In"}
      </div>
    </div>
  );
}
