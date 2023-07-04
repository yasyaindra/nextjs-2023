"use client";
import { Modal } from "@/components/ui/modal";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { useStoreModal } from "@/hooks/useStoreModal";

const SetupPage = () => {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return <div className="p-4">Root Page</div>;
};

export default dynamic(() => Promise.resolve(SetupPage), { ssr: false });
