import React, { useState } from "react";
import Link from "next/link";

export default function Form() {
  const [password, setPassword] = useState(true);

  return (
    <div class="w-full h-screen flex justify-center items-center flex-col ">
      <div class="border border-blue-400 outline outline-gray-400 rounded-md text-center text-3xl p-5">
        <form class="flex flex-col">
          <label></label>
          <input
            type="text"
            placeholder="pseudo/e-mail"
            class="border border-blue-400 outline-none text-center my-2"></input>
          <lable></lable>
          <input
            type={password ? "password" : "text"}
            class="border border-blue-400 my-2 text-center outline-none "
            placeholder="password"></input>
          <div class="flex ml-3 gap-1 ">
            <label class="text-black text-xs ">Show Password</label>
            <input
              onClick={() => setPassword(!password)}
              type="checkbox"></input>
          </div>
        </form>
        <div class="flex justify-between text-xs px-3 pt-2 mt-4 ">
          <p>
            <Link
              href="/NewAccount"
              class=" underline underline-offset-2 hover:text-purple-500">
              New account
            </Link>
          </p>
          <Link
            href="/ForgotPassword"
            class=" underline underline-offset-2 hover:text-purple-500">
            Forgot password ?
          </Link>
        </div>
      </div>
    </div>
  );
}
