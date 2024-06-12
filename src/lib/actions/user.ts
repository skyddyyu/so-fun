"use server";

import { User } from "@/lib/definitions";
import prisma from "@/lib/prisma";
import { encrypt } from "@/lib/utils";
import { z } from "zod";
import { ErrorMessageState } from "#/common";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

/**
 * 只是一个新建用户的测试方法
 * 创建用户action
 * @deprecated
 * @param user
 */
export async function createUser(user: User) {
  console.log("用户添加时携带的数据：", user);
  try {
    const encrypted = encrypt.hashPassword(user.password);
    await prisma.user.create({
      data: {
        username: user.username,
        nickname: user.nickname,
        password: encrypted,
        email: user.email,
      },
    });
    console.log("新建用户成功");
    return {
      success: true,
      message: "新建用户成功",
    };
  } catch (error) {
    console.error("新建用户失败，原因如下：", error);
    return {
      success: false,
      message: "新建用户失败",
    };
  }
}

/**
 * 注册用户业务方法
 * 只有注册失败情况下返回 {message}
 * @param prevState
 * @param formData
 */
export async function registerUser(
  prevState: ErrorMessageState,
  formData: FormData,
) {
  console.log("注册时的表单数据：", formData);
  const user = {
    username: formData.get("username") as string,
    nickname: formData.get("nickname") as string,
    password: formData.get("password") as string,
    email: formData.get("email") as string,
  };
  const userValidatedFields = z
    .object({
      username: z.string().min(2).max(15),
      nickname: z.string().min(2).max(12),
      password: z.string().min(8).max(18),
      email: z.string().email(),
    })
    .safeParse(user);

  // 如果表单验证失败, 返回错误. 否则，继续.
  if (!userValidatedFields.success) {
    return {
      errors: userValidatedFields.error.flatten().fieldErrors,
      message: "用户字段校验失败， 失败的去注册用户。",
    };
  }

  // 检验是否已注册
  const count = await prisma.user.count({
    where: {
      OR: [{ username: user.username }, { email: user.email }],
    },
  });
  if (count > 0) {
    console.log("该用户已经存在：", user.username, user.email);
    return {
      message: "用户已存在， 快去登录吧。",
    };
  }

  try {
    const encrypted = encrypt.hashPassword(user.password);
    await prisma.user.create({
      data: {
        username: user.username,
        nickname: user.nickname,
        password: encrypted,
        email: user.email,
      },
    });
  } catch (error) {
    return {
      message: "数据库异常， 失败的去注册用户。",
    };
  }

  console.log("注册用户成功 开始执行跳转");
  // 注意下面的重定向代码 一定不能写在 try catch 里面 否则无效  重定向利用的实现利用了错误的抛出
  revalidatePath("/register");
  redirect("/login");
}
