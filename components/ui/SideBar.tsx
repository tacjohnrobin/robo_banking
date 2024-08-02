"use client";

import React from "react";
import { sidebarLinks } from "@/constants"; // Assuming sidebarLinks is an array of link objects
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";

const SideBar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <a href="/" className="flex items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={30}
            height={30}
            alt="Logo"
            className="size-[24px]  max-xl:size-14"
          />
          <h1 className="sidebar-logo">Clickpay</h1>
        </a>
        <br />
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <a
              href={item.route}
              key={item.label}
              className={cn("sidebar-link", { "bg-bank-gradient": isActive })}
            >
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  className={cn({ "brightness-[3] invert-0": isActive })}
                  width={34}
                  height={34}
                />
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {item.label}
              </p>
            </a>
          );
        })}
        USER
      </nav>
      FOOTER
    </section>
  );
};

export default SideBar;
