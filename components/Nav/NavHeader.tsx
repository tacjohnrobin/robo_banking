import React from "react";
import Image from "next/image";

interface NavHeaderProps {
  username: string;
  avatarUrl: string;
}

const NavHeader = ({ username, avatarUrl }: NavHeaderProps) => {
  return (
    <header className="bg-[#FFFFF] m-4 pl-10 flex items-center justify-between">
      <div className="header-box"></div>
      <div className="flex items-center space-x-4">
        <Image
          src={avatarUrl}
          alt={`${username}'s avatar`}
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
    </header>
  );
};

export default NavHeader;
