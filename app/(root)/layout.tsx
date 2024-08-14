import React from "react";
import MobileNav from "@/components/ui/MobileNav";
import SideBar from "@/components/sidebar/SideBar";
import Image from "next/image";
import NavHeader from "@/components/Nav/NavHeader";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const loggedIn = { firstname: "John", lastname: "Doe" };

  return (
    <main className="flex h-screen w-full font-inter">
      <SideBar user={loggedIn} />
      <div className="flex flex-col w-full">
        {/* Include the NavBar */}

        <div className="flex-grow">
          <div className="root-layout p-4">
            <Image
              src="/icons/logo.svg"
              width={30}
              height={30}
              alt="Menu logo"
            />
            <MobileNav user={loggedIn} />
          </div>
          {children}
        </div>
      </div>
    </main>
  );
};

export default RootLayout;
