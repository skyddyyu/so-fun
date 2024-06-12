import React from "react";
import Image from "next/image";

const LoginTemplate = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="grid min-h-screen grid-cols-1">
      <div className="flex items-center justify-center bg-[#f8f8f8] p-6 lg:p-12">
        <div className="w-full max-w-md space-y-6">
          <Image
            className={"mx-auto"}
            src={"/assets/svgs/tomato.svg"}
            width={120}
            height={120}
            alt={"soFun Symbol"}
          />
          {children}
        </div>
      </div>
    </div>
  );
};

export default LoginTemplate;
