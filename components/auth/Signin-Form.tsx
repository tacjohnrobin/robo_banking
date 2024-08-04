"use client";

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
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { z } from "zod";
import { useFormStatus } from "react-dom";
import { useState } from "react";
import CustomInput from "../CustomInput";
import { Loader2 } from "lucide-react";
import CardWrapper from "./cardwrapper";
import { InputOTPForm } from "./InputOTPForm";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [OTP, setOTP] = useState("");
  const [showOTP, setshowOTP] = useState(false);

  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    setLoading(true);
    console.log(data);
    // Handle form submission logic here
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setLoading(false); // Reset loading state after handling submission
    router.push("/"); // Redirect to the top page
  };

  const { pending } = useFormStatus();
  return (
    <CardWrapper
      label="send,spend and save smarter"
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
          <Button type="submit" className="form-btn w-full" disabled={pending}>
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
