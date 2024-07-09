import { createPortal } from "react-dom";
import { useRef,useEffect } from "react";
export default function Modal({children,isOpen,onClose ,className}){
    const modal=useRef();
    useEffect(()=>{
        if(isOpen){
            modal.current.showModal();
        }else{
            modal.current.close();
        }
    },[isOpen])
    return(
        createPortal(
        <dialog ref={modal} open={isOpen} className={`modal ${className}`} onClose={onClose}>
            {children}
        </dialog>
        ),
        document.getElementById("modal")
    );
}