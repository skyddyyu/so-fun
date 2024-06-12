import NextAuth from "next-auth";
import { authConfig } from "../../auth.config";
import Credentials from "next-auth/providers/credentials";
import type { User } from "@/lib/definitions";
import prisma from "@/lib/prisma";
import { encrypt } from "@/lib/utils";
import { z } from "zod";

async function getUser(email: string): Promise<User | null | undefined> {
  try {
    return prisma.user.findFirst({
      where: {
        email,
      },
    });
  } catch (error) {
    console.error("失败的去获取用户:", error);
    throw new Error("失败的去获取用户。");
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        // 对登录信息做检验
        const parsedCredentials = z
          .object({
            password: z.string().min(8).max(18),
            email: z.string().email(),
          })
          .safeParse(credentials);

        console.log("【auth】正在执行身份认证");
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) {
            console.log("【auth】无账号认证失败");
            return null;
          }
          console.log("【auth】 认证成功: ", user);
          // 密码验证
          if (encrypt.passwordIsEq(password, user.password)) return user as any;
        }

        // 默认返回认证失败
        return null;
      },
    }),
  ],
});
