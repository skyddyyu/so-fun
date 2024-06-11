/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/E7dHrhc50eE
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

 To read more about using these font, please visit the Next.js documentation:
 - App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
 - Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
 **/
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-1">
      <div className="flex items-center justify-center bg-[#f8f8f8] p-6 lg:p-12">
        <div className="w-full max-w-md space-y-6">
          <Image
            className={"mx-auto"}
            src={"/assets/svgs/tomato.svg"}
            width={120}
            height={120}
            alt={"soFun Symbol"}
          />
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-[#ff6b6b]">
              构建快乐，发现趣味。
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              欢迎回来! 登录您的账户。
            </p>
          </div>
          <form className="space-y-4">
            <div>
              <Label htmlFor="email">邮箱</Label>
              <Input
                id="email"
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
              <Input id="password" required type="password" />
            </div>
            <Button
              className="w-full bg-[#ff6b6b] text-white hover:bg-[#ff4d4d]"
              type="submit"
            >
              登录
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
