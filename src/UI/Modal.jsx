import { createPortal } from "react-dom";
import { useRef,useEffect } from "react";
export default function Modal({children,isOpen,onClose ,className=""}){
    const modal=useRef();
    useEffect(()=>{
        const modal1= modal.current;
        if(isOpen){
            modal1.showModal();
        }
        return ()=>modal1.close();
    },[isOpen])
    return(
        createPortal(
        <dialog ref={modal} className={`modal ${className}`} onClose={onClose}>
            {children}
        </dialog>
        ,
        document.getElementById("modal"))
    );
}