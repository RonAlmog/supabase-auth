import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-cente flex flex-col gap-3 mx-auto">
      <h1 className="text-4xl font-bold">Welcome to My App</h1>
      <p className="mt-4 text-lg">This is a simple Next.js application.</p>
      <Button className="w-fit" variant="secondary">
        Click me
      </Button>
    </div>
  );
}
