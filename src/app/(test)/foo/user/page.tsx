import UserForm from "@/app/(test)/foo/user/UserForm";
import { UserActions } from "@/lib/actions";

const Page = () => {
  return (
    <>
      <UserForm createUser={UserActions.createUser} />
    </>
  );
};

export default Page;
