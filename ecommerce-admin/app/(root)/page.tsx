"use client";

import { userStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";


const SetupPage = () => {
    const onOpen = userStoreModal((state) => state.onOpen);
    const isOpen = userStoreModal((state) => state.isOpen);

    useEffect (() => {
      if (!isOpen) {
        onOpen();
      }
    }, [isOpen, onOpen]);

    return (
      <div className="p-4">
        Root Page
      </div>
    );
  }
  
  export default SetupPage;