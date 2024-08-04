// InputOTPForm.tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { toast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { useState } from "react";

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

interface InputOTPFormProps {
  OTP: string;
  setOTP: React.Dispatch<React.SetStateAction<string>>;
}

export function InputOTPForm({ OTP, setOTP }: InputOTPFormProps) {
  const [loading, setloading] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <div className="flex flex-col items-center gap-4">
                    <h1 className="text-center leading-normal font-extrabold text-3xl">
                      Account Verification
                    </h1>
                    <p className="text-center leading-normal">
                      We have sent a code to your number
                    </p>
                  </div>
                </FormLabel>

                <FormControl>
                  <div className="flex items-center justify-center">
                    <InputOTP
                      maxLength={6}
                      {...field}
                      value={OTP}
                      onChange={setOTP}
                    >
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                      </InputOTPGroup>
                      <InputOTPSeparator />
                      <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                </FormControl>
                <FormDescription>
                  Please enter the one-time password sent to your phone.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-center">
            <Button className="form-btn w-full" type="submit">
              {loading && <Loader2 size={20} className="animate-spin" />}
              &nbsp;
              <span>Verify</span>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
