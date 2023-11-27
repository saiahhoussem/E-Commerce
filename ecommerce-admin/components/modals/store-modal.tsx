"use client";


import { Modal } from "@/components/ui/modal";
import { userStoreModal } from "@/hooks/use-store-modal";

export const StoreModal = () => {
    const StoreModal = userStoreModal();

    return(

    <Modal
        
        title="Create Store"
        description="Add a new store to manage products and categories"
        isOpen={StoreModal.isOpen}
        onClose={StoreModal.onClose}>
            Future Create Store Form 
        
    </Modal>

    );
    
};