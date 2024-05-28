"use client";
import { PerformLogin } from "@/app/actions";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const LoginForm = () => {
  const [err, setErr] = useState("");
  const { auth, setAuth } = useAuth();
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const found = await PerformLogin(formData);
      if (found) {
        setAuth(found);
        router.push("/");
      } else {
        setErr("Plz enter valid credentials");
      }
    } catch (err) {
      setErr(err.message);
    }
  };
  return (
    <div>
      <div className="my-2 text-red-500">{err}</div>
      <form className="login-form" onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button
          type="submit"
          className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
