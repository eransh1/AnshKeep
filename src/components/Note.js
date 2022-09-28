import React, { useState } from 'react'
import "../css/Note.css"

const Note = ({item,notes,setNotes,setEditId,pinnedId,setPinnedId}) => {
console.log(item)
const[isPinned,setIsPinned]=useState(false)

  function removeHandler(id){
const newNotes=notes.filter(elem=>{
  if(elem.id!==id){
return elem;
  }
})
setNotes(newNotes)
  }

function editHandler(id){
  setEditId(id)
notes.filter(elem=>{
  if(elem.id===id){
    document.getElementById("editTitle").value=item.title
    document.getElementById("editTag").value=item.tag
    document.getElementById("editDesc").value=item.desc
    
  }
})
}

function handlePinClick(id){

setIsPinned(current=>!current)
if(isPinned!==true){setPinnedId((prev)=>{
return ([...prev,id])
})}

else{
  const newPinnedId= pinnedId.filter((elem)=>{
return (elem!==id)
  })
setPinnedId(newPinnedId)
}
}


  return (
    <div className='note' style={{textTransform:"capitalize"}}>
    <br />
<h1 style={{marginTop:"1rem",marginBottom:"1rem"}}>{item.title}</h1>
<p className='tag'>{item.tag}</p>
<p>{item.desc}</p>
<button onClick={()=>editHandler(item.id)} className='edit' data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
<button onClick={()=>removeHandler(item.id)} className='del'>Delete</button>
<div>
<svg onClick={()=>handlePinClick(item.id)} className='pin' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pin" viewBox="0 0 16 16">
  <path d={"M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z"+(isPinned?"":"m1.58 1.408-.002-.001.002.001zm-.002-.001.002.001A.5.5 0 0 1 6 2v5a.5.5 0 0 1-.276.447h-.002l-.012.007-.054.03a4.922 4.922 0 0 0-.827.58c-.318.278-.585.596-.725.936h7.792c-.14-.34-.407-.658-.725-.936a4.915 4.915 0 0 0-.881-.61l-.012-.006h-.002A.5.5 0 0 1 10 7V2a.5.5 0 0 1 .295-.458 1.775 1.775 0 0 0 .351-.271c.08-.08.155-.17.214-.271H5.14c.06.1.133.191.214.271a1.78 1.78 0 0 0 .37.282z")}/>
</svg>
</div>

    </div>
  )
}

export default Note