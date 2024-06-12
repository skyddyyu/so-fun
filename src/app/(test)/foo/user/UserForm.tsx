"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React, { FC } from "react";
import { Input } from "@/components/ui/input";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { User } from "@/lib/definitions";
import toast from "react-hot-toast";
import { encrypt } from "@/lib/utils";

export const userFormSchema = z.object({
  username: z.string().min(2).max(15),
  nickname: z.string().min(2).max(12),
  password: z.string().min(8).max(18),
  email: z.string().email(),
});

interface UserFormProps {
  createUser: (user: User) => Promise<{ message: string }>;
}

const UserForm: FC<UserFormProps> = ({ createUser }) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof userFormSchema>>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {},
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof userFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    const { message } = await createUser(values);
    toast(message);
    console.log("服务器操作执行完毕");
  }

  return (
    <>
      <div className={"w-[500px] mt-[100px] m-auto"}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>用户名</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nickname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>昵称</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>密码</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>邮箱</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <div className={"flex gap-x-2"}>
                <Button type="submit">Submit</Button>
                <Button
                  type="button"
                  onClick={async () => {
                    const isTure = encrypt.passwordIsEq(
                      "Dai19990109",
                      "e9d965861afb1643",
                    );
                    console.log("验证是否是源密码：", isTure);
                  }}
                >
                  密码是否正确
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default UserForm;
