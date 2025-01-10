import ThemeToggle from "@/components/shared/theme-toggle";

import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <div className="w-100 flex justify-end gap-x-5 p-4">
        <UserButton />
        <ThemeToggle />
      </div>
      <h1 className="text-xl text-blue-500">Welcome to the course!</h1>
      <h1 className="text-4xl">heading</h1>
    </div>
  );
}
