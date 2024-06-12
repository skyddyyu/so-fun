import type { NextAuthConfig } from "next-auth";

/**
 *  不需要登录的白名单路由
 */
const unProtectedPaths = ["/login", "/register"];

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    // 验证用户是否登录的回调
    authorized({ auth, request: { nextUrl } }) {
      console.log("【callback authorized】 进入授权", nextUrl.href);
      const isLoggedIn = !!auth?.user;

      const isProtectedPage = !unProtectedPaths.some((path) => {
        return nextUrl.pathname.startsWith(path);
      });

      if (isProtectedPage) {
        console.log(
          "【callback authorized】 是否需要登录、是否已经登录",
          isProtectedPage,
          isLoggedIn,
        );
        // 如果需要登录 返回实际登录结果 true/false
        return isLoggedIn;
        // 如果isLoggedIn为false 会自动重定向到登录页
      } else if (isLoggedIn) {
        // 如果不是受保护的页面,且用户已经登录，跳转到首页  比如登录后再进入登录页会重定向到首页
        console.log("【callback authorized】 重定向", nextUrl.href);
        return Response.redirect(new URL("/", nextUrl));
      }
      return true;
    },
  },
  // 在auth.ts中将会被覆盖
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
