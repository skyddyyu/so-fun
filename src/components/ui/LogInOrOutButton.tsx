"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

const LogInOrOutButton = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      className="w-full bg-[#ff6b6b] text-white hover:bg-[#ff4d4d] disabled:pointer-events-none disabled:bg-[rgb(246_203_203)]"
      type="submit"
    >
      {children}
    </Button>
  );
};

export default LogInOrOutButton;
