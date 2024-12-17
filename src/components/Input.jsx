import { forwardRef } from "react"

const Input = forwardRef(function Input({isTextArea,label,...props},importedRef){

    const classes = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"

    const textElement = <textarea ref={importedRef} className={classes} {...props}/>
    const inputElement = <input ref={importedRef} className={classes} {...props}/>

    return (
    <p className="flex flex-col gap-1 my-4">
        <label className="text-2m font-bold uppercase text-stone-500">{label}</label>
        {isTextArea ? textElement: inputElement}
    </p>
    )
}) 

export default Input