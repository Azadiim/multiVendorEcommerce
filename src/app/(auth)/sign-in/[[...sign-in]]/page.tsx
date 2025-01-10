import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="h-screen w-full grid place-items-center">
      <SignIn />
    </div>
  );
};

export default SignInPage;
