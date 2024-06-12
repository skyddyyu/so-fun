"use server";

import { User } from "@/lib/definitions";
import prisma from "@/lib/prisma";
import { encrypt } from "@/lib/utils";

/**
 * 创建用户action
 * @param user
 */
export async function createUser(user: User) {
  console.log("表单提交时携带的数据：", user);
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
      message: "新建用户成功",
    };
  } catch (error) {
    console.error("新建用户失败，原因如下：", error);
    return {
      message: "新建用户失败",
    };
  }
}
