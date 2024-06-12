import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import LogInOrOutButton from "@/components/ui/LogInOrOutButton";

const Register = () => {
  return (
    <form className="space-y-4">
      <div>
        <Label htmlFor="username">用户名</Label>
        <Input id="username" required />
      </div>
      <div>
        <Label htmlFor="nickname">昵称</Label>
        <Input id="nickname" required />
      </div>

      <div>
        <Label htmlFor="email">邮箱</Label>
        <Input id="email" placeholder="m@example.com" required type="email" />
      </div>
      <div>
        <Label htmlFor="password">密码</Label>
        <Input id="password" required type="password" />
      </div>
      <LogInOrOutButton>注册</LogInOrOutButton>
    </form>
  );
};

export default Register;
