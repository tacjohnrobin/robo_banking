"use client";

import React, { useState } from "react";
import { useRouter } from "next/router";
import CardWrapper from "./Cardwrapper";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { LoginSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../ui/button";
import CustomInput from "../CustomInput";
import { Loader2 } from "lucide-react";
import { z } from "zod";

// Define types for form values
type LoginFormValues = z.infer<typeof LoginSchema>;

const LoginForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // Ensure this is within a Next.js context

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    setLoading(true);
    console.log(data);
    // Simulate an API call with a delay
    setTimeout(() => {
      setLoading(false);
      router.push("/"); // Redirect to the home page after the delay
    }, 2000); // 2 seconds delay
  };

  return (
    <CardWrapper
      label="send, spend, and save smarter"
      title="Sign in to Clickpay"
      backButtonHref="/sign-up"
      backButtonLabel="Don't have an account? Register here."
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <CustomInput
            control={form.control}
            name="email"
            label="Email"
            placeholder="Enter your email"
            labelClassName="text-sm"
            id="email"
          />
          <CustomInput
            control={form.control}
            name="password"
            label="Password"
            placeholder="Enter your password"
            labelClassName="text-sm"
            id="password"
            type="password"
          />
          <Button type="submit" className="form-btn w-full" disabled={loading}>
            {loading ? (
              <>
                <Loader2 size={20} className="animate-spin" /> &nbsp; Loading...
              </>
            ) : (
              "Sign in"
            )}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default LoginForm;
