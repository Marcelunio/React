import { use, useState } from "react";
interface task
{
 initial_title:string
  finished:boolean;
}
interface taskProps extends task
{
  onClick?:React.MouseEventHandler | undefined;
}




const initial_tasks:taskProps[]=[{initial_title:"Test",finished:false}]
function TaskManager()
{
  const [Tasks,setTasks]=useState<taskProps[]>(initial_tasks);
  // const [filter,setFilter]=useState("all");
  // const [sort,setSort]=useState("alphabet")
  let mTasks=[...Tasks]
  // let filteredTasks=[...Tasks]
  function handleTaskClick(index:number)
  {
    mTasks[index].finished=!mTasks[index].finished;
    setTasks(mTasks);
  }
  // function handleFilterClick()
  // {
  //   if(filter=="all")
  //   {
  //     setFilter("done")
      
  //   }
  //   else if(filter=="done")
  //   {
  //     setFilter("undone")
  //   }
  //   else 
  //   {
  //     setFilter("all")
  //   }
  // }
  // function handleSortClick()
  // {

  // }
  return(
    <>
    {Tasks.map((task:taskProps,index)=>{return(<Task onClick={()=>handleTaskClick(index)} key={index} initial_title={task.initial_title} finished={task.finished}/>)})}
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
