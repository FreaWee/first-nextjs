import Header from "../Header.js";

export default function NewAccount() {
  return (
    <>
      <Header />
      <div class="w-full h-screen flex justify-center items-center flex-col ">
        <div class="border border-white outline outline-green-300 p-5 rounded-md">
          <h1 class="underline underline-offset-2 text-2xl text-center mb-3">
            Create your account
          </h1>
          <form class="flex flex-col text-xl gap-2">
            <div class="flex gap-2 ">
              <div class="flex flex-col">
                <label>First Name</label>
                <input class="border border-blue-200 outline-none"></input>
                <label>Last Name</label>
                <input class="border border-blue-200 outline-none"></input>
                <label>Phone number</label>
                <input class="border border-blue-200 outline-none"></input>
              </div>
              <div class="flex flex-col">
                <label>Street</label>
                <input class="border border-blue-200 outline-none"></input>
                <label>City</label>
                <input class="border border-blue-200 outline-none"></input>
                <label>Zip</label>
                <input class="border border-blue-200 outline-none"></input>
              </div>
            </div>
            <div class="w-60 m-auto">
              <label>E-mail</label>
              <input class="border border-blue-200 outline-none"></input>
              <label>New password</label>
              <input class="border border-blue-200 outline-none"></input>
              <label>Confirm password</label>
              <input class="border border-blue-200 outline-none"></input>
            </div>
          </form>
          <div class="m-auto mt-5 ring-1 rounded-lg bg-green-300 w-60 text-center text-white  hover:text-green-500  active:ring-offset-2 ">
            <button>Create account</button>
          </div>
        </div>
      </div>
    </>
  );
}
