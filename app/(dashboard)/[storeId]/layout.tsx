import Navbar from "@/components/Navbar";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
