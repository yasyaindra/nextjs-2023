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

  return null;
};

export default dynamic(() => Promise.resolve(SetupPage), { ssr: false });
