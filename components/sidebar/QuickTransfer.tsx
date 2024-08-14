/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import CurrencyInput from "react-currency-input-field";
import { Button } from "../ui/button";

const QuickTransfer = () => {
  return (
    <Card className="w-[300px]  rounded-[16px]  ">
      <CardHeader>
        <CardTitle className="font-manrope font-bold-600 font-[20px]">
          Quick Transfer
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="">
          <Select>
            <SelectTrigger className="w-full p-2">
              <SelectValue placeholder="Choose a Card" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mastercard">
                <div className="w-full flex col gap-[150px]">
                  <div className="flex justify-between items-center w-full">
                    <img
                      src="public/icons/mastercard.svg"
                      alt="Dark theme avatar"
                      className="w-6 h-6 rounded-full"
                    />
                    <span>MasterCard</span>
                  </div>
                </div>
              </SelectItem>
              <SelectItem value="visa">
                <div className="flex col gap-[200px]">
                  <div className="flex items-center w-full">
                    <img
                      src="public/icons/visa.svg"
                      alt="Dark theme avatar"
                      className="w-6 h-6 rounded-full"
                    />
                    <span>Visa</span>
                  </div>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full pt-8">
          <CurrencyInput
            id="input-example"
            name="input-name"
            placeholder="Enter Amount"
            decimalsLimit={2}
            onValueChange={(value, name, values) =>
              console.log(value, name, values)
            }
            className="w-full items-center p-5 pl-2 border-[3px] border-orange-400 rounded-md"
          />
        </div>
      </CardContent>
      <CardFooter className="pt-10 w-full">
        <Button className="bg-orange-500 w-full" type="submit">
          <span className="text-[16px] font-bold text-white">
            {"Deposit Money"}
          </span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuickTransfer;
