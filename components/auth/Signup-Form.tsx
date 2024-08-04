"use client";

import CardWrapper from "./cardwrapper";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RegisterSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from "zod";
import { useState } from "react";
import CustomInput from "../CustomInput";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      country: "",
      phoneNumber: "",
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof RegisterSchema>) => {
    setLoading(true);
    console.log(data);
    // Handle form submission logic here
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setLoading(false); // Reset loading state after handling submission
    router.push("/"); // Redirect to the top page
  };

  return (
    <CardWrapper
      label="Send, spend, and save smarter with us"
      title="Sign up for an account"
      backButtonHref="/sign-in"
      backButtonLabel="Already have an account? Login here."
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex gap-4 w-full">
            <div style={{ width: "300px" }}>
              <CustomInput
                control={form.control}
                name="firstName"
                label="First Name"
                placeholder="Legal first name"
                labelClassName="text-sm"
                id="firstName"
              />
            </div>

            <div style={{ width: "300px" }}>
              <CustomInput
                control={form.control}
                name="lastName"
                label="Last Name"
                placeholder="Legal last name"
                labelClassName="text-sm"
                id="lastName"
              />
            </div>
          </div>

          <CustomInput
            control={form.control}
            name="country"
            label="Country"
            placeholder="Select Country"
            labelClassName="text-sm"
            id="country"
          />
          <CustomInput
            control={form.control}
            name="phoneNumber"
            label="Phone Number"
            placeholder="ex: (+254)"
            labelClassName="text-sm"
            id="phoneNumber"
          />
          <CustomInput
            control={form.control}
            name="email"
            label="Email"
            placeholder="Enter preferred email"
            labelClassName="text-sm"
            id="email" // Changed to "email"
          />
          <CustomInput
            control={form.control}
            name="password"
            label="Password"
            placeholder="Enter strong password"
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
              "Register"
            )}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default SignUpForm;
