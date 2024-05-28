"use client";
import { useAuth } from "@/app/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const SignInSignOut = () => {
  const { auth, setAuth } = useAuth();
  const router = useRouter();
  const handleLogout = () => {
    setAuth(null);
    router.push("/login");
  };
  return (
    <div>
      {auth?.email ? (
        <>
          <span className="mx-2">hello,{auth?.name}</span>
          <span className="mx-2">|</span>
          <a className="cursor-pointer" onClick={handleLogout} href="">
            Logout
          </a>
        </>
      ) : (
        <>
          <li>
            <Link href={"/login"}>Login</Link>
          </li>
        </>
      )}
    </div>
  );
};

export default SignInSignOut;
