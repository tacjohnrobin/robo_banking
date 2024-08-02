"use client";
import React, { useState } from "react";
import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomInput from "../CustomInput";
import { authformSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { signIn, signUp } from "@/lib/actions/user.actions";
import Link from "next/link";

const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authformSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      if (type === "sign-up") {
        const newUser = await signUp(data);

        setUser(newUser);
      }

      if (type === "sign-in") {
        //const response = await signIn({
        //   email: data.email,
        //   password: data.password,
        // });
        // if (response) {
        //   await delay(1000); // Wait for 1 second
        //   router.push("/");
        // }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <div className="fabsolute top-0 left-0 m-5 text-blue-500 ">
          <Link href="/" className="cursor-pointer flex items-center gap-1">
            <Image
              src="/icons/logo.svg"
              width={20}
              height={20}
              alt="Clickpay logo"
            />
            <h1 className="text-20 font-manrope font-bold text-black-1">
              Clickpay
            </h1>
          </Link>
        </div>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-center text-24 lg:text-36 font-semibold text-gray-900">
            {user
              ? "Link Account"
              : type === "sign-in"
              ? "Sign in to Clickpay"
              : "Sign up for an Account"}
            <p className="text-center text-16 font-normal text-gray-600">
              {user
                ? "Link your account to get started"
                : "Please enter your details"}
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">{/*palid link */}</div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === "sign-up" && (
                <>
                  <div className="flex gap-4 w-full  ">
                    <CustomInput
                      control={form.control}
                      name="firstName"
                      label="First Name"
                      placeholder="Legal first name"
                      labelClassName="text-sm" // Apply custom class here
                      id="firstName"
                    />
                    <CustomInput
                      control={form.control}
                      name="lastName"
                      label="Last Name"
                      placeholder="Legal last name"
                      labelClassName="text-sm" // Apply custom class here
                      id="lastName"
                    />
                  </div>
                  <CustomInput
                    control={form.control}
                    name="country"
                    label="Country"
                    placeholder="Select Country"
                    labelClassName="text-sm" // Apply custom class here
                    id="country"
                  />
                  <CustomInput
                    control={form.control}
                    name="phoneNumber"
                    label="Phone Number"
                    placeholder="ex: (+254)"
                    labelClassName="text-sm" // Apply custom class here
                    id="phoneNumber"
                  />
                </>
              )}

              <CustomInput
                control={form.control}
                name="email"
                label="Email"
                placeholder="Enter your email"
                labelClassName="text-sm" // Apply custom class here
                id="email"
              />
              <CustomInput
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter your password"
                labelClassName="text-sm" // Apply custom class here
                id="password"
              />

              <div className="flex flex-col gap-4">
                <Button type="submit" disabled={isLoading} className="form-btn">
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      Loading...
                    </>
                  ) : type === "sign-in" ? (
                    "Sign In"
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>
            </form>
          </Form>
          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-grey-700">
              {type === "sign-in"
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <Link
              href={type === "sign-in" ? "/sign-up" : "/sign-in"}
              className="text-14 font-bold text-grey-700"
            >
              {type === "sign-up" ? "Sign in" : "Sign up"}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;
