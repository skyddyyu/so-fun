import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Register = () => {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-1">
      <div className="flex items-center justify-center bg-white p-6 lg:p-12">
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
              创建账户开始探索吧!
            </p>
          </div>
          <form className="space-y-4">
            <div>
              <Label htmlFor="username">用户名</Label>
              <Input id="username" required />
            </div>
            <div>
              <Label htmlFor="nickname">昵称</Label>
              <Input id="nickname" required />
            </div>

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
              <Label htmlFor="password">密码</Label>
              <Input id="password" required type="password" />
            </div>
            <Button
              className="w-full bg-[#ff6b6b] text-white hover:bg-[#ff4d4d]"
              type="submit"
            >
              注册
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
