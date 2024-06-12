"use server";
import React from "react";
import { Label } from "@/components/ui/label";

/**
 * 测试使用服务端组件提交表单
 * @constructor
 */
const Page = () => {
  const handleFormAction = async (formData: FormData) => {
    "use server";
    console.log("当前提交的formData: ", formData);
  };

  return (
    <div>
      <form action={handleFormAction} className="space-y-4">
        <div>
          <Label htmlFor="email">邮箱</Label>
          <input
            id="email"
            name={"email"}
            placeholder="m@example.com"
            required
            type="email"
          />
        </div>
        <button type="submit">提交</button>
      </form>
    </div>
  );
};

export default Page;
