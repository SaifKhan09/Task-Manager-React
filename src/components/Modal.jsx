import { createPortal } from "react-dom"
import { useImperativeHandle,forwardRef, useRef } from "react"

 import Button from './Button'

const Modal = forwardRef(function Modal({children,buttonCaption},importedRef){

    const dialog = useRef()
    useImperativeHandle(importedRef,()=>{
        return{
            open(){
                dialog.current.showModal();
            }
        }
    })

    let element = document.getElementById('modal-root')

    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            {children}
            <form method="dialog" className="mt-4 text-right">
                <Button>{buttonCaption}</Button>
            </form>
        </dialog>
    ,element)
})

export default Modal