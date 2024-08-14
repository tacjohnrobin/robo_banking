import React from "react";
import SignUpForm from "@/components/auth/Signup-Form";
import Image from "next/image";

const SignUp = () => {
  return (
    <section className="bg-[#FFF7F2] flex justify-center items-center w-full h-full max-sm:px-6 ">
      <div className="bg-white flex  justify-center items-center gap-6 w-[600] h-[600] p-5 ">
        <div className="w-[400px] lg:w-[500px] flex justify-center items-center ">
          <SignUpForm />
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

export default SignUp;
