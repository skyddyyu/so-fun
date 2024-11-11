"use client";
import { useGetAllUserQuery } from "@/generates";
import React, { useEffect } from "react";

export default function Page() {
  const { data: { users } = {} } = useGetAllUserQuery();

  useEffect(() => {
    console.log("users value: ", users);
  }, [users]);

  return <div>page</div>;
}
