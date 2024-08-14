/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BankCard from "../ui/BankCard";
import QuickTransfer from "./QuickTransfer";

const RightSideBar = ({ user, transactions, banks }: RightSidebarProps) => {
  return (
    <aside className="right-sidebar">
      <section className="py-7">
        <div className="p-3 pt-5 w-[355px] border-2 rounded-[16px]">
          <div className="flex w-full justify-between pb-7 px-3">
            <h2 className="font-manrope-500  header-2">Wallet</h2>
            <Link href="/" className="flex gap-2">
              <Image src="/icons/plus.svg" width={20} height={20} alt="plus" />
              <h2 className="text-14 font-semibold text-grey-400"> Add Bank</h2>
            </Link>
          </div>
          {banks?.length > 0 && (
            <>
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
                <div className="flex col gap-4 items-center justify-center p-3 pt-16">
                  <div>
                    <Button variant="outline" size="icon">
                      <img
                        src="/public/deposit.svg "
                        alt=""
                        height={30}
                        width={30}
                      />
                    </Button>
                    <div className="">{"Deposit"}</div>
                  </div>
                  <div className="pl-2">
                    <Button variant="outline" size="icon">
                      <img
                        src="/public/withdraw.svg  "
                        alt=""
                        height={30}
                        width={30}
                      />
                    </Button>
                    <div className="">{"withdraw"}</div>
                  </div>
                  <div className="items-center justify-center">
                    <Button variant="outline" size="icon">
                      <img
                        src="/public/send.svg  "
                        alt=""
                        height={30}
                        width={30}
                      />
                    </Button>
                    <div className="pl-2">{"Send"}</div>
                  </div>
                </div>
              </>
            </>
          )}
        </div>
      </section>
      <section>
        <div className="  px-6  border-2 rounded-[16px]">
          <QuickTransfer />
        </div>
      </section>
    </aside>
  );
};

export default RightSideBar;
