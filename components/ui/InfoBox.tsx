import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./card";

import { Button } from "./button";
import Image from "next/image";

const InfoBox = () => {
  return (
    <div>
      <Card className="w-header-box-title bg-bank-gradient rounded-[16px]">
        <CardHeader>
          <CardTitle className="text-white header-box-title">
            Unlimited Cashback{" "}
          </CardTitle>
          <CardDescription className="header-box-subtext text-white">
            Instant 2% back on all your spend to your account{" "}
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="pt-6  pl-5">
          <Button className="bg-white pt-2" type="submit">
            <div className="flex col gap-2 ">
              <div className="header-box-subtext text-[#DF4A00] ">
                Upgrade Now
              </div>
              <div className="">
                <Image
                  src="/public/icons/arrow-right.svg"
                  alt="arrow left"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default InfoBox;
