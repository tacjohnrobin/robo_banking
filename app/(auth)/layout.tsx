import Image from "next/image";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full">
      <div className="h-screen flex items-center justify-center">
        {children}
      </div>
    </section>
  );
};

export default AuthLayout;
//port default function RootLayout({
//children,
// Readonly<{
//children: React.ReactNode;
//) {
//return (
//  <main
//    className="flex min-h-screen w-full justify-center items-center font-manrope p-10"
//    style={{ backgroundColor: "#FFF7F2" }}
//  >
//    <div className="relative flex flex-col w-full justify-between items-center bg-white p-5 rounded-lg shadow-lg max-w-screen-lg h-auto">
//      <div className="flex w-full items-center">
//        <div className="flex-1 mr-5 ml-5 flex items-center">{children}</div>
//
//        <div className="hidden sm:block md:block flex-shrink-0 w-1/2 ">
//          <Image
//            src="/icons/auth-image.svg"
//            alt="auth image"
//            width={500}
//            height={860}
//          />
//        </div>
//      </div>
//    </div>
//  </main>
//);
//
//
