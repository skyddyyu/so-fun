"use server";
import { signIn } from "@/lib/auth";
import { AuthError } from "next-auth";

/**
 * 登录时的认证action
 * @param prevState
 * @param formData
 */
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  console.log("登陆时的表单数据：", prevState, formData);
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      console.log("密码校验的时候有错误", error, error.type);
      switch (error.type) {
        case "CredentialsSignin":
          return "非法的验证方式";
        default:
          // todo 目前只能笼统提示 待修改 next-auth的用法还不大会
          return "用户名密码错误或用户不存在";
      }
    }
    throw error;
  }
}
