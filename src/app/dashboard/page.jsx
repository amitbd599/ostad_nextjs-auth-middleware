"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  const logoutHandel = async () => {
    let res = await axios.get("/api/login");
    if (res.data.status === true) {
      router.replace("/");
    }
  };
  return (
    <div>
      <h2>Dashboard</h2>
      <br />
      <button onClick={logoutHandel}>Logout</button>
    </div>
  );
};

export default page;
