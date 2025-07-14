import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { cn } from "src/utils";

const inputStyles = cva([
  "w-full",
  "border",
  "border-gray-200",
  "p2",
  "rounded-lg",
  "transition-all",
  "outline-none",
  "duration-100",
  "focus:outline-primary-500",
  "focus:border-transparent",
  "placeholder:text-gray-500",
  "placeholder:text-sm",
]);

type InputProps = ComponentProps<"input"> & VariantProps<typeof inputStyles>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        autoComplete="off"
        className={cn(inputStyles({ className }))}
        {...props}
      />
    );
  }
);

export default Input;
