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
      switch (error.type) {
        case "CredentialsSignin":
          return "非法的凭证";
        default:
          return "遇到了一些未知错误.";
      }
    }
    throw error;
  }
}
