import React from "react";
import {
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { Control, FieldPath, FieldValues } from "react-hook-form";
import { z } from "zod";
import { authformSchema, RegisterSchema } from "@/lib/utils";

// Define a generic type for the schema
type SchemaType = typeof authformSchema | typeof RegisterSchema;

interface CustomInputProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
  placeholder: string;
  labelClassName?: string;
  id: string;
  type?: string;
}

const CustomInput = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  labelClassName,
  id,
  type,
}: CustomInputProps<T>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className={`form-label ${labelClassName || ""}`}>
            {label}
          </FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="text-12 font-manrope"
                type={type || "text"}
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
