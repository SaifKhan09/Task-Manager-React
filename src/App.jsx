import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

import { useState } from "react";

function App() {

  const [projectState,setSelectedProject] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  })

  function handleAddTask(text){
    setSelectedProject(prev => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prev.selectedProjectId,
        id: taskId
      }
      return {...prev,tasks: [...prev.tasks,newTask]}
    })
  }

  function handleDeleteTask(id){
    setSelectedProject(prev=>{
      const newTasks = prev.tasks.filter(task => task.id !== id)
      return {...prev,tasks:newTasks}
    })
  }

  function handleSelectProject(id){
    setSelectedProject(prevState => ({...prevState,selectedProjectId:id}))
  }

  function handleStartAddProject(){
    setSelectedProject(prev=> {return {...prev,selectedProjectId:null}})
  }

  function handleCancelAddProject(){
    setSelectedProject(prev=> {return {...prev,selectedProjectId:undefined}})
  }

  function handleAddProject(projectData){
    setSelectedProject(prev => {
      const newProject = {
        ...projectData,
        id: Math.random()
      }
      return {...prev, selectedProjectId:undefined ,projects: [...prev.projects,newProject]}
    })
  }

  function handleDeleteProject(id){
    setSelectedProject(prev=>{
      const newProjects = prev.projects.filter(project => project.id !== id)
      return {...prev,projects:newProjects,selectedProjectId:undefined}
    })
  }

  let content;

  if(projectState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  }
  else if(projectState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }
  else{
    const selectedProject = projectState.projects.find(project=>project.id===projectState.selectedProjectId)
    content = <SelectedProject tasks={projectState.tasks}  addTask={handleAddTask} deleteTask={handleDeleteTask} project={selectedProject} handleDelete={handleDeleteProject}/>
  }

  console.log(projectState)
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar selectedProjectId={projectState.selectedProjectId} onSelectProject={handleSelectProject} onStartAddProject={handleStartAddProject} projects={projectState.projects}/>
      {content}
    </main>
  );
}

export default App;
