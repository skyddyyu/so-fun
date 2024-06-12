import { signOut } from "@/lib/auth";
import { LogOut } from "lucide-react";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center text-3xl">
      <div className={"flex flex-col gap-4"}>
        <div>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-500 p-3 text-sm font-medium text-white hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
              <LogOut className="w-6" />
              <div className="hidden md:block">Sign Out</div>
            </button>
          </form>
        </div>
        <p className={"text-green-700"}>Hello,This is soFun!</p>
      </div>
    </div>
  );
}
