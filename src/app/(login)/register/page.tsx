"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import LogInOrOutButton from "@/components/ui/LogInOrOutButton";
import { useFormState } from "react-dom";
import { UserActions } from "@/lib/actions";
import toast from "react-hot-toast";
import Link from "next/link";

const Register = () => {
  const [errorMessage, dispatch] = useFormState(
    UserActions.registerUser,
    undefined,
  );

  const handleSubmit = (formData: FormData) => {
    dispatch(formData);
    if (!!errorMessage?.message) {
      toast.error(errorMessage?.message);
    } else {
      toast.success("注册成功！");
    }
  };

  return (
    <>
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-[#ff6b6b]">
          构建快乐，发现趣味。
        </h1>
        <p className="text-gray-500 dark:text-gray-400">创建帐户开始使用。</p>
      </div>
      <form action={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="username">用户名</Label>
          <Input id="username" name="username" required />
        </div>
        <div id="username-error" aria-live="polite" aria-atomic="true">
          {errorMessage?.errors?.username &&
            errorMessage?.errors.username.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>
        <div>
          <Label htmlFor="nickname">昵称</Label>
          <Input id="nickname" name="nickname" required />
        </div>
        <div id="username-error" aria-live="polite" aria-atomic="true">
          {errorMessage?.errors?.nickname &&
            errorMessage?.errors.nickname.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>
        <div>
          <Label htmlFor="email">邮箱</Label>
          <Input
            id="email"
            name="email"
            placeholder="m@example.com"
            required
            type="email"
          />
        </div>
        <div id="username-error" aria-live="polite" aria-atomic="true">
          {errorMessage?.errors?.email &&
            errorMessage?.errors.email.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>
        <div>
          <Label htmlFor="password">密码</Label>
          <Input id="password" name="password" required type="password" />
        </div>
        <div id="username-error" aria-live="polite" aria-atomic="true">
          {errorMessage?.errors?.password &&
            errorMessage?.errors.password.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>
        <LogInOrOutButton>注册</LogInOrOutButton>
        <div className={"flex justify-end"}>
          <Link
            href={"/login"}
            className="text-[rgb(226_158_158)] hover:underline font-medium"
            prefetch={false}
          >
            已经有账号啦( •̀ ω •́ )✧ <span className="font-bold">去登录</span>
          </Link>
        </div>
      </form>
    </>
  );
};

export default Register;
