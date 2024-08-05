/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BankCard from "./BankCard";
import { Button } from "@/components/ui/button";

const RightSideBar = ({ user, transactions, banks }: RightSidebarProps) => {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl font-bold text-blue-500">
              {user.firstName[0]}
            </span>
          </div>
          <div className="profile-details">
            <h1 className="font-manrope-500 ">
              {user.firstName} {user.lastName}
            </h1>
            <p className="profile-email">{user.email}</p>
          </div>
        </div>
      </section>
      <section className="banks">
        <div className="flex w-full justify-between">
          <h2 className="font-manrope-500  header-2">My Banks</h2>
          <Link href="/" className="flex gap-2">
            <Image src="/icons/plus.svg" width={20} height={20} alt="plus" />
            <h2 className="text-14 font-semibold text-grey-400"> Add Bank</h2>
          </Link>
        </div>
        {banks?.length > 0 && (
          <>
            <div className="relative flex lex-1 flex-col items-center justify-centergap-5">
              <div className="relative z-10">
                <BankCard
                  key={banks[0].$id}
                  account={banks[0]}
                  userName={`${user.firstName} ${user.lastName}`}
                  showBalance={false}
                />
              </div>
              {banks[1] && (
                <div className="absolute right-0 top-8 z-0 w-[90%]">
                  <BankCard
                    key={banks[1].$id}
                    account={banks[1]}
                    userName={`${user.firstName} ${user.lastName}`}
                    showBalance={false}
                  />
                </div>
              )}
            </div>
            <div className="flex col gap-4 items-center justify-center p-5">
              <div>
                <Button variant="outline" size="icon">
                  <img
                    src="/public/deposit.svg "
                    alt=""
                    height={30}
                    width={30}
                  />
                </Button>
                {"Deposit"}
              </div>
              <div>
                <Button variant="outline" size="icon">
                  <img
                    src="/public/withdraw.svg  "
                    alt=""
                    height={30}
                    width={30}
                  />
                </Button>
                {"withdraw"}
              </div>
              <div className="items-center justify-center">
                <Button variant="outline" size="icon">
                  <img src="/public/send.svg  " alt="" height={30} width={30} />
                </Button>
                send
              </div>
            </div>
          </>
        )}
      </section>
    </aside>
  );
};

export default RightSideBar;
