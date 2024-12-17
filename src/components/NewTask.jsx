import { useState } from "react"

export default function NewTask({onAddTask}){

    const[taskContent,setTaskContent] = useState('')

    function handleOnChange(event){
        setTaskContent(event.target.value)
    }

    function addTaskHandler(){ 
        onAddTask(taskContent)
        setTaskContent('')
    }

    return <div className="flex items-center gap-4">
        <input type="text" value={taskContent} onChange={handleOnChange} className="w-64 px-2 py-1 rounded-sm bg-stone-200"/>
        <button className="text-stone-700 hover:text-stone-950" onClick={addTaskHandler}>Add Task</button>
    </div>
}