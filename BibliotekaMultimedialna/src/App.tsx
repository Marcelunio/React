import { use, useState } from "react";
interface task
{
 initial_title:string
  finished:boolean;
  index:number;
}
interface taskProps
{
   initial_title:string
  finished:boolean;
  onClick?:React.MouseEventHandler | undefined;
}




const initial_tasks:task[]=[{initial_title:"Test",finished:false,index:0},{initial_title:"Test2",finished:false,index:1}]
function TaskManager()
{
  const [Tasks,setTasks]=useState<task[]>(initial_tasks);
  const [filter,setFilter]=useState("all");
  const [sort,setSort]=useState("alphabet")
  let mTasks=[...Tasks]
  let [filteredTasks,setFilteredTasks]=useState([...Tasks])
  function handleTaskClick(index:number)
  {
    mTasks[index].finished=!mTasks[index].finished;
    setTasks(mTasks);
  }
  function handleFilterClick()
  {
    if(filter=="all")
    {
      setFilter("done")
      setFilteredTasks(Tasks.filter((task:task)=>{return task.finished}))    
    }
    else if(filter=="done")
    {
      setFilter("to be done")
      setFilteredTasks(Tasks.filter((task:task)=>{return !task.finished}))
    }
    else 
    {
      setFilter("all")
      setFilteredTasks(Tasks.filter((task:task)=>{return true}))
    }
  }
  // function handleSortClick()
  // {
      
  // }
  return(
    <>
    <button onClick={handleFilterClick}>{filter}</button>
    {filteredTasks.map((task:task,index)=>{return(<Task onClick={()=>handleTaskClick(task.index)} key={task.index} initial_title={task.initial_title} finished={task.finished}/>)})}
    <p>Ilość niewykonanych: {(Tasks.filter((task)=>{return !task.finished})).length}</p>
  </>
  )
}

function Task({initial_title,finished,onClick}:taskProps)
{
  return(
    <div onClick={onClick}>{initial_title} {finished ?"wykonano":"do zrobienia"} </div>
  )
}

export function App()
{
  return(<div><TaskManager /></div>)
  
  }
export default App
