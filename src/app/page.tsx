import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-xl text-blue-500">Welcome to the course!</h1>
      <h1 className="text-4xl">heading</h1>
      <Button className="text-xl" variant={"destructive"}>Click me</Button>
    </div>
  );
}
