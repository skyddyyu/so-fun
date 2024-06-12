"use client";
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/E7dHrhc50eE
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import { authenticate } from "@/lib/actions";
import LogInOrOutButton from "@/components/ui/LogInOrOutButton";
import { CircleAlert } from "lucide-react";
import { useFormState } from "react-dom";

const Login = () => {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
  return (
    <>
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-[#ff6b6b]">
          构建快乐，发现趣味。
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          欢迎回来! 登录您的账户开始使用。
        </p>
      </div>
      <form action={dispatch} className="space-y-4">
        <div>
          <Label htmlFor="email">邮箱</Label>
          <Input
            id="email"
            name={"email"}
            placeholder="m@example.com"
            required
            type="email"
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <Label htmlFor="password">密码</Label>
            <Link
              className="text-sm font-medium text-[#ff6b6b] hover:underline"
              href="#"
            >
              忘记密码?
            </Link>
          </div>
          <Input id="password" name={"password"} required type="password" />
        </div>
        <LogInOrOutButton>登录</LogInOrOutButton>
        <div className={"flex justify-end"}>
          <Link
            href={"/register"}
            className="text-[rgb(226_158_158)] hover:underline font-medium"
            prefetch={false}
          >
            呀，还没有账号ಥ_ಥ <span className="font-bold">去注册</span>
          </Link>
        </div>
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <CircleAlert className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </form>
    </>
  );
};

export default Login;
