import React from 'react'
import "../css/Modal.css"
import "../css/NoteMaker.css"

const Modal = ({editId,notes,setNotes}) => {


  function updateHandler(){
const updateNotes=notes.map(elem=>{
  if(editId===elem.id){
    return ({...elem,title:document.getElementById("editTitle").value,tag:document.getElementById("editTag").value,
    desc:document.getElementById("editDesc").value})
  }
  else{return elem;}
  
})
setNotes(updateNotes)
  }
  return (
   <>
    

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit Note</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
      
        <form>
            <input name='title' id='editTitle' type="text" placeholder='Title'  />
            <input name='tag' id='editTag' type="text" placeholder='Tag'  />
            <textarea name="desc" id="editDesc" rows="3" placeholder='Take a Note'></textarea>
        </form>
    
     
      <div class="modal-footer">
        <button onClick={updateHandler} type="button" class="btn btn-primary" data-bs-dismiss="modal">Save Changes</button>
      </div>
    </div>
  </div>
</div>

   </>
  )
}

export default Modal