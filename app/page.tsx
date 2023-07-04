import { Button } from "@/components/ui/button";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col p-5">
      <div className="pb-3">
        <h1 className="text-2xl font-bold">Home, Hello Admin Dashboard</h1>
      </div>
      <div>
        <Button>Click Here</Button>
      </div>
    </div>
  );
}
