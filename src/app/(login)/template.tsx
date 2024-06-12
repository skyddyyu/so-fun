import React from "react";
import Image from "next/image";

const LoginTemplate = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
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
          {children}
        </div>
      </div>
    </div>
  );
};

export default LoginTemplate;
