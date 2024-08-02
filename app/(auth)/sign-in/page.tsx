import React from "react";
import SignInForm from "@/components/auth/Signin-Form";
import Image from "next/image";

const SignIn = () => {
  return (
    <section className="bg-[#FFF7F2] flex justify-center items-center w-full h-full max-sm:px-6 ">
      <div className="bg-white flex  justify-center items-center gap-4 w-[600] h-[600] p-5 ">
        <div className="w-full lg:w-1/2 flex justify-center items-center ">
          <SignInForm />
        </div>
        <div className="hidden lg:block w-full md:0 lg:w-1/2 flex ">
          <Image
            src="/icons/auth-image.svg"
            alt="authImage"
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default SignIn;
