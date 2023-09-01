"use client";
import axios from "axios";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  let emailRef,
    passwordRef = useRef();

  const handelSubmit = async (e) => {
    e.preventDefault();

    let email = emailRef.value;
    let password = passwordRef.value;

    let res = await axios.post("api/login", { email, password });
    if (res.data.status === true) {
      router.replace("/dashboard");
      alert("true");
    } else {
      alert(res.data.msg);
    }
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input
          className="border border-purple-600 p-2"
          type="text"
          placeholder="Email"
          ref={(input) => (emailRef = input)}
        />{" "}
        <br />
        <input
          className="border border-purple-600 p-2"
          type="password"
          placeholder="Password"
          ref={(input) => (passwordRef = input)}
        />{" "}
        <br />
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
};

export default page;
