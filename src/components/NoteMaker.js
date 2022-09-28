import React, { useState } from 'react'
import "../css/NoteMaker.css"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const NoteMaker = ({title,desc,tag,setTag,setTitle,setDesc,notes,setNotes}) => {

  const[textAreaShow,setTextAreaShow]=useState(false)


function showTextAreaa(){
  setTextAreaShow(true)
}

  function handleChange(e){
    if(e.target.id==="title"){setTitle(e.target.value)}
    else if(e.target.id==="tag"){setTag(e.target.value)}
      else(setDesc(e.target.value))
  }

  function addNoteHandler(e){
e.preventDefault();
if(title!==""&&desc!==""){
  setNotes((note)=>{
    return([...note,{
      title:title,
      tag:tag,
      desc:desc,
      id:new Date().getTime()
    }])
    })
}
else if(title===""&&desc===""){toast("Inputs can not be kept empty");return}
else if(title===""){toast("Title can not be kept empty");return}
else if(desc===""){toast("Description can not be kept empty");return}

setTitle("")
setDesc("")
setTag("")
setTextAreaShow(false)
  }
  return (
    <div className='containerr'>
    <ToastContainer />
        <form>
            <input onClick={showTextAreaa} onChange={handleChange} name='title' id='title' type="text" placeholder='Title' value={title} />
           {textAreaShow?<>
            <input onChange={handleChange} name='tag' id='tag' type="text" placeholder='Tag' value={tag} />
            <textarea onChange={handleChange} name="desc" id="desc" rows="3" placeholder='Take a Note' value={desc} ></textarea>
            <button onClick={addNoteHandler}>+</button>
           </>:null} 
        </form>
    </div>
  )
}

export default NoteMaker